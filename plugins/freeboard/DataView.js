// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ freeboard-datagrid-plugin                                            │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ http://blog.onlinux.fr/                                            │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT license.                                    │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Freeboard widget plugin.                                           │ \\
// └────────────────────────────────────────────────────────────────────┘ \\


var Button = function (config) {
	jsGrid.Field.call(this, config);
};

Button.prototype = new jsGrid.Field({

	align: "center", // redefine general property 'align'

	sorter: function (date1, date2) {
		return 0;
	},

	itemTemplate: function (value, item) {
		return $("<input>").on('click', function () { this.fn(item) }).title(this.title)
	},

	insertTemplate: function (value, item) {
		return ""
	},

	editTemplate: function (value, item) {
		return $("<input>").on('click', function () { this.fn(item) }).title(this.title)
	},

	insertValue: function () {
		return ''
	},

	editValue: function () {
		return ''
	}
});

jsGrid.fields.button = Button;

function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}

(function () {
	//
	// DECLARATIONS
	//
	var LOADING_INDICATOR_DELAY = 1000;
	var SLIDER_ID = 0;

	freeboard.addStyle('.datagrid', "border: 2px solid #3d3d3d;background-color: #222;margin: 10px;");
	freeboard.addStyle('.datagrid-label', 'margin-left: 10px; margin-top: 10px; text-transform: capitalize;');
	freeboard.addStyle('.myui-datagrid-handle', "width: 1.5em !important; height: 1.5em !important; border-radius: 50%; top: -.4em !important; margin-left:-1.0em !important;");
	freeboard.addStyle('.ui-datagrid-range', 'background: #F90;');

	// ## A Widget Plugin
	//
	// -------------------
	// ### Widget Definition
	//
	// -------------------
	// **freeboard.loadWidgetPlugin(definition)** tells freeboard that we are giving it a widget plugin. It expects an object with the following:
	freeboard.loadWidgetPlugin({
		// Same stuff here as with datasource plugin.
		"type_name": "jsGrid",
		"display_name": "jsGrid Data grid View Plugin",
		"description": "Database grid view. Data is an array of objects.",
		// **external_scripts** : Any external scripts that should be loaded before the plugin instance is created.

		// **fill_size** : If this is set to true, the widget will fill be allowed to fill the entire space given it, otherwise it will contain an automatic padding of around 10 pixels around it.
		"fill_size": true,
		"settings": [
			{
				"name": "title",
				"display_name": "Title",
				"type": "text",
				"default_value": ""
			},


			{
				"name": "backend",
				"display_name": "Data backend. Can be any array, or a freeboard DB controller datasource.",
				"type": "target",
				"default_value": "=[]"
			},

			{
				"name": "selection",
				"display_name": "Selection",
				'description': "Selection gets assigned here. If no selection, empty obj.  Set obj.arrival to save changes back to array(The data doesn't matter, it reads as the time when it was set.)",
				"type": "target",
				"default_value": ""
			},

			{
				"name": "allowEdit",
				"display_name": "Allow Editing",
				'description': "",
				"type": "boolean",
				"default_value": true
			},
			{
				name: 'columns',
				type: 'json',
				display_name: "Columns",
				schema: {
					"type": "array",
					"items": {
						"type": "object",
						"additionalProperties": false,
						"properties": {
							"title": {
								"type": "string",
								"required":true,
							},
							"name": {
								"type": "string",
								"title":"Data column",
								"required":true,
							},
							"type":{
									"type": "string",
									"title":"Type",
									"required":true,
									"enum":['control','text','number','checkbox','textarea']
							},
							"width":{
								"type": "number",
								"title":"Width(px)",
								"required":true,
								"default": 40
						}
						}
					}
				},
				default_value:[{type:'text', title:"Name", name:"name",width:50},{type:'control', title:"", name:"",width:40}]

			}

	
		],
		// Same as with datasource plugin, but there is no updateCallback parameter in this case.
		newInstance: function (settings, newInstanceCallback) {
			newInstanceCallback(new datagrid(settings));
		}
	});





	// ### Widget Implementation
	//
	// -------------------
	// Here we implement the actual widget plugin. We pass in the settings;
	var datagrid = function (settings) {

		//jsgrid.sortStrategies.natural = Intl.Collator(undefined, {numeric: true, sensitivity: 'base'}).compare;

		if (settings.backend && settings.data) {
			throw new Error("Cannot use both the backend and the data options at the same time")
		}
		var self = this;



		self.currentSettings = settings;

		self.data = []

		var thisWidgetId = "datagrid-" + SLIDER_ID++;
		var thisWidgetContainer = $('<div class="datagrid-widget datagrid-label" id="__' + thisWidgetId + '"></div>');


		var titleElement = $('<h2 class="section-title datagrid-label"></h2>');

		var gridBox = $('<div>', { id: thisWidgetId }).css('width', '90%').css('height','400px');
		var theGridbox = '#' + thisWidgetId;
		var theValue = '#' + "value-" + thisWidgetId;

		self.backend = 0


		//When operating with direct data, we wrap the row that we give to selection targets so
		//that they can use it to edit stuff, and have the grid auto-update.

		//When we use a backend, it is expected that the backend object will provide the listeners.
		self.makeExternalEditRow = function (d) {
			var row = _.clone(d)

			var m = {
				set: function (o, k, v) {

					//We use time-triggered updates.
					//Saving a record is done by putting a listener on the arrival time.
					//The value we set is irrelevant, it is always set to the current time.
					if (k == 'arrival') {
						row.arrival = Date.now() * 1000
						row.time = Date.now() * 1000
						self.upsert(row)
						$(theGridbox).jsGrid('refresh');
					}
					else {
						//Ignore non changes
						if(row[k]==v)
						{
							return;
						}
						//If we make a local change, update the timestamp to tell about it.
						row.time = Date.now() * 1000
						row[k] = v;
					}

					self.dataTargets.selection(proxy)
				}
			}

			var proxy= new Proxy(row, m)
			return proxy
		}

		//Cleans up the data, so it has all the Freeboard DB spec required keys.
		var normalize = function (f) {
			f.id = f.id || uuidv4()
			f.name = f.name || f.id
			f.time = f.time || parseInt(Date.now() * 1000)
			f.arrival = f.arrival || f.time
		}


		self.upsert = function (d) {
			var x = 0
			if (!d) {
				return;
			}

			//Insert and update are always the same for now, on any of our builtin backends.
			if(self.backend)
			{
				return self.backend.insertItem(d)
			}


			if ((self.data == undefined) || (self.data == '')) {
				self.data = []
			}
			normalize(d)

			for (i of self.data) {
				if (i.id == d.id) {
					//No need to do anything, user never actually updated anything.
					if (_.isEqual(i, d)) {
						return;
					}

					//Newer takes precedence
					if(i.time >= d.time)
					{
						return
					}
					Object.assign(i, d);
					self.dataTargets['backend'](self.data)
					return;
				}
			}


		
			self.data.push(d)
			self.dataTargets['backend'](self.data)
		}


		self.arrayController =
		{

			deleteItem: function (d) {
				var x = 0
				if (_.isEqual(i.selection, d)) {
					self.setSelection({})
				}
				for (i of self.data) {
					if (i.id == d.id) {
						self.data = _.without(self.data, i)
					}
				}
				self.dataTargets['backend'](self.data)

			},
			updateItem: self.upsert,
			insertItem: self.upsert,
			loadData: function (filter) {
				var q = nSQL(self.data || []).query('select')
				for (i in filter) {
					if (filter[i] && !(['sortField', 'sortOrder', 'pageIndex', 'pageSize'].indexOf(i) > -1)) {
						q = q.where(['LOWER(' + i + ')', '=', String(filter[i]).toLowerCase()])
					}
				}
				if (filter.sortOrder) {
					q = q.orderBy([filter.sortField + ' ' + filter.sortOrder.toUpperCase()])
				}
				q = q.limit(filter.pageSize).offset((filter.pageIndex - 1) * filter.pageSize)

				var f = async function ex() {
					var d = await q.exec()
					//Someday this should show the right page count after filtering?
					return { data: d, itemsCount: self.data.length }
				}
				return f()
			}

		}

		self.setSelection = function (d) {
			self.dataTargets.selection(self.makeExternalEditRow(d))
		}


		self.acceptData = function (x) {
			if (x == 0) {
				x = self.data
			}

			self.data = x;

			//Normalize by adding the special DB properties.
			for (f in self.data) {
				normalize(f)
			}

		}

		self.refreshGrid = function (x) {
			if (x == 0) {
				x = self.data
			}

			self.data = x;

			//Normalize by adding the special DB properties.
			for (f in self.data) {
				normalize(f)
			}



			$(theGridbox).jsGrid('destroy');

			var writebackData = function () {
				self.dataTargets['backend'](self.data);
			}


			var columns = []
			for (i of self.currentSettings.columns || []) {
				var c = {}
				Object.assign(c, i)

				if (c.type == "control") {
					if(!self.currentSettings.allowEdit)
					{
						continue;
					}
				}

				columns.push(c)
			}

			var s ={
				width: "95%",
				height: "250px",

				inserting: self.currentSettings.allowEdit,
				editing: self.currentSettings.allowEdit,
				sorting: true,
				paging: true,
				pageLoading: true,
				filtering: true,
				
				rowClick: function (r) {
					self.setSelection(r.item)
				},

				controller: self.backend || self.arrayController,

				fields: columns
			}


			//Real backends do this themaselves.
			if(self.backend==0)
			{
				s.onItemDeleted=writebackData
				s.onItemUpdated=writebackData
				s.onItemInserted=writebackData
			}

			$(theGridbox).jsGrid(s);
			$(theGridbox).jsGrid('loadData');
			try {
				textFit($('.jsgrid-header-cell:not(.jsgrid-control-field)'))
			}
			catch (e) {
				console.log(e)
			}

		}
		$(theGridbox).jsGrid('refresh');



		//console.log( "theGridbox ", theGridbox);

		titleElement.html(self.currentSettings.title);
		self.value = self.currentSettings.value || 0;

		var requestChange = false;
		var target;

		// Here we create an element to hold the text we're going to display. We're going to set the value displayed in it below.

		// **render(containerElement)** (required) : A public function we must implement that will be called when freeboard wants us to render the contents of our widget. The container element is the DIV that will surround the widget.
		self.render = function (containerElement) {
			$(containerElement)
				.append(thisWidgetContainer);
			titleElement.appendTo(thisWidgetContainer);
			gridBox.appendTo(thisWidgetContainer);

			self.refreshGrid(0)



			$(theValue).html(self.value + self.currentSettings.unit);
			$(theGridbox).removeClass("ui-widget-content");
		}

		// **getHeight()** (required) : A public function we must implement that will be called when freeboard wants to know how big we expect to be when we render, and returns a height. This function will be called any time a user updates their settings (including the first time they create the widget).
		//
		// Note here that the height is not in pixels, but in blocks. A block in freeboard is currently defined as a rectangle that is fixed at 300 pixels wide and around 45 pixels multiplied by the value you return here.
		//
		// Blocks of different sizes may be supported in the future.
		self.getHeight = function () {
			return 5;
		}

		// **onSettingsChanged(newSettings)** (required) : A public function we must implement that will be called when a user makes a change to the settings.
		self.onSettingsChanged = function (newSettings) {
			if (newSettings.backend && newSettings.data) {
				throw new Error("Cannot use both the backend and the data options at the same time")
			}

			// Normally we'd update our text element with the value we defined in the user settings above (the_text), but there is a special case for settings that are of type **"calculated"** -- see below.
			self.currentSettings = newSettings;
			titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));
			self.currentSettings.unit = self.currentSettings.unit || ''
			self.refreshGrid(0)

			self.setSelection({});

		}

		// **onCalculatedValueChanged(settingName, newValue)** (required) : A public function we must implement that will be called when a calculated value changes. Since calculated values can change at any time (like when a datasource is updated) we handle them in a special callback function here.
		self.onCalculatedValueChanged = function (settingName, newValue) {


			if (settingName == 'columns') {
				self.refreshGrid(0)
			}


			if (settingName == 'backend') {
				//Special case handle switching between locally managed data array mode, and backend mode.
				//The way we tell the difference is looking for a loadData function.

				if(typeof(newValue.loadData)=='function')
				{
					if(self.backend)
					{
						self.backend = newValue;
						$(theGridbox).jsGrid('loadData');
					}
					else{
						self.backend = newValue;
						self.refreshGrid(0)
					}
				}
				else{
					if(self.backend)
					{
						self.backend = 0;
						self.acceptData(newValue || []);
						self.refreshGrid(0);
					}
					else{
						self.acceptData(newValue || [])
						$(theGridbox).jsGrid('loadData');
					}
				}
			}

		}


		// **onDispose()** (required) : Same as with datasource plugins.
		self.onDispose = function () {
			$(theGridbox).jsGrid('destroy');
		}
	}
}());
