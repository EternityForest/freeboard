DatasourceModel =  function(theFreeboardModel, datasourcePlugins) {
	var self = this;

	function disposeDatasourceInstance()
	{
		if(!_.isUndefined(self.datasourceInstance))
		{
			if(_.isFunction(self.datasourceInstance.onDispose))
			{
				self.datasourceInstance.onDispose();
			}

			self.datasourceInstance = undefined;
		}
	}

	this.name = ko.observable();
	this.latestData = ko.observable();
	this.settings = {};

	this.setSettings =(async function(newValue)
	{
		self.settings = newValue;
		if(!_.isUndefined(self.datasourceInstance) && _.isFunction(self.datasourceInstance.onSettingsChanged))
		{
			try{
				await self.datasourceInstance.onSettingsChanged(newValue);
			}
			catch(e)
			{
				freeboard.showDialog($("<pre>").text(String(e)), "Error changing settings","OK")
				throw e;
			}
		}
	});

	this.updateCallback = function(newData)
	{
		theFreeboardModel.processDatasourceUpdate(self, newData);

		self.latestData(newData);

		var now = new Date();
		self.last_updated(now.toLocaleTimeString());
	}

	this.type = '';
	this.setType = async function(newValue)
	{
		if(self.type==newValue)
		{
			return;
		}
		self.type=newValue;

		disposeDatasourceInstance();

		if((newValue in datasourcePlugins) && _.isFunction(datasourcePlugins[newValue].newInstance))
		{
			var datasourceType = datasourcePlugins[newValue];

			async function finishLoad()
			{
				await datasourceType.newInstance(self.settings, function(datasourceInstance)
					{
						self.datasourceInstance = datasourceInstance;
						datasourceInstance.updateNow();

					}, self.updateCallback)
				
			}

			// Do we need to load any external scripts?
			if(datasourceType.external_scripts)
			{
				head.js(datasourceType.external_scripts.slice(0), finishLoad); // Need to clone the array because head.js adds some weird functions to it
			}
			else
			{
				await finishLoad();
			}
		}
	};

	this.last_updated = ko.observable("never");
	this.last_error = ko.observable();

	this.serialize = function()
	{
		return {
			name    : self.name(),
			type    : self.type,
			settings: self.settings
		};
	}

	this.deserialize = async function(object)
	{
		await self.setSettings(object.settings);
		self.name(object.name);
		await self.setType(object.type);
	}

	this.getDataRepresentation = function(dataPath)
	{
		var valueFunction = new Function("data", "return " + dataPath + ";");
		return valueFunction.call(undefined, self.latestData());
	}

	this.updateNow = function()
	{
		if(!_.isUndefined(self.datasourceInstance) && _.isFunction(self.datasourceInstance.updateNow))
		{
			self.datasourceInstance.updateNow();
		}
	}

	this.dispose = function()
	{
		disposeDatasourceInstance();
	}
}
