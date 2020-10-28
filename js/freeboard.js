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
		self.setSettings(object.settings);
		self.name(object.name);
		self.type=object.type;
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

DeveloperConsole = function(theFreeboardModel)
{
	function showDeveloperConsole()
	{
		var pluginScriptsInputs = [];
		var container = $('<div></div>');
		var addScript = $('<div class="table-operation text-button">ADD</div>');
		var table = $('<table class="table table-condensed sub-table"></table>');

		table.append($('<thead style=""><tr><th>Plugin Script URL</th></tr></thead>'));

		var tableBody = $("<tbody></tbody>");

		table.append(tableBody);

		container.append($("<p>Here you can add references to other scripts to load datasource or widget plugins.</p>"))
			.append(table)
			.append(addScript)
            .append('<p>To learn how to build plugins for freeboard, please visit <a target="_blank" href="http://freeboard.github.io/freeboard/docs/plugin_example.html">http://freeboard.github.io/freeboard/docs/plugin_example.html</a></p>');

		function refreshScript(scriptURL)
		{
			$('script[src="' + scriptURL + '"]').remove();
		}

		function addNewScriptRow(scriptURL)
		{
			var tableRow = $('<tr></tr>');
			var tableOperations = $('<ul class="board-toolbar"></ul>');
			var scriptInput = $('<input class="table-row-value" style="width:100%;" type="text">');
			var deleteOperation = $('<li><i class="icon-trash icon-white"></i></li>').click(function(e){
				pluginScriptsInputs = _.without(pluginScriptsInputs, scriptInput);
				tableRow.remove();
			});

			pluginScriptsInputs.push(scriptInput);

			if(scriptURL)
			{
				scriptInput.val(scriptURL);
			}

			tableOperations.append(deleteOperation);
			tableBody
				.append(tableRow
				.append($('<td></td>').append(scriptInput))
					.append($('<td class="table-row-operation">').append(tableOperations)));
		}

		_.each(theFreeboardModel.plugins(), function(pluginSource){

			addNewScriptRow(pluginSource);

		});

		addScript.click(function(e)
		{
			addNewScriptRow();
		});

		new DialogBox(container, "Developer Console", "OK", null, function(){

			// Unload our previous scripts
			_.each(theFreeboardModel.plugins(), function(pluginSource){

				$('script[src^="' + pluginSource + '"]').remove();

			});

			theFreeboardModel.plugins.removeAll();

			_.each(pluginScriptsInputs, function(scriptInput){

				var scriptURL = scriptInput.val();

				if(scriptURL && scriptURL.length > 0)
				{
					theFreeboardModel.addPluginSource(scriptURL);

					// Load the script with a cache buster
					head.js(scriptURL + "?" + Date.now());
				}
			});

		});
	}

	// Public API
	return {
		showDeveloperConsole : function()
		{
			showDeveloperConsole();
		}
	}
}

function DialogBox(contentElement, title, okTitle, cancelTitle, okCallback,cancelCallback)
{
	var modal_width = 900;

	// Initialize our modal overlay
	var overlay = $('<div id="modal_overlay" style="display:none;"></div>');

	var modalDialog = $('<div class="modal"></div>');

	function closeModal()
	{
		overlay.fadeOut(200, function()
		{
			$(this).remove();
		});
	}

	// Create our header
	modalDialog.append('<header><h2 class="title">' + title + "</h2></header>");

	$('<section></section>').appendTo(modalDialog).append(contentElement);

	// Create our footer
	var footer = $('<footer></footer>').appendTo(modalDialog);

	if(okTitle)
	{
		$('<span id="dialog-ok" class="text-button">' + okTitle + '</span>').appendTo(footer).click(function()
		{
			var hold = false;

			if(_.isFunction(okCallback))
			{
				hold = okCallback();
			}

			if(!hold)
			{
				closeModal();
			}
		});
	}

	if(cancelTitle)
	{
		$('<span id="dialog-cancel" class="text-button">' + cancelTitle + '</span>').appendTo(footer).click(function()
		{
			if(_.isFunction(cancelCallback))
			{
				cancelCallback();
			}


			closeModal();
		});
	}

	overlay.append(modalDialog);
	$("body").append(overlay);
	overlay.fadeIn(200);
}

function FreeboardModel(datasourcePlugins, widgetPlugins, freeboardUI)
{
	var self = this;

	var SERIALIZATION_VERSION = 1;

	this.version = 0;
	this.isEditing = ko.observable(false);

	this.allow_edit = ko.observable(false);
	this.allow_edit.subscribe(function(newValue)
	{
		if(newValue)
		{
			$("#main-header").show();
		}
		else
		{
			$("#main-header").hide();
		}
	});
    
   

	this.header_image = ko.observable();
	this.plugins = ko.observableArray();
	this.datasources = ko.observableArray();
    
         
	this.panes = ko.observableArray();
	this.datasourceData = {};
    
    //We want to let widgets assign to properties of data sources.
    //However, we can't let them directly overwrite the reactive object that the plugin
    //provides,that would mess everything up.  So we give a read only view of datasourcedata
    var dataSourceProtectionHandler = {
        set: function(obj, prop, value) {
            throw new Error("You cannot directly overwrite a datasource here. Try assigning to one of the properties of the source instead")
        }
    };
    
    self.protectedDataSourceData =  new Proxy(self.datasourceData, dataSourceProtectionHandler)
   
	this.processDatasourceUpdate = function(datasourceModel, newData)
	{
		//TODO should we actually iterate everything on every change?
		var datasourceName = datasourceModel.name();

		self.datasourceData[datasourceName] = newData;

		_.each(self.panes(), function(pane)
		{
			_.each(pane.widgets(), function(widget)
			{
				widget.processDatasourceUpdate(datasourceName);
			});
		});
	}

	this._datasourceTypes = ko.observable();
	this.datasourceTypes = ko.computed({
		read: function()
		{
			self._datasourceTypes();

			var returnTypes = [];

			_.each(datasourcePlugins, function(datasourcePluginType)
			{
				var typeName = datasourcePluginType.type_name;
				var displayName = typeName;

				if(!_.isUndefined(datasourcePluginType.display_name))
				{
					displayName = datasourcePluginType.display_name;
				}

				returnTypes.push({
					name        : typeName,
					display_name: displayName
				});
			});

			return returnTypes;
		}
	});

	this._widgetTypes = ko.observable();
	this.widgetTypes = ko.computed({
		read: function()
		{
			self._widgetTypes();

			var returnTypes = [];

			_.each(widgetPlugins, function(widgetPluginType)
			{
				var typeName = widgetPluginType.type_name;
				var displayName = typeName;

				if(!_.isUndefined(widgetPluginType.display_name))
				{
					displayName = widgetPluginType.display_name;
				}

				returnTypes.push({
					name        : typeName,
					display_name: displayName
				});
			});

			return returnTypes;
		}
	});

	this.addPluginSource = function(pluginSource)
	{
		if(pluginSource && self.plugins.indexOf(pluginSource) == -1)
		{
			self.plugins.push(pluginSource);
		}
	}

	this.globalSettings = {}
	this.globalSettingsDefaults={theme:{}}
	Object.assign(this.globalSettings, this.globalSettingsDefaults)


	this.globalSettingsHandlers={}

	this.serialize = function()
	{
		var panes = [];

		_.each(self.panes(), function(pane)
		{
			panes.push(pane.serialize());
		});

		var datasources = [];

		_.each(self.datasources(), function(datasource)
		{
			datasources.push(datasource.serialize());
		});

		return {
			version     : SERIALIZATION_VERSION,
			header_image: self.header_image(),
			allow_edit  : self.allow_edit(),
			plugins     : self.plugins(),
			panes       : panes,
			datasources : datasources,
			columns     : freeboardUI.getUserColumns(),
			globalSettings : self.globalSettings
		};
	}

	this.setGlobalSettings=function(d)
	{
		Object.assign(self.globalSettings, d)
		for(var i in self.globalSettingsHandlers)
		{
			self.globalSettingsHandlers[i](self.globalSettings)
		}
	}



	this.globalSettingsHandlers['css'] = function(d)
	{
		for(i in d.theme)
		{
			var x = d.theme[i]

			//Wrap URLs in the URL tag
			if(i.includes('-image'))
			{
				if(x)
				{
					x = 'url('+x+')'
				}

			}
			document.body.style.setProperty(i, x)
		}
	}

	this.deserialize = async function(object, finishedCallback)
	{
		self.clearDashboard();

		async function finishLoad()
		{
			freeboardUI.setUserColumns(object.columns);

			if(!_.isUndefined(object.allow_edit))
			{
				self.allow_edit(object.allow_edit);
			}
			else
			{
				self.allow_edit(true);
			}
			self.version = object.version || 0;
			self.header_image(object.header_image);


			_.each(object.datasources, async function(datasourceConfig)
			{
				var datasource = new DatasourceModel(self, datasourcePlugins);
				//Deserialize can be an async function if it wants to be.
				await Promise.resolve(datasource.deserialize(datasourceConfig));
				self.addDatasource(datasource);
			});

			var sortedPanes = _.sortBy(object.panes, function(pane){
				return freeboardUI.getPositionForScreenSize(pane).row;
			});

			_.each(sortedPanes, function(paneConfig)
			{
				var pane = new PaneModel(self, widgetPlugins);
				pane.deserialize(paneConfig);
				self.panes.push(pane);
			});

			if(self.allow_edit() && self.panes().length == 0)
			{
				self.setEditing(true);
			}

			if(_.isFunction(finishedCallback))
			{
				await Promise.resolve(finishedCallback());
			}

			for (var prop in self.globalSettings) {
					delete self.globalSettings[prop];
			}
			Object.assign(self.globalSettings, self.globalSettingsDefaults)
			
		
			self.setGlobalSettings(object.globalSettings||{})

			freeboardUI.processResize(true);

			
		}

		// This could have been self.plugins(object.plugins), but for some weird reason head.js was causing a function to be added to the list of plugins.
		_.each(object.plugins, function(plugin)
		{
			self.addPluginSource(plugin);
		});

		// Load any plugins referenced in this definition
		if(_.isArray(object.plugins) && object.plugins.length > 0)
		{
			head.js(object.plugins, async function()
			{
				await finishLoad();
			});
		}
		else
		{
			await finishLoad();
		}
	}

	this.clearDashboard = function()
	{
		freeboardUI.removeAllPanes();

		_.each(self.datasources(), function(datasource)
		{
			datasource.dispose();
		});

		_.each(self.panes(), function(pane)
		{
			pane.dispose();
		});

		self.plugins.removeAll();
		self.datasources.removeAll();
		self.panes.removeAll();
	}

	this.loadDashboard = function(dashboardData, callback)
	{
		freeboardUI.showLoadingIndicator(true);
		self.deserialize(dashboardData, function()
		{
			freeboardUI.showLoadingIndicator(false);

			if(_.isFunction(callback))
			{
				callback();
			}

        freeboard.emit("dashboard_loaded");
		});
	}

	this.loadDashboardFromLocalFile = function()
	{
		// Check for the various File API support.
		if(window.File && window.FileReader && window.FileList && window.Blob)
		{
			var input = document.createElement('input');
			input.type = "file";
			$(input).on("change", function(event)
			{
				var files = event.target.files;

				if(files && files.length > 0)
				{
					var file = files[0];
					var reader = new FileReader();

					reader.addEventListener("load", function(fileReaderEvent)
					{

						var textFile = fileReaderEvent.target;
						var jsonObject = JSON.parse(textFile.result);


						self.loadDashboard(jsonObject);
						self.setEditing(false);
					});

					reader.readAsText(file);
				}

			});
			$(input).trigger("click");
		}
		else
		{
			alert('Unable to load a file in this browser.');
		}
	}

	this.downloadDashboardClicked = function(){
		var target = $(event.currentTarget);
		var siblingsShown = target.data('siblings-shown') || false;
		if(!siblingsShown){
			$(event.currentTarget).siblings('label').fadeIn('slow');
		}else{
			$(event.currentTarget).siblings('label').fadeOut('slow');
		}
		target.data('siblings-shown', !siblingsShown);
	}

	this.downloadDashboard = function(_thisref, event)
	{
		var pretty = $(event.currentTarget).data('pretty');
		var contentType = 'application/octet-stream';
		var a = document.createElement('a');
		if(pretty){
			var blob = new Blob([JSON.stringify(self.serialize(), null, '\t')], {'type': contentType});
		}else{
			var blob = new Blob([JSON.stringify(self.serialize())], {'type': contentType});
		}
		document.body.appendChild(a);
		a.href = window.URL.createObjectURL(blob);
		a.download = "dashboard.json";
		a.target="_self";
		a.click();
	}

	this.addDatasource = function(datasource)
	{
		self.datasources.push(datasource);
	}

	this.deleteDatasource = function(datasource)
	{
		delete self.datasourceData[datasource.name()];
		datasource.dispose();
		self.datasources.remove(datasource);
	}

	this.createPane = function()
	{
		var newPane = new PaneModel(self, widgetPlugins);
		self.addPane(newPane);
	}

	this.addGridColumnLeft = function()
	{
		freeboardUI.addGridColumnLeft();
	}

	this.addGridColumnRight = function()
	{
		freeboardUI.addGridColumnRight();
	}

	this.subGridColumnLeft = function()
	{
		freeboardUI.subGridColumnLeft();
	}

	this.subGridColumnRight = function()
	{
		freeboardUI.subGridColumnRight();
	}

	this.addPane = function(pane)
	{
		self.panes.push(pane);
	}

	this.deletePane = function(pane)
	{
		pane.dispose();
		self.panes.remove(pane);
	}

	this.deleteWidget = function(widget)
	{
		ko.utils.arrayForEach(self.panes(), function(pane)
		{
			pane.widgets.remove(widget);
		});

		widget.dispose();
	}

	this.setEditing = function(editing, animate)
	{
		// Don't allow editing if it's not allowed
		if(!self.allow_edit() && editing)
		{
			return;
		}

		self.isEditing(editing);

		if(_.isUndefined(animate))
		{
			animate = true;
		}

		var animateLength = (animate) ? 250 : 0;
		var barHeight = $("#admin-bar").outerHeight();

		if(!editing)
		{
			$("#toggle-header-icon").addClass("icon-wrench").removeClass("icon-chevron-up");
			$(".gridster .gs_w").css({cursor: "default"});
			$("#main-header").animate({"top": "-" + barHeight + "px"}, animateLength);
			$("#board-content").animate({"top": "20"}, animateLength);
			$("#main-header").data().shown = false;
			$(".sub-section").unbind();
			freeboardUI.disableGrid();
		}
		else
		{
			$("#toggle-header-icon").addClass("icon-chevron-up").removeClass("icon-wrench");
			$(".gridster .gs_w").css({cursor: "pointer"});
			$("#main-header").animate({"top": "0px"}, animateLength);
			$("#board-content").animate({"top": (barHeight + 20) + "px"}, animateLength);
			$("#main-header").data().shown = true;
			freeboardUI.attachWidgetEditIcons($(".sub-section"));
			freeboardUI.enableGrid();
		}

		freeboardUI.showPaneEditIcons(editing, animate);
	}
	

	this.toggleEditing = function()
	{
		var editing = !self.isEditing();
		self.setEditing(editing);
	}
}

function FreeboardUI()
{
	var PANE_MARGIN = 10;
	var PANE_WIDTH = 300;
	var MIN_COLUMNS = 3;
	var COLUMN_WIDTH = PANE_MARGIN + PANE_WIDTH + PANE_MARGIN;

	var userColumns = MIN_COLUMNS;

	var loadingIndicator = $('<div class="wrapperloading"><div class="loading up" ></div><div class="loading down"></div></div>');
	var grid;

	function processResize(layoutWidgets)
	{
		var maxDisplayableColumns = getMaxDisplayableColumnCount();
		var repositionFunction = function(){};
		if(layoutWidgets)
		{
			repositionFunction = function(index)
			{
				var paneElement = this;
				var paneModel = ko.dataFor(paneElement);

				var newPosition = getPositionForScreenSize(paneModel);
				$(paneElement).attr("data-sizex", Math.min(paneModel.col_width(),
					maxDisplayableColumns, grid.cols))
					.attr("data-row", newPosition.row)
					.attr("data-col", newPosition.col);

				paneModel.processSizeChange();
			}
		}

		updateGridWidth(Math.min(maxDisplayableColumns, userColumns));

		repositionGrid(repositionFunction);
		updateGridColumnControls();
	}

	function addGridColumn(shift)
	{
		var num_cols = grid.cols + 1;
		if(updateGridWidth(num_cols))
		{
			repositionGrid(function() {
				var paneElement = this;
				var paneModel = ko.dataFor(paneElement);

				var prevColumnIndex = grid.cols > 1 ? grid.cols - 1 : 1;
				var prevCol = paneModel.col[prevColumnIndex];
				var prevRow = paneModel.row[prevColumnIndex];
				var newPosition;
				if(shift)
				{
					leftPreviewCol = true;
					var newCol = prevCol < grid.cols ? prevCol + 1 : grid.cols;
					newPosition = {row: prevRow, col: newCol};
				}
				else
				{
					rightPreviewCol = true;
					newPosition = {row: prevRow, col: prevCol};
				}
				$(paneElement).attr("data-sizex", Math.min(paneModel.col_width(), grid.cols))
					.attr("data-row", newPosition.row)
					.attr("data-col", newPosition.col);
			});
		}
		updateGridColumnControls();
		userColumns = grid.cols;
	}

	function subtractGridColumn(shift)
	{
		var num_cols = grid.cols - 1;
		if(updateGridWidth(num_cols))
		{
			repositionGrid(function() {
				var paneElement = this;
				var paneModel = ko.dataFor(paneElement);

				var prevColumnIndex = grid.cols + 1;
				var prevCol = paneModel.col[prevColumnIndex];
				var prevRow = paneModel.row[prevColumnIndex];
				var newPosition;
				if(shift)
				{
					var newCol = prevCol > 1 ? prevCol - 1 : 1;
					newPosition = {row: prevRow, col: newCol};
				}
				else
				{
					var newCol = prevCol <= grid.cols ? prevCol : grid.cols;
					newPosition = {row: prevRow, col: newCol};
				}
				$(paneElement).attr("data-sizex", Math.min(paneModel.col_width(), grid.cols))
					.attr("data-row", newPosition.row)
					.attr("data-col", newPosition.col);
			});
		}
		updateGridColumnControls();
		userColumns = grid.cols;
	}

	function updateGridColumnControls()
	{
		var col_controls = $(".column-tool");
		var available_width = $("#board-content").width();
		var max_columns = Math.floor(available_width / COLUMN_WIDTH);

		if(grid.cols <= MIN_COLUMNS)
		{
			col_controls.addClass("min");
		}
		else
		{
			col_controls.removeClass("min");
		}

		if(grid.cols >= max_columns)
		{
			col_controls.addClass("max");
		}
		else
		{
			col_controls.removeClass("max");
		}
	}

	function getMaxDisplayableColumnCount()
	{
		var available_width = $("#board-content").width();
		return Math.floor(available_width / COLUMN_WIDTH);
	}

	function updateGridWidth(newCols)
	{
		if(newCols === undefined || newCols < MIN_COLUMNS)
		{
			newCols = MIN_COLUMNS;
		}

		var max_columns = getMaxDisplayableColumnCount();
		if(newCols > max_columns)
		{
			newCols = max_columns;
		}

		// +newCols to account for scaling on zoomed browsers
		var new_width = (COLUMN_WIDTH * newCols) + newCols;
		$(".responsive-column-width").css("max-width", new_width);

		if(newCols === grid.cols)
		{
			return false; 
		}
		else
		{
			return true;
		}
	}

	function repositionGrid(repositionFunction)
	{
		var rootElement = grid.$el;

		rootElement.find("> li").unbind().removeData();
		$(".responsive-column-width").css("width", "");
		grid.generate_grid_and_stylesheet();

		rootElement.find("> li").each(repositionFunction);

		grid.init();
		$(".responsive-column-width").css("width", grid.cols * PANE_WIDTH + (grid.cols * PANE_MARGIN * 2));
	}

	function getUserColumns()
	{
		return userColumns;
	}

	function setUserColumns(numCols)
	{
		userColumns = Math.max(MIN_COLUMNS, numCols);
	}

	ko.bindingHandlers.grid = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			// Initialize our grid
			grid = $(element).gridster({
				widget_margins        : [PANE_MARGIN, PANE_MARGIN],
				widget_base_dimensions: [PANE_WIDTH, 10],
				resize: {
					enabled : false,
					axes : "x"
				}
			}).data("gridster");

			processResize(false)

			grid.disable();
		}
	}

	function addPane(element, viewModel, isEditing)
	{
		var position = getPositionForScreenSize(viewModel);
		var col = position.col;
		var row = position.row;
		var width = Number(viewModel.width());
		var height = Number(viewModel.getCalculatedHeight());

		grid.add_widget(element, width, height, col, row);

		if(isEditing)
		{
			showPaneEditIcons(true);
		}

		updatePositionForScreenSize(viewModel, row, col);

		$(element).attrchange({
			trackValues: true,
			callback   : function(event)
			{
				if(event.attributeName == "data-row")
				{
                    updatePositionForScreenSize(viewModel, Number(event.newValue), undefined);
				}
				else if(event.attributeName == "data-col")
				{
                    updatePositionForScreenSize(viewModel, undefined, Number(event.newValue));
				}
			}
		});
	}

	function updatePane(element, viewModel)
	{
		// If widget has been added or removed
		var calculatedHeight = viewModel.getCalculatedHeight();

		var elementHeight = Number($(element).attr("data-sizey"));
		var elementWidth = Number($(element).attr("data-sizex"));

		if(calculatedHeight != elementHeight || viewModel.col_width() !=  elementWidth)
		{
			grid.resize_widget($(element), viewModel.col_width(), calculatedHeight, function(){
				grid.set_dom_grid_height();
			});
		}
	}

	function updatePositionForScreenSize(paneModel, row, col)
	{
		var displayCols = grid.cols;

		if(!_.isUndefined(row)) paneModel.row[displayCols] = row;
		if(!_.isUndefined(col)) paneModel.col[displayCols] = col;
	}

	function showLoadingIndicator(show)
	{
		if(show)
		{
			loadingIndicator.fadeOut(0).appendTo("body").fadeIn(500);
		}
		else
		{
	    		loadingIndicator.fadeOut(500).remove();
		}
	}

	function showPaneEditIcons(show, animate)
	{
		if(_.isUndefined(animate))
		{
			animate = true;
		}

		var animateLength = (animate) ? 250 : 0;

		if(show)
		{
			$(".pane-tools").fadeIn(animateLength);//.css("display", "block").animate({opacity: 1.0}, animateLength);
			$("#column-tools").fadeIn(animateLength);
		}
		else
		{
			$(".pane-tools").fadeOut(animateLength);//.animate({opacity: 0.0}, animateLength).css("display", "none");//, function()
			$("#column-tools").fadeOut(animateLength);
		}
	}

	function attachWidgetEditIcons(element)
	{
		$(element).hover(function()
		{
			showWidgetEditIcons(this, true);
		}, function()
		{
			showWidgetEditIcons(this, false);
		});
	}

	function showWidgetEditIcons(element, show)
	{
		if(show)
		{
			$(element).find(".sub-section-tools").fadeIn(250);
		}
		else
		{
			$(element).find(".sub-section-tools").fadeOut(250);
		}
	}

	function getPositionForScreenSize(paneModel)
	{
		var cols = grid.cols;

		if(_.isNumber(paneModel.row) && _.isNumber(paneModel.col)) // Support for legacy format
		{
			var obj = {};
			obj[cols] = paneModel.row;
			paneModel.row = obj;


			obj = {};
			obj[cols] = paneModel.col;
			paneModel.col = obj;
		}

		var newColumnIndex = 1;
		var columnDiff = 1000;

		for(var columnIndex in paneModel.col)
		{
			if(columnIndex == cols)	 // If we already have a position defined for this number of columns, return that position
			{
				return {row: paneModel.row[columnIndex], col: paneModel.col[columnIndex]};
			}
			else if(paneModel.col[columnIndex] > cols) // If it's greater than our display columns, put it in the last column
			{
				newColumnIndex = cols;
			}
			else // If it's less than, pick whichever one is closest
			{
				var delta = cols - columnIndex;

				if(delta < columnDiff)
				{
					newColumnIndex = columnIndex;
					columnDiff = delta;
				}
			}
		}

		if(newColumnIndex in paneModel.col && newColumnIndex in paneModel.row)
		{
			return {row: paneModel.row[newColumnIndex], col: paneModel.col[newColumnIndex]};
		}

		return {row:1,col:newColumnIndex};
	}


	// Public Functions
	return {
		showLoadingIndicator : function(show)
		{
			showLoadingIndicator(show);
		},
		showPaneEditIcons : function(show, animate)
		{
			showPaneEditIcons(show, animate);
		},
		attachWidgetEditIcons : function(element)
		{
			attachWidgetEditIcons(element);
		},
		getPositionForScreenSize : function(paneModel)
		{
			return getPositionForScreenSize(paneModel);
		},
		processResize : function(layoutWidgets)
		{
			processResize(layoutWidgets);
		},
		disableGrid : function()
		{
			grid.disable();
		},
		enableGrid : function()
		{
			grid.enable();
		},
		addPane : function(element, viewModel, isEditing)
		{
			addPane(element, viewModel, isEditing);
		},
		updatePane : function(element, viewModel)
		{
			updatePane(element, viewModel);
		},
		removePane : function(element)
		{
			grid.remove_widget(element);
		},
		removeAllPanes : function()
		{
			grid.remove_all_widgets();
		},
		addGridColumnLeft : function()
		{
			addGridColumn(true);
		},
		addGridColumnRight : function()
		{
			addGridColumn(false);
		},
		subGridColumnLeft : function()
		{
			subtractGridColumn(true);
		},
		subGridColumnRight : function()
		{
			subtractGridColumn(false);
		},
		getUserColumns : function()
		{
			return getUserColumns();
		},
		setUserColumns : function(numCols)
		{
			setUserColumns(numCols);
		}
	}
}

JSEditor = function () {
	var assetRoot = ""

	function setAssetRoot(_assetRoot) {
		assetRoot = _assetRoot;
	}

	function displayJSEditor(value, callback) {

		var exampleText = "// Example: Convert temp from C to F and truncate to 2 decimal places.\n// return (datasources[\"MyDatasource\"].sensor.tempInF * 1.8 + 32).toFixed(2);";

		// If value is empty, go ahead and suggest something
		if (!value) {
			value = exampleText;
		}

		var codeWindow = $('<div class="code-window"></div>');
		var codeMirrorWrapper = $('<div class="code-mirror-wrapper"></div>');
		var codeWindowFooter = $('<div class="code-window-footer"></div>');
		var codeWindowHeader = $('<div class="code-window-header cm-s-ambiance">This javascript will be re-evaluated any time a datasource referenced here is updated, and the value you <code><span class="cm-keyword">return</span></code> will be displayed in the widget. You can assume this javascript is wrapped in a function of the form <code><span class="cm-keyword">function</span>(<span class="cm-def">datasources</span>)</code> where datasources is a collection of javascript objects (keyed by their name) corresponding to the most current data in a datasource.</div>');

		codeWindow.append([codeWindowHeader, codeMirrorWrapper, codeWindowFooter]);

		$("body").append(codeWindow);

		var codeMirrorEditor = CodeMirror(codeMirrorWrapper.get(0),
			{
				value: value,
				mode: "javascript",
				theme: "ambiance",
				indentUnit: 4,
				lineNumbers: true,
				matchBrackets: true,
				autoCloseBrackets: true
			}
		);

		var closeButton = $('<span id="dialog-cancel" class="text-button">Close</span>').click(function () {
			if (callback) {
				var newValue = codeMirrorEditor.getValue();

				if (newValue === exampleText) {
					newValue = "";
				}

				callback(newValue);
				codeWindow.remove();
			}
		});

		codeWindowFooter.append(closeButton);
	}

	// Public API
	return {
		displayJSEditor: function (value, callback) {
			displayJSEditor(value, callback);
		},
		setAssetRoot: function (assetRoot) {
			setAssetRoot(assetRoot)
		}
	}
}

function PaneModel(theFreeboardModel, widgetPlugins) {
	var self = this;

	this.title = ko.observable();
	this.width = ko.observable(1);
	this.row = {};
	this.col = {};

	this.col_width = ko.observable(1);
	this.col_width.subscribe(function(newValue)
	{
		self.processSizeChange();
	});

	this.widgets = ko.observableArray();

	this.addWidget = function (widget) {
		this.widgets.push(widget);
	}

	this.widgetCanMoveUp = function (widget) {
		return (self.widgets.indexOf(widget) >= 1);
	}

	this.widgetCanMoveDown = function (widget) {
		var i = self.widgets.indexOf(widget);

		return (i < self.widgets().length - 1);
	}

	this.moveWidgetUp = function (widget) {
		if (self.widgetCanMoveUp(widget)) {
			var i = self.widgets.indexOf(widget);
			var array = self.widgets();
			self.widgets.splice(i - 1, 2, array[i], array[i - 1]);
		}
	}

	this.moveWidgetDown = function (widget) {
		if (self.widgetCanMoveDown(widget)) {
			var i = self.widgets.indexOf(widget);
			var array = self.widgets();
			self.widgets.splice(i, 2, array[i + 1], array[i]);
		}
	}

	this.processSizeChange = function()
	{
		// Give the animation a moment to complete. Really hacky.
		// TODO: Make less hacky. Also, doesn't work when screen resizes.
		setTimeout(function(){
			_.each(self.widgets(), function (widget) {
				widget.processSizeChange();
			});
		}, 1000);
	}

	this.getCalculatedHeight = function () {
		var sumHeights = _.reduce(self.widgets(), function (memo, widget) {
			return memo + widget.height();
		}, 0);

		//Convert from 60px height blocks presumably
		sumHeights *= 6;

		//Add 3 because we want an extra 30px for... margins?
		sumHeights += 3;

		sumHeights *= 10;

		// var extraGridSize = getComputedStyle(document.documentElement).getPropertyValue('--extra-grid-height')
		// //Remove the px
		// extraGridSize = extraGridSize.substring(0,extraGridSize.length-2);

		// sumHeights+= extraGridSize;

		var titleHeight = getComputedStyle(document.documentElement).getPropertyValue('--title-line-height')
		//Remove the px
		titleHeight = titleHeight.substring(0,titleHeight.length-2);
		var rows = Math.ceil((sumHeights + parseFloat(titleHeight)) / 30);

		return Math.max(4, rows);
	}

	this.serialize = function () {
		var widgets = [];

		_.each(self.widgets(), function (widget) {
			widgets.push(widget.serialize());
		});

		return {
			title: self.title(),
			width: self.width(),
			row: self.row,
			col: self.col,
			col_width: Number(self.col_width()),
			widgets: widgets
		};
	}

	this.deserialize = function (object) {
		self.title(object.title);
		self.width(object.width);

		self.row = object.row;
		self.col = object.col;
		self.col_width(object.col_width || 1);

		_.each(object.widgets, function (widgetConfig) {
			var widget = new WidgetModel(theFreeboardModel, widgetPlugins);
			widget.deserialize(widgetConfig);
			self.widgets.push(widget);
		});
	}

	this.dispose = function () {
		_.each(self.widgets(), function (widget) {
			widget.dispose();
		});
	}
}

PluginEditor = function(jsEditor, valueEditor)
{
	function _displayValidationError(settingName, errorMessage)
	{
		var errorElement = $('<div class="validation-error"></div>').html(errorMessage);
		$("#setting-value-container-" + settingName).append(errorElement);
	}

	function _removeSettingsRows()
	{
		if($("#setting-row-instance-name").length)
		{
			$("#setting-row-instance-name").nextAll().remove();
		}
		else
		{
			$("#setting-row-plugin-types").nextAll().remove();
		}
	}

	function _isNumerical(n)
	{
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function _appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue, includeRemove,target)
	{
		var input = $('<textarea></textarea>');

		if(settingDef.multi_input) {
			input.change(function() {
				var arrayInput = [];
				$(valueCell).find('textarea').each(function() {
					var thisVal = $(this).val();
					if(thisVal) {
						arrayInput = arrayInput.concat(thisVal);
					}
				});
				newSettings.settings[settingDef.name] = arrayInput;
			});
		} else {
			input.change(function() {
				newSettings.settings[settingDef.name] = $(this).val();
			});
		}

		if(currentValue) {
			input.val(currentValue);
		}

		valueEditor.createValueEditor(input);

		var datasourceToolbox = $('<ul class="board-toolbar datasource-input-suffix"></ul>');
		var wrapperDiv = $('<div class="calculated-setting-row"></div>');
		wrapperDiv.append(input).append(datasourceToolbox);

		if(target)
		{
			var datasourceTool = $('<li><i class="icon-plus icon-white"></i><label>DATATARGET</label></li>')
				.mousedown(function(e) {
					e.preventDefault();
					if($(input).is(":focus"))
					{
						$(input).insertAtCaret("datasources[\"").trigger("freeboard-eval");
					}
					else
					{
						$(input).val("").focus().insertAtCaret("datasources[\"").trigger("freeboard-eval");
					}				
				});
		}
		else
		{
			var datasourceTool = $('<li><i class="icon-plus icon-white"></i><label>DATASOURCE</label></li>')
			.mousedown(function(e) {
				e.preventDefault();
	
				if($(input).val().length==0)
				{
					$(input).insertAtCaret('=')
				}
				$(input).insertAtCaret("datasources[\"").trigger("freeboard-eval");
	
			});
		}
		datasourceToolbox.append(datasourceTool);

		if(!target)
		{
			var jsEditorTool = $('<li><i class="icon-fullscreen icon-white"></i><label>.JS EDITOR</label></li>')
				.mousedown(function(e) {
					e.preventDefault();
					jsEditor.displayJSEditor(input.val(), function(result) {
						input.val(result);
						input.change();
					});
				});
			datasourceToolbox.append(jsEditorTool);
		}

		if(includeRemove) {
			var removeButton = $('<li class="remove-setting-row"><i class="icon-minus icon-white"></i><label></label></li>')
				.mousedown(function(e) {
					e.preventDefault();
					wrapperDiv.remove();
					$(valueCell).find('textarea:first').change();
				});
			datasourceToolbox.prepend(removeButton);
		}

		$(valueCell).append(wrapperDiv);
	}

	function createPluginEditor(title, pluginTypes, currentTypeName, currentSettingsValues, settingsSavedCallback)
	{
		var newSettings = {
			type    : currentTypeName,
			settings: {}
		};

		function createSettingRow(name, displayName,regex)
		{
			var tr = $('<div id="setting-row-' + name + '" class="form-row"></div>').appendTo(form);

			tr.append('<div class="form-label"><label class="control-label">' + displayName + '</label></div>');
			return $('<div id="setting-value-container-' + name + '" class="form-value"></div>').appendTo(tr);
		}

		var selectedType;
		var form = $('<div></div>');

		var pluginDescriptionElement = $('<div id="plugin-description"></div>').hide();
		form.append(pluginDescriptionElement);
        
        var toDestroy = []

		function createSettingsFromDefinition(settingsDefs, typeaheadSource, typeaheadDataSegment)
		{
			_.each(settingsDefs, function(settingDef)
			{
				// Set a default value if one doesn't exist
				if(!_.isUndefined(settingDef.default_value) && _.isUndefined(currentSettingsValues[settingDef.name]))
				{
					currentSettingsValues[settingDef.name] = settingDef.default_value;
				}

				var displayName = settingDef.name;

				if(!_.isUndefined(settingDef.display_name))
				{
					displayName = settingDef.display_name;
				}


				var valueCell = createSettingRow(settingDef.name, displayName);

				switch (settingDef.type)
				{
					case "array":
					{
						var subTableDiv = $('<div class="form-table-value-subtable"></div>').appendTo(valueCell);

						var subTable = $('<table class="table table-condensed sub-table"></table>').appendTo(subTableDiv);
						var subTableHead = $("<thead></thead>").hide().appendTo(subTable);
						var subTableHeadRow = $("<tr></tr>").appendTo(subTableHead);
						var subTableBody = $('<tbody></tbody>').appendTo(subTable);

						var currentSubSettingValues = [];

						// Create our headers
						_.each(settingDef.settings, function(subSettingDef)
						{
							var subsettingDisplayName = subSettingDef.name;

							if(!_.isUndefined(subSettingDef.display_name))
							{
								subsettingDisplayName = subSettingDef.display_name;
							}

							$('<th>' + subsettingDisplayName + '</th>').appendTo(subTableHeadRow);
                            
                                if((['text', 'datasource','target'].indexOf(subSettingDef.type)>-1) && subSettingDef.options)
                                {
                                    $('<datalist></datalist>').attr("id",settingDef.name+subSettingDef.name+"ac").appendTo(subTableHeadRow);
                                    $.each(subSettingDef.options(), function(i, item) {
                                        $("#"+settingDef.name+subSettingDef.name+"ac").append($("<option>").attr('value', i).text(item));
                                        });
                                }
						});

						if(settingDef.name in currentSettingsValues)
						{
							currentSubSettingValues = currentSettingsValues[settingDef.name];
						}

						function processHeaderVisibility()
						{
							if(newSettings.settings[settingDef.name].length > 0)
							{
								subTableHead.show();
							}
							else
							{
								subTableHead.hide();
							}
						}

						function createSubsettingRow(subsettingValue)
						{
							var subsettingRow = $('<tr></tr>').appendTo(subTableBody);

							var newSetting = {};

							if(!_.isArray(newSettings.settings[settingDef.name]))
							{
								newSettings.settings[settingDef.name] = [];
							}

							newSettings.settings[settingDef.name].push(newSetting);
                            
                            
              

							_.each(settingDef.settings, function(subSettingDef)
							{
								var subsettingCol = $('<td></td>').appendTo(subsettingRow);
								var subsettingValueString = "";

								if(!_.isUndefined(subsettingValue[subSettingDef.name]))
								{
									subsettingValueString = subsettingValue[subSettingDef.name];
								}

								newSetting[subSettingDef.name] = subsettingValueString;

								if(subSettingDef.type== "option")
									{				
										var input = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(subsettingCol)).change(function()
										{
											newSetting[subSettingDef.name] = $(this).val();

										});
				
										_.each(subSettingDef.options, function(option)
										{
				
											var optionName;
											var optionValue;
				
											if(_.isObject(option))
											{
												optionName = option.name;
												optionValue = option.value;
											}
											else
											{
												optionName = option;
											}
				
											if(_.isUndefined(optionValue))
											{
												optionValue = optionName;
											}
				
											if(_.isUndefined(defaultValue))
											{
												defaultValue = optionValue;
											}
				
											$("<option></option>").text(optionName).attr("value", optionValue).appendTo(input);
										});
				
								
											input.val(currentSettingsValues[subsettingValueString]);
						
									}
								else{
								$('<input class="table-row-value" type="text">').appendTo(subsettingCol).val(subsettingValueString).attr('list',settingDef.name+subSettingDef.name+"ac").change(function()
								{
									newSetting[subSettingDef.name] = $(this).val();
								});
								}
							});

							subsettingRow.append($('<td class="table-row-operation"></td>').append($('<ul class="board-toolbar"></ul>').append($('<li></li>').append($('<i class="icon-trash icon-white"></i>').click(function()
							{
								var subSettingIndex = newSettings.settings[settingDef.name].indexOf(newSetting);

								if(subSettingIndex != -1)
								{
									newSettings.settings[settingDef.name].splice(subSettingIndex, 1);
									subsettingRow.remove();
									processHeaderVisibility();
								}
							})))));

							subTableDiv.scrollTop(subTableDiv[0].scrollHeight);

							processHeaderVisibility();
						}

						$('<div class="table-operation text-button">ADD</div>').appendTo(valueCell).click(function()
						{
							var newSubsettingValue = {};

							_.each(settingDef.settings, function(subSettingDef)
							{
								newSubsettingValue[subSettingDef.name] = "";
							});

							createSubsettingRow(newSubsettingValue);
						});

						// Create our rows
						_.each(currentSubSettingValues, function(currentSubSettingValue, subSettingIndex)
						{
							createSubsettingRow(currentSubSettingValue);
						});

						break;
					}
					
					case "html-wysywig":
					{
                        //We use font awesome instead of the SVG
                        $.trumbowyg.svgPath = false;
                        $.trumbowyg.hideButtonTexts = true;
                        
						newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

						var text = $('<div><label>' + settingDef.name + '</label> <br> <textarea id="'+settingDef.name+'-trumbo"></textarea></div>').appendTo(valueCell);
                        var l= ["ffffff","000000","eeece1","1f497d","4f81bd","c0504d","9bbb59","8064a2","4bacc6","f79646","ffff00","f2f2f2","7f7f7f","ddd9c3","c6d9f0","dbe5f1","f2dcdb","ebf1dd"]
                        $('#'+settingDef.name+'-trumbo').trumbowyg({
                               btns: [
                                        ['viewHTML'],
                                        ['undo', 'redo'], // Only supported in Blink browsers
                                        ['formatting'],
                                        ['strong', 'em', 'del'],
                                        ['superscript', 'subscript'],
                                        ['foreColor', 'backColor'],
                                        ['link'],
                                        ['base64'],
                                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                                        ['unorderedList', 'orderedList'],
                                        ['horizontalRule'],
                                        ['removeformat'],
                                        ['fullscreen'],
                                        ['fontsize','fontfamily','preformatted'],
                                        ['emoji','table','specialChars']
                                    ],
                                    plugins: {
                                        colors: {
                                            displayAsList: true,
                                            foreColorList: l,
                                            backColorList: l,
                                            
										},
										fontfamily:
										{
											fontList:[
												{name: 'Seriff', family: 'FBSerif'},
												{name: 'Color Emoji', family: 'NotoColorEmoji'},
												{name: 'Sans', family: 'FBSans'},
												{name: 'Monospace', family: 'FBMono'},
												{name: 'Cursive', family: 'FBCursive'},
												{name: 'Pandora', family: 'Pandora'},
												{name: 'Chalkboard', family: 'Chalkboard'},
												{name: 'Handwriting', family: 'Handwriting'},
												{name: 'Rough Script', family: 'RoughScript'},
												{name: 'Chancery', family: 'Chancery'},
												{name: 'Comic', family: 'FBComic'},
												{name: 'Blackletter', family: 'Blackletter'},
												{name: 'Stencil', family: 'Stencil'},
												{name: 'Pixel', family: 'Pixel'},
												{name: 'B612', family: 'B612'},
												{name: 'DIN', family: 'DIN'},
												{name: 'Penguin Attack', family: 'PenguinAttack'},
												{name: 'DSEG7', family: 'DSEG7'},
												{name: 'DSEG14', family: 'DSEG14'}


											]
										}
                                    }
                        });
                       
                        
						$('#'+settingDef.name+'-trumbo').on('tbwchange',function(e)
						{
							newSettings.settings[settingDef.name] =  $('#'+settingDef.name+'-trumbo').trumbowyg('html')
						});
                        $('#'+settingDef.name+'-trumbo').on('tbwblur',function(e)
						{
							newSettings.settings[settingDef.name] =  $('#'+settingDef.name+'-trumbo').trumbowyg('html')
						});


						if(settingDef.name in currentSettingsValues)
						{
							 $('#'+settingDef.name+'-trumbo').trumbowyg('html',currentSettingsValues[settingDef.name])
						}
						toDestroy.push($('#editor').trumbowyg)

						break;
					}
					
					case "boolean":
					{
						newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

						var onOffSwitch = $('<div class="onoffswitch"><label class="onoffswitch-label" for="' + settingDef.name + '-onoff"><div class="onoffswitch-inner"><span class="on">YES</span><span class="off">NO</span></div><div class="onoffswitch-switch"></div></label></div>').appendTo(valueCell);

						var input = $('<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="' + settingDef.name + '-onoff">').prependTo(onOffSwitch).change(function()
						{
							newSettings.settings[settingDef.name] = this.checked;
						});

						if(settingDef.name in currentSettingsValues)
						{
							input.prop("checked", currentSettingsValues[settingDef.name]);
						}

						break;
					}

										
					case "button":
					{
						var input = $('<button></button>').appendTo($('<div class="styled-select"></div>').appendTo(valueCell)).html(settingDef.html).on('click',function()
						{
							settingDef.onclick(currentSettingsValues,freeboard.getDatasourceInstance(currentSettingsValues.name));
						});

						break;
					}

					case "option":
					{
						var defaultValue = currentSettingsValues[settingDef.name];

						var input = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(valueCell)).change(function()
						{
							newSettings.settings[settingDef.name] = $(this).val();
						});

						_.each(settingDef.options, function(option)
						{

							var optionName;
							var optionValue;

							if(_.isObject(option))
							{
								optionName = option.name;
								optionValue = option.value;
							}
							else
							{
								optionName = option;
							}

							if(_.isUndefined(optionValue))
							{
								optionValue = optionName;
							}

							if(_.isUndefined(defaultValue))
							{
								defaultValue = optionValue;
							}

							$("<option></option>").text(optionName).attr("value", optionValue).appendTo(input);
						});

						newSettings.settings[settingDef.name] = defaultValue;

						if(settingDef.name in currentSettingsValues)
						{
							input.val(currentSettingsValues[settingDef.name]);
						}

						break;
					}
					default:
					{
						newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

						if(settingDef.type == "calculated" || settingDef.type == "target")
						{
							var target=settingDef.type == "target";

							if(settingDef.name in currentSettingsValues) {
								var currentValue = currentSettingsValues[settingDef.name];
								if(settingDef.multi_input && _.isArray(currentValue)) {
									var includeRemove = false;
									for(var i=0; i<currentValue.length; i++) {
										_appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue[i], includeRemove,target);
										includeRemove = true;
									}
								} else {
									_appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue, false,target);
								}
							} else {
								_appendCalculatedSettingRow(valueCell, newSettings, settingDef, null, false,target);
							}

							if(settingDef.multi_input) {
								var inputAdder = $('<ul class="board-toolbar"><li class="add-setting-row"><i class="icon-plus icon-white"></i><label>ADD</label></li></ul>')
									.mousedown(function(e) {
										e.preventDefault();
										_appendCalculatedSettingRow(valueCell, newSettings, settingDef, null, true,target);
									});
								$(valueCell).siblings('.form-label').append(inputAdder);
							}
						}
						else
						{


							if (settingDef.name=='name')
							{
								//Discourage names that are not valid identifiers
								var defaultregex='[a-zA-Z][a-zA-Z0-9_]+'
							}
							else{
								var defaultregex=null;
							}
							
							var regex = settingDef.regex;
							if(_.isUndefined(settingDef.regex))
							{
								regex=defaultregex;
							}
							
							      
                            if(settingDef.options)
                                {
                                    $('<datalist></datalist>').attr("id",settingDef.name+"ac").appendTo(valueCell);
                                    $.each(settingDef.options(), function(i, item) {
                                        $("#"+settingDef.name+"ac").append($("<option>").attr('value', i).text(item || i));
                                        });
                                }


							var input = $('<input type="text">').appendTo(valueCell).attr('pattern',regex).attr('list',settingDef.name+"ac").change(function()
							{
								if(settingDef.type == "number")
								{
									newSettings.settings[settingDef.name] = Number($(this).val());
								}
								else
								{
									newSettings.settings[settingDef.name] = $(this).val();
								}
							});

							if(settingDef.type == "integer")
							{
								input.attr('type','number')
							}

							if(settingDef.name in currentSettingsValues)
							{
								input.val(currentSettingsValues[settingDef.name]);
							}

							if(typeaheadSource && settingDef.typeahead_data_field){
								input.addClass('typeahead_data_field-' + settingDef.typeahead_data_field);
							}

							if(typeaheadSource && settingDef.typeahead_field){
								var typeaheadValues = [];

								input.keyup(function(event){
									if(event.which >= 65 && event.which <= 91) {
										input.trigger('change');
									}
								});

								$(input).autocomplete({
									source: typeaheadValues,
									select: function(event, ui){
										input.val(ui.item.value);
										input.trigger('change');
									}
								});

								input.change(function(event){
									var value = input.val();
									var source = _.template(typeaheadSource)({input: value});
									$.get(source, function(data){
										if(typeaheadDataSegment){
											data = data[typeaheadDataSegment];
										}
										data  = _.select(data, function(elm){
											return elm[settingDef.typeahead_field][0] == value[0];
										});

										typeaheadValues = _.map(data, function(elm){
											return elm[settingDef.typeahead_field];
										});
										$(input).autocomplete("option", "source", typeaheadValues);

										if(data.length == 1){
											data = data[0];
											//we found the one. let's use it to populate the other info
											for(var field in data){
												if(data.hasOwnProperty(field)){
													var otherInput = $(_.template('input.typeahead_data_field-<%= field %>')({field: field}));
													if(otherInput){
														otherInput.val(data[field]);
														if(otherInput.val() != input.val()) {
															otherInput.trigger('change');
														}
													}
												}
											}
										}
									});
								});
							}
						}

						break;
					}
				}

				if(!_.isUndefined(settingDef.suffix))
				{
					valueCell.append($('<div class="input-suffix">' + settingDef.suffix + '</div>'));
				}

				if(!_.isUndefined(settingDef.description))
				{
					valueCell.append($('<div class="setting-description">' + settingDef.description + '</div>'));
				}
			});
		}


		new DialogBox(form, title, "Save", "Cancel", function()
		{
			$(".validation-error").remove();

			// Loop through each setting and validate it
			for(var index = 0; index < selectedType.settings.length; index++)
			{
				var settingDef = selectedType.settings[index];

				if(settingDef.required && (_.isUndefined(newSettings.settings[settingDef.name]) || newSettings.settings[settingDef.name] == ""))
				{
					_displayValidationError(settingDef.name, "This is required.");
					return true;
				}
				else if(settingDef.type == "integer" && (newSettings.settings[settingDef.name] % 1 !== 0))
				{
					_displayValidationError(settingDef.name, "Must be a whole number.");
					return true;
				}
				else if(settingDef.type == "number" && !_isNumerical(newSettings.settings[settingDef.name]))
				{
					_displayValidationError(settingDef.name, "Must be a number.");
					return true;
				}
			}

			if(_.isFunction(settingsSavedCallback))
			{
				settingsSavedCallback(newSettings);
			}
		});
        
        for (var i of toDestroy)
        {
            i('destroy')
        }

		// Create our body
		var pluginTypeNames = _.keys(pluginTypes);
		var typeSelect;

		if(pluginTypeNames.length > 1)
		{
			var typeRow = createSettingRow("plugin-types", "Type");
			typeSelect = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(typeRow));

			typeSelect.append($("<option>Select a type...</option>").attr("value", "undefined"));

			_.each(pluginTypes, function(pluginType)
			{
				typeSelect.append($("<option></option>").text(pluginType.display_name).attr("value", pluginType.type_name));
			});

			typeSelect.change(function()
			{
				newSettings.type = $(this).val();
				newSettings.settings = {};

				// Remove all the previous settings
				_removeSettingsRows();

				selectedType = pluginTypes[typeSelect.val()];

				if(_.isUndefined(selectedType))
				{
					$("#setting-row-instance-name").hide();
					$("#dialog-ok").hide();
				}
				else
				{
					$("#setting-row-instance-name").show();

					if(selectedType.description && selectedType.description.length > 0)
					{
						pluginDescriptionElement.html(selectedType.description).show();
					}
					else
					{
						pluginDescriptionElement.hide();
					}

					$("#dialog-ok").show();
					createSettingsFromDefinition(selectedType.settings, selectedType.typeahead_source, selectedType.typeahead_data_segment);
				}
			});
		}
		else if(pluginTypeNames.length == 1)
		{
			selectedType = pluginTypes[pluginTypeNames[0]];
			newSettings.type = selectedType.type_name;
			newSettings.settings = {};
			createSettingsFromDefinition(selectedType.settings);
		}

		if(typeSelect)
		{
			if(_.isUndefined(currentTypeName))
			{
				$("#setting-row-instance-name").hide();
				$("#dialog-ok").hide();
			}
			else
			{
				$("#dialog-ok").show();
				typeSelect.val(currentTypeName).trigger("change");
			}
		}
	}

	// Public API
	return {
		createPluginEditor : function(
			title,
			pluginTypes,
			currentInstanceName,
			currentTypeName,
			currentSettingsValues,
			settingsSavedCallback)
		{
			createPluginEditor(title, pluginTypes, currentInstanceName, currentTypeName, currentSettingsValues, settingsSavedCallback);
		}
	}
}

ValueEditor = function(theFreeboardModel)
{
	var _veDatasourceRegex = new RegExp(".*datasources\\[\"([^\"]*)(\"\\])?(.*)$");
	//var identifierRegex = new RegExp("[a-zA-Z][a-zA-Z0-9_]+")

	var dropdown = null;
	var selectedOptionIndex = 0;
	var _autocompleteOptions = [];
	var currentValue = null;

	var EXPECTED_TYPE = {
		ANY : "any",
		ARRAY : "array",
		OBJECT : "object",
		STRING : "string",
		NUMBER : "number",
		BOOLEAN : "boolean"
	};

	function _isPotentialTypeMatch(value, expectsType)
	{
		if(_.isArray(value) || _.isObject(value))
		{
			return true;
		}
		return _isTypeMatch(value, expectsType);
	}

	function _isTypeMatch(value, expectsType) {
		switch(expectsType)
		{
		case EXPECTED_TYPE.ANY: return true;
		case EXPECTED_TYPE.ARRAY: return _.isArray(value);
		case EXPECTED_TYPE.OBJECT: return _.isObject(value);
		case EXPECTED_TYPE.STRING: return _.isString(value);
		case EXPECTED_TYPE.NUMBER: return _.isNumber(value);
		case EXPECTED_TYPE.BOOLEAN: return _.isBoolean(value);
		}
	}

	function _checkCurrentValueType(element, expectsType) {
		$(element).parent().find(".validation-error").remove();
		if(!_isTypeMatch(currentValue, expectsType)) {
			$(element).parent().append("<div class='validation-error'>" +
				"This field expects an expression that evaluates to type " +
				expectsType + ".</div>");
		}
	}

	function _resizeValueEditor(element)
	{
		var lineBreakCount = ($(element).val().match(/\n/g) || []).length;

		var newHeight = Math.min(200, 20 * (lineBreakCount + 1));

		$(element).css({height: newHeight + "px"});
	}

	function _autocompleteFromDatasource(inputString, datasources, expectsType, isTarget)
	{
		var match = _veDatasourceRegex.exec(inputString);

		var options = [];

		if(match)
		{
			// Editor value is: datasources["; List all datasources
			if(match[1] == "")
			{
                var prefix=''
                if (inputString=='')
                {
                    prefix='='
                }
				_.each(datasources, function(datasource)
				{
					options.push({value: prefix+datasource.name(), entity: undefined,
						precede_char: "", follow_char: "\"]"});
				});
			}
			// Editor value is a partial match for a datasource; list matching datasources
			else if(match[1] != "" && _.isUndefined(match[2]))
			{
				var replacementString = match[1];

				_.each(datasources, function(datasource)
				{
					var dsName = datasource.name();

					if(dsName != replacementString && dsName.indexOf(replacementString) == 0)
					{
						options.push({value: dsName, entity: undefined,
							precede_char: "", follow_char: "\"]"});
					}
				});
			}
			// Editor value matches a datasources; parse JSON in order to populate list
			else
			{
				// We already have a datasource selected; find it
				var datasource = _.find(datasources, function(datasource)
				{
					return (datasource.name() === match[1]);
				});

				if(!_.isUndefined(datasource))
				{
					var dataPath = "data";
					var remainder = "";

					// Parse the partial JSON selectors
					if(!_.isUndefined(match[2]))
					{
						// Strip any incomplete field values, and store the remainder
						var remainderIndex = match[3].lastIndexOf("]") + 1;
						dataPath = dataPath + match[3].substring(0, remainderIndex);
						remainder = match[3].substring(remainderIndex, match[3].length);
						remainder = remainder.replace(/^[\[\"]*/, "");
						remainder = remainder.replace(/[\"\]]*$/, "");
					}

					// Get the data for the last complete JSON field
					var dataValue = datasource.getDataRepresentation(dataPath);
					currentValue = dataValue;

					// For arrays, list out the indices
					if(_.isArray(dataValue))
					{
						for(var index = 0; index < dataValue.length; index++)
						{
							if(index.toString().indexOf(remainder) == 0)
							{
								var value = dataValue[index];
								if(_isPotentialTypeMatch(value, expectsType))
								{
									options.push({value: index, entity: value,
										precede_char: "[", follow_char: "]",
										preview: value.toString()});
								}
							}
						}
					}
					// For objects, list out the keys
					else if(_.isObject(dataValue))
					{
						_.each(dataValue, function(value, name)
						{
							if(name.indexOf(remainder) == 0)
							{
								if(_isPotentialTypeMatch(value, expectsType))
								{
									options.push({value: name, entity: value,
										precede_char: "[\"", follow_char: "\"]"});
								}
							}
						});
					}
					// For everything else, do nothing (no further selection possible)
					else
					{
                        if (isTarget)
                        {
                            //options.push(" = value")
                        }
						// no-op
					}
				}
			}
		}
		_autocompleteOptions = options;
	}

	function _renderAutocompleteDropdown(element, expectsType)
	{
		var inputString = $(element).val().substring(0, $(element).getCaretPosition());

		// Weird issue where the textarea box was putting in ASCII (nbsp) for spaces.
		inputString = inputString.replace(String.fromCharCode(160), " ");


		_autocompleteFromDatasource(inputString, theFreeboardModel.datasources(), expectsType);

		if(_autocompleteOptions.length > 0)
		{
			if(!dropdown)
			{
				dropdown = $('<ul id="value-selector" class="value-dropdown"></ul>')
					.insertAfter(element)
					.width($(element).outerWidth() - 2)
					.css("left", $(element).position().left)
					.css("top", $(element).position().top + $(element).outerHeight() - 1);
			}

			dropdown.empty();
			dropdown.scrollTop(0);

			var selected = true;
			selectedOptionIndex = 0;

			_.each(_autocompleteOptions, function(option, index)
			{
				var li = _renderAutocompleteDropdownOption(element, inputString, option, index);
				if(selected)
				{
					$(li).addClass("selected");
					selected = false;
				}
			});
		}
		else
		{
			_checkCurrentValueType(element, expectsType);
			$(element).next("ul#value-selector").remove();
			dropdown = null;
			selectedOptionIndex = -1;
		}
	}

	function _renderAutocompleteDropdownOption(element, inputString, option, currentIndex)
	{
		var optionLabel = option.value;
		if(option.preview)
		{
			optionLabel = optionLabel + "<span class='preview'>" + option.preview + "</span>";
		}
		var li = $('<li>' + optionLabel + '</li>').appendTo(dropdown)
			.mouseenter(function()
			{
				$(this).trigger("freeboard-select");
			})
			.mousedown(function(event)
			{
				$(this).trigger("freeboard-insertValue");
				event.preventDefault();
			})
			.data("freeboard-optionIndex", currentIndex)
			.data("freeboard-optionValue", option.value)
			.bind("freeboard-insertValue", function()
			{
				var optionValue = option.value;
				optionValue = option.precede_char + optionValue + option.follow_char;

				
				$(element).insertAtCaret(optionValue);
				

				currentValue = option.entity;
				$(element).triggerHandler("mouseup");
			})
			.bind("freeboard-select", function()
			{
				$(this).parent().find("li.selected").removeClass("selected");
				$(this).addClass("selected");
				selectedOptionIndex = $(this).data("freeboard-optionIndex");
			});
		return li;
	}

	function createValueEditor(element, expectsType)
	{
		$(element).addClass("calculated-value-input")
			.bind("keyup mouseup freeboard-eval", function(event) {
				// Ignore arrow keys and enter keys
				if(dropdown && event.type == "keyup"
					&& (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13))
				{
					event.preventDefault();
					return;
				}
				_renderAutocompleteDropdown(element, expectsType);
			})
			.focus(function()
			{
				$(element).css({"z-index" : 3001});
				_resizeValueEditor(element);
			})
			.focusout(function()
			{
				_checkCurrentValueType(element, expectsType);
				$(element).css({
					"height": "",
					"z-index" : 3000
				});
				$(element).next("ul#value-selector").remove();
				dropdown = null;
				selectedOptionIndex = -1;
			})
			.bind("keydown", function(event)
			{

				if(dropdown)
				{
					if(event.keyCode == 38 || event.keyCode == 40) // Handle Arrow keys
					{
						event.preventDefault();

						var optionItems = $(dropdown).find("li");

						if(event.keyCode == 38) // Up Arrow
						{
							selectedOptionIndex--;
						}
						else if(event.keyCode == 40) // Down Arrow
						{
							selectedOptionIndex++;
						}

						if(selectedOptionIndex < 0)
						{
							selectedOptionIndex = optionItems.size() - 1;
						}
						else if(selectedOptionIndex >= optionItems.size())
						{
							selectedOptionIndex = 0;
						}

						var optionElement = $(optionItems).eq(selectedOptionIndex);

						optionElement.trigger("freeboard-select");
						$(dropdown).scrollTop($(optionElement).position().top);
					}
					else if(event.keyCode == 13) // Handle enter key
					{
						event.preventDefault();

						if(selectedOptionIndex != -1)
						{
							$(dropdown).find("li").eq(selectedOptionIndex)
								.trigger("freeboard-insertValue");
						}
					}
				}
			});
	}

	// Public API
	return {
		createValueEditor : function(element, expectsType)
		{
			if(expectsType)
			{
				createValueEditor(element, expectsType);
			}
			else {
				createValueEditor(element, EXPECTED_TYPE.ANY);
			}
		},
		EXPECTED_TYPE : EXPECTED_TYPE
	}
}


function WidgetModel(theFreeboardModel, widgetPlugins) {

	var targetFunctionFromScript = function(script)
	{
		// First we compile the user's code, appending to make it into an assignment to the target
		if(!script)
		{
			return new Function("datasources",'value', "");
		}
		var append =''

		//Assignments or function calls let you ado something other than what you expect with the value.
		if (!(script.includes('=') || script.includes('(')))
		{
			append = '=value'
		}
		var targetFunction = new Function("datasources",'value', script+append);
		
		//Next we wrap this into another function that supplies the neccesary context.
		var f = function (val) {
			return targetFunction(theFreeboardModel.protectedDataSourceData, val);
		}
		
		return f
	}

	function disposeWidgetInstance() {
		if (!_.isUndefined(self.widgetInstance)) {
			if (_.isFunction(self.widgetInstance.onDispose)) {
				self.widgetInstance.onDispose();
			}

			self.widgetInstance = undefined;
		}
	}

	var self = this;

	this.datasourceRefreshNotifications = {};
	this.calculatedSettingScripts = {};

	//When you have a setting of type 'target', that setting gets an entry here, and it's a function you call to set the target with new data.
	this.dataTargets={}

	this.title = ko.observable();
	this.fillSize = ko.observable(false);

	this.type = ''
	
	//Sync function.  We are sure t always call this after calculating settings.
	//Note that we don't have any way to wait on the newinstance function
	//because i don't know how to use head.js with async.  Nonetheless, the api semi-spec already
	//clearly doesn't care about waiting
	this.setType = async function (newValue,settings) {
		if(self.type==newValue)
		{
			return;
		}
		self.type=newValue

		disposeWidgetInstance();
		await self.updateCalculatedSettings();

		if ((newValue in widgetPlugins) && _.isFunction(widgetPlugins[newValue].newInstance)) {
			var widgetType = widgetPlugins[newValue];

			async function finishLoad() {
				    await widgetType.newInstance(self.calculatedSettings, function (widgetInstance) {

					self.fillSize((widgetType.fill_size === true));
					self.widgetInstance = widgetInstance;

				
					self.widgetInstance.dataTargets= self.dataTargets;
                    self.widgetInstance.processCalculatedSetting= self.processCalculatedSetting;

					self.shouldRender(true);
					self._heightUpdate.valueHasMutated();

				});
			}

			// Do we need to load any external scripts?
			if (widgetType.external_scripts) {
				head.js(widgetType.external_scripts.slice(0), finishLoad); // Need to clone the array because head.js adds some weird functions to it
			}
			else {
				finishLoad();
			}
		}
	};

	this.settings = {}

	//After processing
	this.calculatedSettings = {}
	
	this.setSettings = async function (newValue) {
		this.settings=newValue

		//Make the processed copy
		Object.assign(this.calculatedSettings,this.settings);

		//Now we are gonna calc the real values
		await self.updateCalculatedSettings();

		if (!_.isUndefined(self.widgetInstance) && _.isFunction(self.widgetInstance.onSettingsChanged)) {
			try{
				await self.widgetInstance.onSettingsChanged(this.settings);
			}
			catch(e)
			{
				freeboard.showDialog($("<pre>").text(String(e)), "Error changing settings","OK")
				throw e;
			}
		}

		self._heightUpdate.valueHasMutated();
	};

	this.processDatasourceUpdate = function (datasourceName) {
		var refreshSettingNames = self.datasourceRefreshNotifications[datasourceName];

		if (_.isArray(refreshSettingNames)) {
			_.each(refreshSettingNames, function (settingName) {
				//All those updates are async
				self.processCalculatedSetting(settingName);
			});
		}
	}

	this.callValueFunction = function (theFunction) {
		return theFunction.call(undefined, theFreeboardModel.datasourceData);
	}

	this.processSizeChange = function () {
		if (!_.isUndefined(self.widgetInstance) && _.isFunction(self.widgetInstance.onSizeChanged)) {
			self.widgetInstance.onSizeChanged();
		}
	}

	
	//This function is now a public API function.
	//Will not complete till the effect is resolved, but the function itself is async
	this.processCalculatedSetting = async function (settingName) {
		if (_.isFunction(self.calculatedSettingScripts[settingName])) {
			var returnValue = undefined;

			try {
				returnValue = self.callValueFunction(self.calculatedSettingScripts[settingName]);
			}
			catch (e) {
				var rawValue = self.settings[settingName];

				// If there is a reference error and the value just contains letters and numbers, then
				if (e instanceof ReferenceError && (/^\w+$/).test(rawValue)) {
					returnValue = rawValue;
				}
			}

			var f = async function(returnValue)
			{
				if (!_.isUndefined(self.widgetInstance) && _.isFunction(self.widgetInstance.onCalculatedValueChanged) && !_.isUndefined(returnValue)) {
					try {
						//Maybe async, maybe not
						await self.widgetInstance.onCalculatedValueChanged(settingName, returnValue);
					}
					catch (e) {
						console.log(e.toString());
					}
				}
			}

	        //We might get a Promise as a return value. If that happens, we need to resolve it.
			var x =await returnValue;
			self.calculatedSettings[settingName]=x;
			await f(x)
		}
	}


	this.updateCalculatedSettings = async function () {
		self.datasourceRefreshNotifications = {};
		self.calculatedSettingScripts = {};

		if (!self.type) {
			return;
		}

		// Check for any calculated settings
		var settingsDefs = widgetPlugins[self.type].settings;
		var datasourceRegex = new RegExp("=\\s*datasources.([\\w_-]+)|datasources\\[['\"]([^'\"]+)", "g");
		var currentSettings = self.settings;

		for(var settingDefIndex in settingsDefs) {
			var settingDef=settingsDefs[settingDefIndex]
			if (settingDef.type == "calculated" || settingDef.type == "target") {
				var script = currentSettings[settingDef.name];

				if (!_.isUndefined(script)) {
                    var isLiteralText=0
					
					var wasArray =0;

					//For arrays, we have to go down the line, check them, and convert to expressions as needed.
					if(_.isArray(script)) {
						wasArray=1;

						var s =[]
						for(i in script)
						{
							if(i[0]=='=')
							{
								s.push(i.substring(1))
							}
							else if(settingDef.type == "target")
                            {
                                s.push(i)
                            }
							else
							{
								//String escaping
								s.push(JSON.stringify(i))
							}
						}
						script = "[" + s.join(",") + "]";
					}


					if(!script)
					{
						valueFunction = new Function("datasources", "return undefined;");   
					}
                    else if ((script[0]=='=' || settingDef.type == "target" || wasArray)){
                        
                        //We use the spreadsheet convention here. 
                        if (script[0]=='=')
                        {
                            script = script.substring(1)
                        }


						var getter=script;                        
						
						// If there is no return, add one
						//Only th the getter though, not the setter if it's a target.
                        if ((script.match(/;/g) || []).length <= 1 && script.indexOf("return") == -1) {
                            getter = "return " + script;
						}

                        var valueFunction;

                        try {
                            valueFunction = new Function("datasources", getter);
                        }
                        catch (e) {
                            console.log(" arg "+getter+"\nlooks like a function but won't compile, treating as text")
                            isLiteralText=1
                        }
                    }
                    else
                    {
                        isLiteralText = 1;
                    }
					
					if (isLiteralText)
                    {
                        var literalText = currentSettings[settingDef.name].replace(/"/g, '\\"').replace(/[\r\n]/g, ' \\\n');
						// If the value function cannot be created, then go ahead and treat it as literal text
						valueFunction = new Function("datasources", "return \"" + literalText + "\";");   
                    }

					self.calculatedSettingScripts[settingDef.name] = valueFunction;
                    
                    //The settting is asking the uesr for a data target. So we create a function
                    //to set that value.
                    
                    //The datasource is then expected to handle this with a set function.
                    if (settingDef.type == "target")
                    {
                        try {
                           
                            self.dataTargets[settingDef.name] = targetFunctionFromScript(script);
                        }
                        catch (e) {
							console.log("Bad data target: "+ script)
							console.log(e)
							//The do nothing function
							self.dataTargets[settingDef.name]=function(v){}
                        }
                    }
					await self.processCalculatedSetting(settingDef.name);

					// Are there any datasources we need to be subscribed to?
					var matches;

					while (matches = datasourceRegex.exec(script)) {
						var dsName = (matches[1] || matches[2]);
						var refreshSettingNames = self.datasourceRefreshNotifications[dsName];

						if (_.isUndefined(refreshSettingNames)) {
							refreshSettingNames = [];
							self.datasourceRefreshNotifications[dsName] = refreshSettingNames;
						}

						if(_.indexOf(refreshSettingNames, settingDef.name) == -1) // Only subscribe to this notification once.
						{
							refreshSettingNames.push(settingDef.name);
						}
					}
				}
				else
				{
					self.dataTargets[settingDef.name]=function(v){};
				}
			}
		};

    };
	

	this._heightUpdate = ko.observable();
	this.height = ko.computed({
		read: function () {
			self._heightUpdate();

			if (!_.isUndefined(self.widgetInstance) && _.isFunction(self.widgetInstance.getHeight)) {
				return self.widgetInstance.getHeight();
			}

			return 1;
		}
	});

	this.shouldRender = ko.observable(false);
	this.render = async function (element) {
		self.shouldRender(false);
		if (!_.isUndefined(self.widgetInstance) && _.isFunction(self.widgetInstance.render)) {
			self.widgetInstance.render(element);
			await self.updateCalculatedSettings();
		}
	}

	this.dispose = function () {

	}

	this.serialize = function () {
		return {
			title: self.title(),
			type: self.type,
			settings: self.settings
		};
	}

	this.deserialize = async function (object) {
		self.title(object.title);
		await self.setSettings(object.settings);
		await self.setType(object.type);
	}
}

// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ F R E E B O A R D                                                  │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2013 Jim Heising (https://github.com/jheising)         │ \\
// │ Copyright © 2013 Bug Labs, Inc. (http://buglabs.net)               │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT license.                                    │ \\
// └────────────────────────────────────────────────────────────────────┘ \\

// Jquery plugin to watch for attribute changes
(function($)
{
	function isDOMAttrModifiedSupported()
	{
		var p = document.createElement('p');
		var flag = false;

		if(p.addEventListener)
		{
			p.addEventListener('DOMAttrModified', function()
			{
				flag = true
			}, false);
		}
		else if(p.attachEvent)
		{
			p.attachEvent('onDOMAttrModified', function()
			{
				flag = true
			});
		}
		else
		{
			return false;
		}

		p.setAttribute('id', 'target');

		return flag;
	}

	function checkAttributes(chkAttr, e)
	{
		if(chkAttr)
		{
			var attributes = this.data('attr-old-value');

			if(e.attributeName.indexOf('style') >= 0)
			{
				if(!attributes['style'])
				{
					attributes['style'] = {};
				} //initialize
				var keys = e.attributeName.split('.');
				e.attributeName = keys[0];
				e.oldValue = attributes['style'][keys[1]]; //old value
				e.newValue = keys[1] + ':' + this.prop("style")[$.camelCase(keys[1])]; //new value
				attributes['style'][keys[1]] = e.newValue;
			}
			else
			{
				e.oldValue = attributes[e.attributeName];
				e.newValue = this.attr(e.attributeName);
				attributes[e.attributeName] = e.newValue;
			}

			this.data('attr-old-value', attributes); //update the old value object
		}
	}

	//initialize Mutation Observer
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	$.fn.attrchange = function(o)
	{

		var cfg = {
			trackValues: false,
			callback   : $.noop
		};

		//for backward compatibility
		if(typeof o === "function")
		{
			cfg.callback = o;
		}
		else
		{
			$.extend(cfg, o);
		}

		if(cfg.trackValues)
		{ //get attributes old value
			$(this).each(function(i, el)
			{
				var attributes = {};
				for(var attr, i = 0, attrs = el.attributes, l = attrs.length; i < l; i++)
				{
					attr = attrs.item(i);
					attributes[attr.nodeName] = attr.value;
				}

				$(this).data('attr-old-value', attributes);
			});
		}

		if(MutationObserver)
		{ //Modern Browsers supporting MutationObserver
			/*
			 Mutation Observer is still new and not supported by all browsers.
			 http://lists.w3.org/Archives/Public/public-webapps/2011JulSep/1622.html
			 */
			var mOptions = {
				subtree          : false,
				attributes       : true,
				attributeOldValue: cfg.trackValues
			};

			var observer = new MutationObserver(function(mutations)
			{
				mutations.forEach(function(e)
				{
					var _this = e.target;

					//get new value if trackValues is true
					if(cfg.trackValues)
					{
						/**
						 * @KNOWN_ISSUE: The new value is buggy for STYLE attribute as we don't have
						 * any additional information on which style is getting updated.
						 * */
						e.newValue = $(_this).attr(e.attributeName);
					}

					cfg.callback.call(_this, e);
				});
			});

			return this.each(function()
			{
				observer.observe(this, mOptions);
			});
		}
		else if(isDOMAttrModifiedSupported())
		{ //Opera
			//Good old Mutation Events but the performance is no good
			//http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
			return this.on('DOMAttrModified', function(event)
			{
				if(event.originalEvent)
				{
					event = event.originalEvent;
				} //jQuery normalization is not required for us
				event.attributeName = event.attrName; //property names to be consistent with MutationObserver
				event.oldValue = event.prevValue; //property names to be consistent with MutationObserver
				cfg.callback.call(this, event);
			});
		}
		else if('onpropertychange' in document.body)
		{ //works only in IE
			return this.on('propertychange', function(e)
			{
				e.attributeName = window.event.propertyName;
				//to set the attr old value
				checkAttributes.call($(this), cfg.trackValues, e);
				cfg.callback.call(this, e);
			});
		}

		return this;
	}
})(jQuery);

(function(jQuery) {

    jQuery.eventEmitter = {
        _JQInit: function() {
            this._JQ = jQuery(this);
        },
        emit: function(evt, data) {
            !this._JQ && this._JQInit();
            this._JQ.trigger(evt, data);
        },
        once: function(evt, handler) {
            !this._JQ && this._JQInit();
            this._JQ.one(evt, handler);
        },
        on: function(evt, handler) {
            !this._JQ && this._JQInit();
            this._JQ.bind(evt, handler);
        },
        off: function(evt, handler) {
            !this._JQ && this._JQInit();
            this._JQ.unbind(evt, handler);
        }
    };

}(jQuery));

var freeboard = (function()
{
	var datasourcePlugins = {};
	var widgetPlugins = {};

	var freeboardUI = new FreeboardUI();
	var theFreeboardModel = new FreeboardModel(datasourcePlugins, widgetPlugins, freeboardUI);

	var jsEditor = new JSEditor();
	var valueEditor = new ValueEditor(theFreeboardModel);
	var pluginEditor = new PluginEditor(jsEditor, valueEditor);

	var developerConsole = new DeveloperConsole(theFreeboardModel);

	var currentStyle = {
		values: {
			"font-family": '"HelveticaNeue-UltraLight", "Helvetica Neue Ultra Light", "Helvetica Neue", sans-serif',
			"color"      : "#d3d4d4",
			"font-weight": 100
		}
	};

	ko.bindingHandlers.pluginEditor = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			var options = ko.unwrap(valueAccessor());

			var types = {};
			var settings = undefined;
			var title = "";

			if(options.type == 'datasource')
			{
				types = datasourcePlugins;
				title = "Datasource";
			}
			else if(options.type == 'widget')
			{
				types = widgetPlugins;
				title = "Widget";
			}
			else if(options.type == 'pane')
			{
				title = "Pane";
			}

			$(element).click(function(event)
			{
				if(options.operation == 'delete')
				{
					var phraseElement = $('<p>Are you sure you want to delete this ' + title + '?</p>');
					new DialogBox(phraseElement, "Confirm Delete", "Yes", "No", function()
					{

						if(options.type == 'datasource')
						{
							theFreeboardModel.deleteDatasource(viewModel);
						}
						else if(options.type == 'widget')
						{
							theFreeboardModel.deleteWidget(viewModel);
						}
						else if(options.type == 'pane')
						{
							theFreeboardModel.deletePane(viewModel);
						}

					});
				}
				else
				{
					var instanceType = undefined;

					if(options.type == 'datasource')
					{
						if(options.operation == 'add')
						{
							settings = {};
						}
						else
						{
							instanceType = viewModel.type;
							settings = viewModel.settings;
							settings.name = viewModel.name();
						}
					}
					else if(options.type == 'widget')
					{
						if(options.operation == 'add')
						{
							settings = {};
						}
						else
						{
							instanceType = viewModel.type;
							settings = viewModel.settings;
						}
					}
					else if(options.type == 'pane')
					{
						settings = {};

						if(options.operation == 'edit')
						{
							settings.title = viewModel.title();
							settings.col_width = viewModel.col_width();
						}

						types = {
							settings: {
								settings: [
									{
										name        : "title",
										display_name: "Title",
										type        : "text"
									},
									{
										name : "col_width",
										display_name : "Columns",
										type : "integer",
										default_value : 1,
										required : true
									}
								]
							}
						}
					}

					pluginEditor.createPluginEditor(title, types, instanceType, settings, async function(newSettings)
					{
						if(options.operation == 'add')
						{
							if(options.type == 'datasource')
							{
								var newViewModel = new DatasourceModel(theFreeboardModel, datasourcePlugins);
								theFreeboardModel.addDatasource(newViewModel);

								newViewModel.name(newSettings.settings.name);
								delete newSettings.settings.name;

								await newViewModel.setSettings(newSettings.settings);
								await newViewModel.setType(newSettings.type);
							}
							else if(options.type == 'widget')
							{
								var newViewModel = new WidgetModel(theFreeboardModel, widgetPlugins);
								await newViewModel.setSettings(newSettings.settings);
								await newViewModel.setType(newSettings.type);

								viewModel.widgets.push(newViewModel);

								freeboardUI.attachWidgetEditIcons(element);
							}
						}
						else if(options.operation == 'edit')
						{
							if(options.type == 'pane')
							{
								viewModel.title(newSettings.settings.title);
								viewModel.col_width(newSettings.settings.col_width);
								freeboardUI.processResize(false);
							}
							else
							{
								if(options.type == 'datasource')
								{
									viewModel.name(newSettings.settings.name);
									delete newSettings.settings.name;
								}

								await viewModel.setType(newSettings.type);
								await viewModel.setSettings(newSettings.settings);
							}
						}
					});
				}
			});
		}
	}

	ko.virtualElements.allowedBindings.datasourceTypeSettings = true;
	ko.bindingHandlers.datasourceTypeSettings = {
		update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			processPluginSettings(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);
		}
	}

	ko.bindingHandlers.pane = {
		init  : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			if(theFreeboardModel.isEditing())
			{
				$(element).css({cursor: "pointer"});
			}

			freeboardUI.addPane(element, viewModel, bindingContext.$root.isEditing());
		},
		update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			// If pane has been removed
			if(theFreeboardModel.panes.indexOf(viewModel) == -1)
			{
				freeboardUI.removePane(element);
			}
			freeboardUI.updatePane(element, viewModel);
		}
	}

	ko.bindingHandlers.widget = {
		init  : function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			if(theFreeboardModel.isEditing())
			{
				freeboardUI.attachWidgetEditIcons($(element).parent());
			}
		},
		update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext)
		{
			if(viewModel.shouldRender())
			{
				$(element).empty();
				viewModel.render(element);
			}
		}
	}

	function getParameterByName(name)
	{
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	$(function()
	{ //DOM Ready
		// Show the loading indicator when we first load
		freeboardUI.showLoadingIndicator(true);

        var resizeTimer;

        function resizeEnd()
        {
            freeboardUI.processResize(true);
        }

        $(window).resize(function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resizeEnd, 500);
        });

	});

	// PUBLIC FUNCTIONS
	return {
		  model: theFreeboardModel,

		  setGlobalSettings = theFreeboardModel.setGlobalSettings,
		  globalSettingsHandlers = theFreeboardModel.globalSettingsHandlers,
		  globalSettings = theFreeboardModel.globalSettings,

		  playSound : function(s){

			//Allow sound theming
			var st  = theFreeboardModel.globalSettings.soundTheme
			if(st.externalSounds)
			{
				if(st.externalSounds[s])
				{
					s=st.externalSounds[s]
				}
			}
			var sound = new Howl({
				src: [s],
				html5:(window.location.protocol=='file')
			  })
			sound.play()
			  
		  },

		  getDatasourceInstance:function(n)
		  {
			for(var i of freeboard.model.datasources())
			{
				if(i.name()==n)
				{
					return i.datasourceInstance
				}
			}
		  },
          eval: function(s)
            {
                if(typeof(s)=="string" && s[0]=='=')
                {
                    return this.compile("return "+s.substring(1))()
                }
                else
                {
                    return s;
                }
            },
        
            compile :function(s)
            {
                var f= new Function('datasources',s)
                
                var f2 = function()
                {
                    return f(theFreeboardModel.datasources)
                }
                return f2
            },
		initialize          : function(allowEdit, finishedCallback)
		{
			ko.applyBindings(theFreeboardModel);

			// Check to see if we have a query param called load. If so, we should load that dashboard initially
			var freeboardLocation = getParameterByName("load");

			if(freeboardLocation != "")
			{
				$.ajax({
					url    : freeboardLocation,
					success: function(data)
					{
						theFreeboardModel.loadDashboard(data);

						if(_.isFunction(finishedCallback))
						{
							finishedCallback();
						}
					}
				});
			}
			else
			{
				theFreeboardModel.allow_edit(allowEdit);
				theFreeboardModel.setEditing(allowEdit);

				freeboardUI.showLoadingIndicator(false);
				if(_.isFunction(finishedCallback))
				{
					finishedCallback();
				}

                freeboard.emit("initialized");
			}
		},

		newDashboard        : function()
		{
			theFreeboardModel.loadDashboard({allow_edit: true});
		},
		loadDashboard       : function(configuration, callback)
		{
			theFreeboardModel.loadDashboard(configuration, callback);
		},
		serialize           : function()
		{
			return theFreeboardModel.serialize();
		},
		setEditing          : function(editing, animate)
		{
			theFreeboardModel.setEditing(editing, animate);
		},
		isEditing           : function()
		{
			return theFreeboardModel.isEditing();
		},
		loadDatasourcePlugin: function(plugin)
		{
			if(_.isUndefined(plugin.display_name))
			{
				plugin.display_name = plugin.type_name;
			}

            // Add a required setting called name to the beginning
            plugin.settings.unshift({
                name : "name",
                display_name : "Name",
                type : "text",
                required : true
            });


			theFreeboardModel.addPluginSource(plugin.source);
			datasourcePlugins[plugin.type_name] = plugin;
			theFreeboardModel._datasourceTypes.valueHasMutated();
		},
        resize : function()
        {
            freeboardUI.processResize(true);
        },
		loadWidgetPlugin    : function(plugin)
		{
			if(_.isUndefined(plugin.display_name))
			{
				plugin.display_name = plugin.type_name;
			}

			theFreeboardModel.addPluginSource(plugin.source);
			widgetPlugins[plugin.type_name] = plugin;
			theFreeboardModel._widgetTypes.valueHasMutated();
		},
		// To be used if freeboard is going to load dynamic assets from a different root URL
		setAssetRoot        : function(assetRoot)
		{
			jsEditor.setAssetRoot(assetRoot);
		},
		addStyle            : function(selector, rules)
		{
			var styleString = selector + "{" + rules + "}";

			var styleElement = $("style#fb-styles");

			if(styleElement.length == 0)
			{
				styleElement = $('<style id="fb-styles" type="text/css"></style>');
				$("head").append(styleElement);
			}

			if(styleElement[0].styleSheet)
			{
				styleElement[0].styleSheet.cssText += styleString;
			}
			else
			{
				styleElement.text(styleElement.text() + styleString);
			}
		},
		showLoadingIndicator: function(show)
		{
			freeboardUI.showLoadingIndicator(show);
		},
		showDialog          : function(contentElement, title, okTitle, cancelTitle, okCallback,cancelCallback)
		{
			new DialogBox(contentElement, title, okTitle, cancelTitle, okCallback,cancelCallback);
		},
        getDatasourceSettings : function(datasourceName)
        {
            var datasources = theFreeboardModel.datasources();

            // Find the datasource with the name specified
            var datasource = _.find(datasources, function(datasourceModel){
                return (datasourceModel.name() === datasourceName);
            });

            if(datasource)
            {
                return datasource.settings;
            }
            else
            {
                return null;
            }
        },
        setDatasourceSettings : function(datasourceName, settings)
        {
            var datasources = theFreeboardModel.datasources();

            // Find the datasource with the name specified
            var datasource = _.find(datasources, function(datasourceModel){
                return (datasourceModel.name() === datasourceName);
            });

            if(!datasource)
            {
                console.log("Datasource not found");
                return;
            }

            var combinedSettings = _.defaults(settings, datasource.settings);
            datasource.setSettings(combinedSettings);
        },
		getStyleString      : function(name)
		{
			var returnString = "";

			_.each(currentStyle[name], function(value, name)
			{
				returnString = returnString + name + ":" + value + ";";
			});

			return returnString;
		},
		getStyleObject      : function(name)
		{
			return currentStyle[name];
		},
		showDeveloperConsole : function()
		{
			developerConsole.showDeveloperConsole();
		}
	};
}());

$.extend(freeboard, jQuery.eventEmitter);

globalSettingsSchema = {
    type: "object",
    title: "Settings",
    properties: {
        theme: {
            type: "object",
            title: "Theme",
            properties: {
                "--box-bg-color": {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                            'alpha': true
                        }
                    }
                },
                "--main-bg-color": {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                        }
                    }
                },
                "--main-bg-image": {
                    type: "string",
                    "media": {
                        "binaryEncoding": "base64",
                        "type": "img/png"
                    },
                },

                "--main-font": {
                    type: "string",
                    enum: ['FBSans', 'FBSerif', 'Chalkboard', 'Chancery', 'Pandora', 'RoughScript', 'Handwriting', "B612", "FBMono", "Blackletter", "FBComic", "Pixel", "QTBlackForest", "Pixel", "FBCursive", "DIN", "PenguinAttack","DSEG7","DSEG14"]
                },
                "--title-font": {
                    type: "string",
                    enum: ['FBSans', 'FBSerif', 'Chalkboard', 'Chancery', 'Pandora', 'RoughScript', 'Handwriting', "B612", "FBMono", "Blackletter", "FBComic", "Pixel", "QTBlackForest", "Pixel", "FBCursive", "DIN", "PenguinAttack","DSEG7","DSEG14"]
                },
                "--widget-font": {
                    type: "string",
                    enum: ['FBSans', 'FBSerif', 'Chalkboard', 'Chancery', 'Pandora', 'RoughScript', 'Handwriting', "B612", "FBMono", "Blackletter", "FBComic", "Pixel", "QTBlackForest", "Pixel", "FBCursive", "DIN", "PenguinAttack","DSEG7","DSEG14"]
                },
                "--main-font-size": {
                    type: "string",
                    enum: ['small', 'medium', 'large', 'x-large', 'xx-large', '12px', '16px', '24px', '32px', '48px', '64px', '80px']
                },
                "--title-font-size": {
                    type: "string",
                    enum: ['small', 'medium', 'large', 'x-large', 'xx-large', '12px', '16px', '24px', '32px', '48px', '64px', '80px']
                },
                "--widget-font-size": {
                    type: "string",
                    enum: ['small', 'medium', 'large', 'x-large', 'xx-large', '12px', '16px', '24px', '32px', '48px', '64px', '80px']
                },
                "--fg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb'
                        }
                    }
                },
                "--widget-bg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                            'alpha': true
                        }
                    }
                },
                "--widget-fg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb'
                        }
                    }
                },
                "--bar-bg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                            'alpha': true
                        }
                    }
                },
                "--header-bg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                            'alpha': true
                        }
                    }
                },
                "--header-fg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb'
                        }
                    }
                },
                "--label-bg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                            'alpha': true
                        }
                    }
                },
                "--label-fg-color":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                        }
                    }
                },
                "--title-shadow":
                {
                    type: "string",
                    format: 'color',
                    'options': {
                        'colorpicker': {
                            'editorFormat': 'rgb',
                        }
                    }
                },
                "--border-width":
                {
                    type: "string",
                    enum: ['0px', '1px', '2px', '3px', '4px', '5px']
                },

                "--header-border-radius":
                {
                    type: "string",
                    enum: ['0em', '1em', '2em', '3em', '4em', '5em']
                },
                "--header-line-width":
                {
                    type: "string",
                    enum: ['0px', '1px', '2px', '3px']
                },
                "--pane-padding":
                {
                    type: "string",
                    enum: ['0.3em', '0.6em', '1.2em', '2.4em']
                },

                "--pane-border-radius":
                {
                    type: "string",
                    enum: ['0.3em', '0.6em', '1.2em', '2.4em']
                },

                "--widget-border-radius":
                {
                    type: "string",
                    enum: ['0em', '0.3em', '0.6em', '1.2em', '2.4em', '4.8em']
                },

                "--main-bg-size":
                {
                    type: "string",
                    enum: ['auto', 'cover', 'contain']
                },


                "--title-line-height":
                {
                    type: "string",
                    enum: ['20px', '40px', '60px', '80px', '100px']
                }


                // "--extra-grid-height":
                // {                  
                //     description: "Give grid panes a extra space in the grid, passt what the box actually takes up", 
                //     type: "string",
                //     enum: ['0px','20px','40px','60px', '80px', '100px']
                // }


            }
        }
    }
}
function generateFreeboardHelp() {


var x = `
<div style="overflow:scroll; height:50em;">

<h2>Data targets</h2>

<p>Input widgets use a data target to do something with the data.
If the target is just the name of a field of a datasource, it will try to write it there.</p>

<p>If the target contains any javascript, like assignments or function calls,
it will be interpreted as a function to call to handle new data.
You can access the value itself simply by using the variable called 'value'.</p>

<h2>Calculated values</h2>

<p>These update in real time if the value of the expression changes.
Much like a spreadsheet, they must begin with an equals sign,
or else they get interpreted as just literal data.</p>
</div>

<h2> Data Tables </h2>
<p>FreeBoard works with table-like data using the nanoSQl2 library which is always available to the user.   The following 4 special fields are reserved and may be added
    to rows when used with widgets: _time, the microseconds modification time of the record, _arrival, the microseconds time the record arrived on the local node,
    _uuid, a canonical UUID for the record, and _name, a nonunique name.<p>

<p>As usual, data targets work with data in (value, timestamp) form for table views.</p>

<p>When using the table widget in the raw data mode, all you need to worry about is your application data, the special fields are added automatically by the table widget.</p>

<p>Tables have a data target for their selected row.  This row acts just like a the data rows in your input array, however, you can write
the changes back to the original data table by setting the _arrival property to anything you want(The actual value will be changed to the current time).</p>

<p>Where there is no selection, the selection is just an empty object, with all of the special underscore keys, and a random UUID.  Setting _arrival on this will
create a new entry</p>

<p>All database backends should understand this spec, so to make a database form, you use a table to find the record you want, assign the selection
to a scratchpad data source, and use the usual controls to edit that selection.  When you're done, use a button widget to set the _arrival property, and everything gets saved.</p>

    

<h2>Mustache Templates(Use in the rich text edit component,  3rdparty doc, MIT)</h2>
<pre>
NAME
mustache - Logic-less templates.

SYNOPSIS
A typical Mustache template:

Hello {{name}}
You have just won {{value}} dollars!
{{#in_ca}}
Well, {{taxed_value}} dollars, after taxes.
{{/in_ca}}
Given the following hash:

{
  "name": "Chris",
  "value": 10000,
  "taxed_value": 10000 - (10000 * 0.4),
  "in_ca": true
}
Will produce the following:

Hello Chris
You have just won 10000 dollars!
Well, 6000.0 dollars, after taxes.
DESCRIPTION
Mustache can be used for HTML, config files, source code - anything. It works by expanding tags in a template using values provided in a hash or object.

We call it "logic-less" because there are no if statements, else clauses, or for loops. Instead there are only tags. Some tags are replaced with a value, some nothing, and others a series of values. This document explains the different types of Mustache tags.

TAG TYPES
Tags are indicated by the double mustaches. {{person}} is a tag, as is {{#person}}. In both examples, we'd refer to person as the key or tag key. Let's talk about the different types of tags.

Variables
The most basic tag type is the variable. A {{name}} tag in a basic template will try to find the name key in the current context. If there is no name key, the parent contexts will be checked recursively. If the top context is reached and the name key is still not found, nothing will be rendered.

All variables are HTML escaped by default. If you want to return unescaped HTML, use the triple mustache: {{{name}}}.

You can also use & to unescape a variable: {{& name}}. This may be useful when changing delimiters (see "Set Delimiter" below).

By default a variable "miss" returns an empty string. This can usually be configured in your Mustache library. The Ruby version of Mustache supports raising an exception in this situation, for instance.

Template:

* {{name}}
* {{age}}
* {{company}}
* {{{company}}}
Hash:

{
  "name": "Chris",
  "company": "<b>GitHub</b>"
}
Output:

* Chris
*
* &lt;b&gt;GitHub&lt;/b&gt;
* <b>GitHub</b>
Sections
Sections render blocks of text one or more times, depending on the value of the key in the current context.

A section begins with a pound and ends with a slash. That is, {{#person}} begins a "person" section while {{/person}} ends it.

The behavior of the section is determined by the value of the key.

False Values or Empty Lists

If the person key exists and has a value of false or an empty list, the HTML between the pound and slash will not be displayed.

Template:

Shown.
{{#person}}
  Never shown!
{{/person}}
Hash:

{
  "person": false
}
Output:

Shown.
Non-Empty Lists

If the person key exists and has a non-false value, the HTML between the pound and slash will be rendered and displayed one or more times.

When the value is a non-empty list, the text in the block will be displayed once for each item in the list. The context of the block will be set to the current item for each iteration. In this way we can loop over collections.

Template:

{{#repo}}
  <b>{{name}}</b>
{{/repo}}
Hash:

{
  "repo": [
    { "name": "resque" },
    { "name": "hub" },
    { "name": "rip" }
  ]
}
Output:

<b>resque</b>
<b>hub</b>
<b>rip</b>
Lambdas

When the value is a callable object, such as a function or lambda, the object will be invoked and passed the block of text. The text passed is the literal block, unrendered. {{tags}} will not have been expanded - the lambda should do that on its own. In this way you can implement filters or caching.

Template:

{{#wrapped}}
  {{name}} is awesome.
{{/wrapped}}
Hash:

{
  "name": "Willy",
  "wrapped": function() {
    return function(text, render) {
      return "<b>" + render(text) + "</b>"
    }
  }
}
Output:

<b>Willy is awesome.</b>
Non-False Values

When the value is non-false but not a list, it will be used as the context for a single rendering of the block.

Template:

{{#person?}}
  Hi {{name}}!
{{/person?}}
Hash:

{
  "person?": { "name": "Jon" }
}
Output:

Hi Jon!
Inverted Sections
An inverted section begins with a caret (hat) and ends with a slash. That is {{^person}} begins a "person" inverted section while {{/person}} ends it.

While sections can be used to render text one or more times based on the value of the key, inverted sections may render text once based on the inverse value of the key. That is, they will be rendered if the key doesn't exist, is false, or is an empty list.

Template:

{{#repo}}
  <b>{{name}}</b>
{{/repo}}
{{^repo}}
  No repos :(
{{/repo}}
Hash:

{
  "repo": []
}
Output:

No repos :(
Comments
Comments begin with a bang and are ignored. The following template:

<h1>Today{{! ignore me }}.</h1>
Will render as follows:

<h1>Today.</h1>
Comments may contain newlines.

Partials
Partials begin with a greater than sign, like {{> box}}.

Partials are rendered at runtime (as opposed to compile time), so recursive partials are possible. Just avoid infinite loops.

They also inherit the calling context. Whereas in an [ERB](http://en.wikipedia.org/wiki/ERuby) file you may have this:

<%= partial :next_more, :start => start, :size => size %>
Mustache requires only this:

{{> next_more}}
Why? Because the next_more.mustache file will inherit the size and start methods from the calling context.

In this way you may want to think of partials as includes, imports, template expansion, nested templates, or subtemplates, even though those aren't literally the case here.

For example, this template and partial:

base.mustache:
<h2>Names</h2>
{{#names}}
  {{> user}}
{{/names}}

user.mustache:
<strong>{{name}}</strong>
Can be thought of as a single, expanded template:

<h2>Names</h2>
{{#names}}
  <strong>{{name}}</strong>
{{/names}}
Set Delimiter
Set Delimiter tags start with an equal sign and change the tag delimiters from {{ and }} to custom strings.

Consider the following contrived example:

* {{default_tags}}
{{=<% %>=}}
* <% erb_style_tags %>
<%={{ }}=%>
* {{ default_tags_again }}
Here we have a list with three items. The first item uses the default tag style, the second uses erb style as defined by the Set Delimiter tag, and the third returns to the default style after yet another Set Delimiter declaration.

According to ctemplates, this "is useful for languages like TeX, where double-braces may occur in the text and are awkward to use for markup."

Custom delimiters may not contain whitespace or the equals sign.

COPYRIGHT
Mustache is Copyright (C) 2009 Chris Wanstrath

Original CTemplate by Google

SEE ALSO
mustache(1), http://mustache.github.io/
</pre>

`

return $(x)
}


function generateFreeboardEmojiCheats(){
  var x =`<h2>Smileys</h2>
  <p>😭😄😔☺️👍😁😂😘❤️😍😊💋😒😳😜🙈😉😃😢😝😱😡😏😞😅😚</p>
  <p>🙊😌😀😋👌😐😕😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠</p>
  <p>😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😬😐😕😯😶</p>
  <p>😇😏😑</p>
  <p><br></p>
  <h2>People</h2>
  <p>👲👳👮👷💂👶👦👮👷💂👶👦👧👨👩👴👵👱👼👸</p>
  <h2>Cats</h2>
  <p>😺😸😻😽😼🙀😿😹😾</p>
  <h2>Creatures</h2>
  <p>👹👺🙈🙉🙊💀👽</p>
  <h2>Effects</h2>
  <p>🔥✨🌟💫💥💢💦💧💤💨</p>
  <h2>Body</h2>
  <p>👂👀👃👅👄👍👎👌👊✊✊✌️👋✋👐👆👇👉👈🙌🙏☝️👏💪</p>
  <h2>Figures</h2>
  <p>🚶🏃💃👫👪👬👭💏💑👯</p>
  <p>🙆🙅💁🙋💆💇💅👰🙎🙍🙇</p>
  <h2>Fashion</h2>
  <p>🎩👑👒👟👞👡👢👕👔👚👗🎽👖👘👙💼👜👝👛👓🎀🌂💄</p>
  <h2>Love</h2>
  <p>💛💙💜💚❤️💔💗💓💕💖💞💘💌💋💍💎</p>
  <h2>SocialMedia</h2>
  <p>👤👥💬👣💭</p>
  <h2>Animals</h2>
  <p>🐶🐺🐱🐭🐹🐰🐸🐯🐨🐻🐷🐽🐮🐗🐵🐒🐴🐑🐘🐼🐧🐦🐤🐥🐣🐔🐍🐢🐛🐝🐜🐞🐌🐙🐚🐠🐟🐬🐳🐋🐄🐏🐀🐃🐅🐇🐉🐎🐐🐓🐕🐖🐁🐂🐲🐡🐊🐫🐪🐆🐈🐩🐾
  </p>
  <p>💐🌸🌷🍀🌹🌻🌺🍁🍃🍂🌿🌾🍄🌵🌴🌲🌳🌰🌱🌼</p>
  <h2>Earth and Space</h2>
  <p>🌐🌞🌝🌚🌑🌒🌓🌔🌕🌖🌗🌘🌜🌛🌙🌍🌎🌏🌋🌌🌠⭐️☀️⛅️☁️⚡️☔️❄️⛄️🌁🌀🌈🌊</p>
  <p><br></p>
  <h2>Parties</h2>
  <p>💝🎎🎒🎓🎓🎏🎆🎇🎐🎑🎃👻🎅🎄🎁🎋🎉🎊🎈</p>
  <p><br></p>
  <h2>Items</h2>
  <p>🎌🔮🎥📷💿📀💽💾💻📱☎️📞📟📠📡📺📻🔊🔉🔈🔇🔔🔕📣📢⏳⌛️</p>
  <p>⏰⌚️🔓🔒🔏🔐🔑🔓🔎💡🔦🔆🔅🔌🔋🔍🛀🛁🚿🚽🔧🔩🔨🚪🚬💣🔫</p>
  <p>🔪💊💉💰💴💵💷💶💳💸📲📧📥📤✉️📩📨📯📫📪📬📭📮📦📝📄📃</p>
  <p>📑📊📈📉📜📋📅📆📇📁📂✂️📌📎✒️✏️📏📐📕📗📘📙📓📔📒📚📖</p>
  <p>🔖📛🔬🔭📰</p>
  <p><br></p>
  <h2>Arts</h2>
  <p>🎨🎬🎤🎧🎼🎵🎶🎹🎻🎺🎷🎸</p>
  <p><br></p>
  <h2>Games</h2>
  <p>👾🎮🃏🎴🀄️🎲🎯🏈🏀⚽️⚾️🎾🎱🏉🎳⛳️🚵🚴🏁🏇🏆🎿🏂🏊🏄</p>
  <p><br></p>
  <h2>Food and Drink</h2>
  <p>🎣☕️🍵🍶🍼🍺🍻🍸🍹🍷🍴🍕🍔🍟🍗🍖🍝🍛🍤🍱🍣🍥🍙🍘🍚🍢🍡🍳🍞🍩🍮🍦🍨🍧🎂🍰🍪🍫🍭🍯🍎🍏🍊🍋🍒🍇🍉🍓🍑🍈🍌🍐🍆🍅🌽</p>
  <p>♨️🗿🎪🎭📍🚩🇯🇵🇰🇷🇩🇪🇨🇳🇺🇸🇫🇷🇪🇸🇮🇹🇷🇺🇬🇧</p>
  <p><br></p>
  <h2>Symbols</h2>
  <p>1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣0️⃣🔟🔢#️⃣🔣</p>
  <p>⬆️⬇️⬅️➡️🔠🔡🔤↗️↖️↘️↙️↔️↕️🔄◀️▶️🔼🔽</p>
  <p>↩️↪️ℹ️⤵️⏬⏫⏩⏪⤴️🆗🔀🔁🔂</p>
  <p>🆖🆓🆒🆙🆕📶🎦🈁🈯️🈳🈹🉐🈲🈴</p>
  <p>🈵🈺🈺🈶🈚️🚻🚹🚮🚰🚾🚼🚺🅿️♿️</p>
  <p>🚭🈷🈸🛅🛄🛂Ⓜ️🈂🛃🉑㊙️㊗️🆑📵</p>
  <p>🔞🚫🆔🆘🚯🚱🚳🚷🚸✅❎❇️✳️⛔️</p>
  <p>✴️💟🆚📳📴💠🅾🆎➿♻️</p>
  <p><br></p>
  <h2>Astrology</h2>
  <p>♈️♉️♊️♏️♎️♍️♌️♋️♐️♑️♒️♓️</p>
  <p><br></p>
  <h2>More Symbols</h2>
  <p>💱💲💹🏧🔯©®™❌‼️❔❕❓❗️⁉️⭕️⭕️🔝🔚🔙🔛</p>
  <p><br></p>
  <p>🕐🕧🕛🔃🔜🕜🕑🕝🕒🕞🕕🕠🕔🕟🕓🕖🕗🕘🕙🕚🕥🕤🕣🕢🕡🕦</p>
  <p>✖️➕➖➗💮♦️♣️♥️♠️💯✔️☑️🔘🔗◼️🔱〽️〰➰◻️▪️▫️⚪️⚫️🔳🔲🔺🔴🔵⬛️🔹🔸🔷🔶<br></p>
  
  
  <h2>FontAwesome symbols(Adapted from the official cheetsheet)</h2>
  <pre>
  	ad	f641
  	address-book	f2b9
  	address-card	f2bb
  	adjust	f042
  	air-freshener	f5d0
  	align-center	f037
  	align-justify	f039
  	align-left	f036
  	align-right	f038
  	allergies	f461
  	ambulance	f0f9
  	american-sign-language-interpreting	f2a3
  	anchor	f13d
  	angle-double-down	f103
  	angle-double-left	f100
  	angle-double-right	f101
  	angle-double-up	f102
  	angle-down	f107
  	angle-left	f104
  	angle-right	f105
  	angle-up	f106
  	angry	f556
  	ankh	f644
  	apple-alt	f5d1
  	archive	f187
  	archway	f557
  	arrow-alt-circle-down	f358
  	arrow-alt-circle-left	f359
  	arrow-alt-circle-right	f35a
  	arrow-alt-circle-up	f35b
  	arrow-circle-down	f0ab
  	arrow-circle-left	f0a8
  	arrow-circle-right	f0a9
  	arrow-circle-up	f0aa
  	arrow-down	f063
  	arrow-left	f060
  	arrow-right	f061
  	arrow-up	f062
  	arrows-alt	f0b2
  	arrows-alt-h	f337
  	arrows-alt-v	f338
  	assistive-listening-systems	f2a2
  	asterisk	f069
  	at	f1fa
  	atlas	f558
  	atom	f5d2
  	audio-description	f29e
  	award	f559
  	baby	f77c
  	baby-carriage	f77d
  	backspace	f55a
  	backward	f04a
  	bacon	f7e5
  	bacteria	e059
  	bacterium	e05a
  	bahai	f666
  	balance-scale	f24e
  	balance-scale-left	f515
  	balance-scale-right	f516
  	ban	f05e
  	band-aid	f462
  	barcode	f02a
  	bars	f0c9
  	baseball-ball	f433
  	basketball-ball	f434
  	bath	f2cd
  	battery-empty	f244
  	battery-full	f240
  	battery-half	f242
  	battery-quarter	f243
  	battery-three-quarters	f241
  	bed	f236
  	beer	f0fc
  	bell	f0f3
  	bell-slash	f1f6
  	bezier-curve	f55b
  	bible	f647
  	bicycle	f206
  	biking	f84a
  	binoculars	f1e5
  	biohazard	f780
  	birthday-cake	f1fd
  	blender	f517
  	blender-phone	f6b6
  	blind	f29d
  	blog	f781
  	bold	f032
  	bolt	f0e7
  	bomb	f1e2
  	bone	f5d7
  	bong	f55c
  	book	f02d
  	book-dead	f6b7
  	book-medical	f7e6
  	book-open	f518
  	book-reader	f5da
  	bookmark	f02e
  	border-all	f84c
  	border-none	f850
  	border-style	f853
  	bowling-ball	f436
  	box	f466
  	box-open	f49e
  	box-tissue	e05b
  	boxes	f468
  	braille	f2a1
  	brain	f5dc
  	bread-slice	f7ec
  	briefcase	f0b1
  	briefcase-medical	f469
  	broadcast-tower	f519
  	broom	f51a
  	brush	f55d
  	bug	f188
  	building	f1ad
  	bullhorn	f0a1
  	bullseye	f140
  	burn	f46a
  	bus	f207
  	bus-alt	f55e
  	business-time	f64a
  	calculator	f1ec
  	calendar	f133
  	calendar-alt	f073
  	calendar-check	f274
  	calendar-day	f783
  	calendar-minus	f272
  	calendar-plus	f271
  	calendar-times	f273
  	calendar-week	f784
  	camera	f030
  	camera-retro	f083
  	campground	f6bb
  	candy-cane	f786
  	cannabis	f55f
  	capsules	f46b
  	car	f1b9
  	car-alt	f5de
  	car-battery	f5df
  	car-crash	f5e1
  	car-side	f5e4
  	caravan	f8ff
  	caret-down	f0d7
  	caret-left	f0d9
  	caret-right	f0da
  	caret-square-down	f150
  	caret-square-left	f191
  	caret-square-right	f152
  	caret-square-up	f151
  	caret-up	f0d8
  	carrot	f787
  	cart-arrow-down	f218
  	cart-plus	f217
  	cash-register	f788
  	cat	f6be
  	certificate	f0a3
  	chair	f6c0
  	chalkboard	f51b
  	chalkboard-teacher	f51c
  	charging-station	f5e7
  	chart-area	f1fe
  	chart-bar	f080
  	chart-line	f201
  	chart-pie	f200
  	check	f00c
  	check-circle	f058
  	check-double	f560
  	check-square	f14a
  	cheese	f7ef
  	chess	f439
  	chess-bishop	f43a
  	chess-board	f43c
  	chess-king	f43f
  	chess-knight	f441
  	chess-pawn	f443
  	chess-queen	f445
  	chess-rook	f447
  	chevron-circle-down	f13a
  	chevron-circle-left	f137
  	chevron-circle-right	f138
  	chevron-circle-up	f139
  	chevron-down	f078
  	chevron-left	f053
  	chevron-right	f054
  	chevron-up	f077
  	child	f1ae
  	church	f51d
  	circle	f111
  	circle-notch	f1ce
  	city	f64f
  	clinic-medical	f7f2
  	clipboard	f328
  	clipboard-check	f46c
  	clipboard-list	f46d
  	clock	f017
  	clone	f24d
  	closed-captioning	f20a
  	cloud	f0c2
  	cloud-download-alt	f381
  	cloud-meatball	f73b
  	cloud-moon	f6c3
  	cloud-moon-rain	f73c
  	cloud-rain	f73d
  	cloud-showers-heavy	f740
  	cloud-sun	f6c4
  	cloud-sun-rain	f743
  	cloud-upload-alt	f382
  	cocktail	f561
  	code	f121
  	code-branch	f126
  	coffee	f0f4
  	cog	f013
  	cogs	f085
  	coins	f51e
  	columns	f0db
  	comment	f075
  	comment-alt	f27a
  	comment-dollar	f651
  	comment-dots	f4ad
  	comment-medical	f7f5
  	comment-slash	f4b3
  	comments	f086
  	comments-dollar	f653
  	compact-disc	f51f
  	compass	f14e
  	compress	f066
  	compress-alt	f422
  	compress-arrows-alt	f78c
  	concierge-bell	f562
  	cookie	f563
  	cookie-bite	f564
  	copy	f0c5
  	copyright	f1f9
  	couch	f4b8
  	credit-card	f09d
  	crop	f125
  	crop-alt	f565
  	cross	f654
  	crosshairs	f05b
  	crow	f520
  	crown	f521
  	crutch	f7f7
  	cube	f1b2
  	cubes	f1b3
  	cut	f0c4
  	database	f1c0
  	deaf	f2a4
  	democrat	f747
  	desktop	f108
  	dharmachakra	f655
  	diagnoses	f470
  	dice	f522
  	dice-d20	f6cf
  	dice-d6	f6d1
  	dice-five	f523
  	dice-four	f524
  	dice-one	f525
  	dice-six	f526
  	dice-three	f527
  	dice-two	f528
  	digital-tachograph	f566
  	directions	f5eb
  	disease	f7fa
  	divide	f529
  	dizzy	f567
  	dna	f471
  	dog	f6d3
  	dollar-sign	f155
  	dolly	f472
  	dolly-flatbed	f474
  	donate	f4b9
  	door-closed	f52a
  	door-open	f52b
  	dot-circle	f192
  	dove	f4ba
  	download	f019
  	drafting-compass	f568
  	dragon	f6d5
  	draw-polygon	f5ee
  	drum	f569
  	drum-steelpan	f56a
  	drumstick-bite	f6d7
  	dumbbell	f44b
  	dumpster	f793
  	dumpster-fire	f794
  	dungeon	f6d9
  	edit	f044
  	egg	f7fb
  	eject	f052
  	ellipsis-h	f141
  	ellipsis-v	f142
  	envelope	f0e0
  	envelope-open	f2b6
  	envelope-open-text	f658
  	envelope-square	f199
  	equals	f52c
  	eraser	f12d
  	ethernet	f796
  	euro-sign	f153
  	exchange-alt	f362
  	exclamation	f12a
  	exclamation-circle	f06a
  	exclamation-triangle	f071
  	expand	f065
  	expand-alt	f424
  	expand-arrows-alt	f31e
  	external-link-alt	f35d
  	external-link-square-alt	f360
  	eye	f06e
  	eye-dropper	f1fb
  	eye-slash	f070
  	fan	f863
  	fast-backward	f049
  	fast-forward	f050
  	faucet	e005
  	fax	f1ac
  	feather	f52d
  	feather-alt	f56b
  	female	f182
  	fighter-jet	f0fb
  	file	f15b
  	file-alt	f15c
  	file-archive	f1c6
  	file-audio	f1c7
  	file-code	f1c9
  	file-contract	f56c
  	file-csv	f6dd
  	file-download	f56d
  	file-excel	f1c3
  	file-export	f56e
  	file-image	f1c5
  	file-import	f56f
  	file-invoice	f570
  	file-invoice-dollar	f571
  	file-medical	f477
  	file-medical-alt	f478
  	file-pdf	f1c1
  	file-powerpoint	f1c4
  	file-prescription	f572
  	file-signature	f573
  	file-upload	f574
  	file-video	f1c8
  	file-word	f1c2
  	fill	f575
  	fill-drip	f576
  	film	f008
  	filter	f0b0
  	fingerprint	f577
  	fire	f06d
  	fire-alt	f7e4
  	fire-extinguisher	f134
  	first-aid	f479
  	fish	f578
  	fist-raised	f6de
  	flag	f024
  	flag-checkered	f11e
  	flag-usa	f74d
  	flask	f0c3
  	flushed	f579
  	folder	f07b
  	folder-minus	f65d
  	folder-open	f07c
  	folder-plus	f65e
  	font	f031
  	football-ball	f44e
  	forward	f04e
  	frog	f52e
  	frown	f119
  	frown-open	f57a
  	funnel-dollar	f662
  	futbol	f1e3
  	gamepad	f11b
  	gas-pump	f52f
  	gavel	f0e3
  	gem	f3a5
  	genderless	f22d
  	ghost	f6e2
  	gift	f06b
  	gifts	f79c
  	glass-cheers	f79f
  	glass-martini	f000
  	glass-martini-alt	f57b
  	glass-whiskey	f7a0
  	glasses	f530
  	globe	f0ac
  	globe-africa	f57c
  	globe-americas	f57d
  	globe-asia	f57e
  	globe-europe	f7a2
  	golf-ball	f450
  	gopuram	f664
  	graduation-cap	f19d
  	greater-than	f531
  	greater-than-equal	f532
  	grimace	f57f
  	grin	f580
  	grin-alt	f581
  	grin-beam	f582
  	grin-beam-sweat	f583
  	grin-hearts	f584
  	grin-squint	f585
  	grin-squint-tears	f586
  	grin-stars	f587
  	grin-tears	f588
  	grin-tongue	f589
  	grin-tongue-squint	f58a
  	grin-tongue-wink	f58b
  	grin-wink	f58c
  	grip-horizontal	f58d
  	grip-lines	f7a4
  	grip-lines-vertical	f7a5
  	grip-vertical	f58e
  	guitar	f7a6
  	h-square	f0fd
  	hamburger	f805
  	hammer	f6e3
  	hamsa	f665
  	hand-holding	f4bd
  	hand-holding-heart	f4be
  	hand-holding-medical	e05c
  	hand-holding-usd	f4c0
  	hand-holding-water	f4c1
  	hand-lizard	f258
  	hand-middle-finger	f806
  	hand-paper	f256
  	hand-peace	f25b
  	hand-point-down	f0a7
  	hand-point-left	f0a5
  	hand-point-right	f0a4
  	hand-point-up	f0a6
  	hand-pointer	f25a
  	hand-rock	f255
  	hand-scissors	f257
  	hand-sparkles	e05d
  	hand-spock	f259
  	hands	f4c2
  	hands-helping	f4c4
  	hands-wash	e05e
  	handshake	f2b5
  	handshake-alt-slash	e05f
  	handshake-slash	e060
  	hanukiah	f6e6
  	hard-hat	f807
  	hashtag	f292
  	hat-cowboy	f8c0
  	hat-cowboy-side	f8c1
  	hat-wizard	f6e8
  	hdd	f0a0
  	head-side-cough	e061
  	head-side-cough-slash	e062
  	head-side-mask	e063
  	head-side-virus	e064
  	heading	f1dc
  	headphones	f025
  	headphones-alt	f58f
  	headset	f590
  	heart	f004
  	heart-broken	f7a9
  	heartbeat	f21e
  	helicopter	f533
  	highlighter	f591
  	hiking	f6ec
  	hippo	f6ed
  	history	f1da
  	hockey-puck	f453
  	holly-berry	f7aa
  	home	f015
  	horse	f6f0
  	horse-head	f7ab
  	hospital	f0f8
  	hospital-alt	f47d
  	hospital-symbol	f47e
  	hospital-user	f80d
  	hot-tub	f593
  	hotdog	f80f
  	hotel	f594
  	hourglass	f254
  	hourglass-end	f253
  	hourglass-half	f252
  	hourglass-start	f251
  	house-damage	f6f1
  	house-user	e065
  	hryvnia	f6f2
  	i-cursor	f246
  	ice-cream	f810
  	icicles	f7ad
  	icons	f86d
  	id-badge	f2c1
  	id-card	f2c2
  	id-card-alt	f47f
  	igloo	f7ae
  	image	f03e
  	images	f302
  	inbox	f01c
  	indent	f03c
  	industry	f275
  	infinity	f534
  	info	f129
  	info-circle	f05a
  	italic	f033
  	jedi	f669
  	joint	f595
  	journal-whills	f66a
  	kaaba	f66b
  	key	f084
  	keyboard	f11c
  	khanda	f66d
  	kiss	f596
  	kiss-beam	f597
  	kiss-wink-heart	f598
  	kiwi-bird	f535
  	landmark	f66f
  	language	f1ab
  	laptop	f109
  	laptop-code	f5fc
  	laptop-house	e066
  	laptop-medical	f812
  	laugh	f599
  	laugh-beam	f59a
  	laugh-squint	f59b
  	laugh-wink	f59c
  	layer-group	f5fd
  	leaf	f06c
  	lemon	f094
  	less-than	f536
  	less-than-equal	f537
  	level-down-alt	f3be
  	level-up-alt	f3bf
  	life-ring	f1cd
  	lightbulb	f0eb
  	link	f0c1
  	lira-sign	f195
  	list	f03a
  	list-alt	f022
  	list-ol	f0cb
  	list-ul	f0ca
  	location-arrow	f124
  	lock	f023
  	lock-open	f3c1
  	long-arrow-alt-down	f309
  	long-arrow-alt-left	f30a
  	long-arrow-alt-right	f30b
  	long-arrow-alt-up	f30c
  	low-vision	f2a8
  	luggage-cart	f59d
  	lungs	f604
  	lungs-virus	e067
  	magic	f0d0
  	magnet	f076
  	mail-bulk	f674
  	male	f183
  	map	f279
  	map-marked	f59f
  	map-marked-alt	f5a0
  	map-marker	f041
  	map-marker-alt	f3c5
  	map-pin	f276
  	map-signs	f277
  	marker	f5a1
  	mars	f222
  	mars-double	f227
  	mars-stroke	f229
  	mars-stroke-h	f22b
  	mars-stroke-v	f22a
  	mask	f6fa
  	medal	f5a2
  	medkit	f0fa
  	meh	f11a
  	meh-blank	f5a4
  	meh-rolling-eyes	f5a5
  	memory	f538
  	menorah	f676
  	mercury	f223
  	meteor	f753
  	microchip	f2db
  	microphone	f130
  	microphone-alt	f3c9
  	microphone-alt-slash	f539
  	microphone-slash	f131
  	microscope	f610
  	minus	f068
  	minus-circle	f056
  	minus-square	f146
  	mitten	f7b5
  	mobile	f10b
  	mobile-alt	f3cd
  	money-bill	f0d6
  	money-bill-alt	f3d1
  	money-bill-wave	f53a
  	money-bill-wave-alt	f53b
  	money-check	f53c
  	money-check-alt	f53d
  	monument	f5a6
  	moon	f186
  	mortar-pestle	f5a7
  	mosque	f678
  	motorcycle	f21c
  	mountain	f6fc
  	mouse	f8cc
  	mouse-pointer	f245
  	mug-hot	f7b6
  	music	f001
  	network-wired	f6ff
  	neuter	f22c
  	newspaper	f1ea
  	not-equal	f53e
  	notes-medical	f481
  	object-group	f247
  	object-ungroup	f248
  	oil-can	f613
  	om	f679
  	otter	f700
  	outdent	f03b
  	pager	f815
  	paint-brush	f1fc
  	paint-roller	f5aa
  	palette	f53f
  	pallet	f482
  	paper-plane	f1d8
  	paperclip	f0c6
  	parachute-box	f4cd
  	paragraph	f1dd
  	parking	f540
  	passport	f5ab
  	pastafarianism	f67b
  	paste	f0ea
  	pause	f04c
  	pause-circle	f28b
  	paw	f1b0
  	peace	f67c
  	pen	f304
  	pen-alt	f305
  	pen-fancy	f5ac
  	pen-nib	f5ad
  	pen-square	f14b
  	pencil-alt	f303
  	pencil-ruler	f5ae
  	people-arrows	e068
  	people-carry	f4ce
  	pepper-hot	f816
  	percent	f295
  	percentage	f541
  	person-booth	f756
  	phone	f095
  	phone-alt	f879
  	phone-slash	f3dd
  	phone-square	f098
  	phone-square-alt	f87b
  	phone-volume	f2a0
  	photo-video	f87c
  	piggy-bank	f4d3
  	pills	f484
  	pizza-slice	f818
  	place-of-worship	f67f
  	plane	f072
  	plane-arrival	f5af
  	plane-departure	f5b0
  	plane-slash	e069
  	play	f04b
  	play-circle	f144
  	plug	f1e6
  	plus	f067
  	plus-circle	f055
  	plus-square	f0fe
  	podcast	f2ce
  	poll	f681
  	poll-h	f682
  	poo	f2fe
  	poo-storm	f75a
  	poop	f619
  	portrait	f3e0
  	pound-sign	f154
  	power-off	f011
  	pray	f683
  	praying-hands	f684
  	prescription	f5b1
  	prescription-bottle	f485
  	prescription-bottle-alt	f486
  	print	f02f
  	procedures	f487
  	project-diagram	f542
  	pump-medical	e06a
  	pump-soap	e06b
  	puzzle-piece	f12e
  	qrcode	f029
  	question	f128
  	question-circle	f059
  	quidditch	f458
  	quote-left	f10d
  	quote-right	f10e
  	quran	f687
  	radiation	f7b9
  	radiation-alt	f7ba
  	rainbow	f75b
  	random	f074
  	receipt	f543
  	record-vinyl	f8d9
  	recycle	f1b8
  	redo	f01e
  	redo-alt	f2f9
  	registered	f25d
  	remove-format	f87d
  	reply	f3e5
  	reply-all	f122
  	republican	f75e
  	restroom	f7bd
  	retweet	f079
  	ribbon	f4d6
  	ring	f70b
  	road	f018
  	robot	f544
  	rocket	f135
  	route	f4d7
  	rss	f09e
  	rss-square	f143
  	ruble-sign	f158
  	ruler	f545
  	ruler-combined	f546
  	ruler-horizontal	f547
  	ruler-vertical	f548
  	running	f70c
  	rupee-sign	f156
  	sad-cry	f5b3
  	sad-tear	f5b4
  	satellite	f7bf
  	satellite-dish	f7c0
  	save	f0c7
  	school	f549
  	screwdriver	f54a
  	scroll	f70e
  	sd-card	f7c2
  	search	f002
  	search-dollar	f688
  	search-location	f689
  	search-minus	f010
  	search-plus	f00e
  	seedling	f4d8
  	server	f233
  	shapes	f61f
  	share	f064
  	share-alt	f1e0
  	share-alt-square	f1e1
  	share-square	f14d
  	shekel-sign	f20b
  	shield-alt	f3ed
  	shield-virus	e06c
  	ship	f21a
  	shipping-fast	f48b
  	shoe-prints	f54b
  	shopping-bag	f290
  	shopping-basket	f291
  	shopping-cart	f07a
  	shower	f2cc
  	shuttle-van	f5b6
  	sign	f4d9
  	sign-in-alt	f2f6
  	sign-language	f2a7
  	sign-out-alt	f2f5
  	signal	f012
  	signature	f5b7
  	sim-card	f7c4
  	sink	e06d
  	sitemap	f0e8
  	skating	f7c5
  	skiing	f7c9
  	skiing-nordic	f7ca
  	skull	f54c
  	skull-crossbones	f714
  	slash	f715
  	sleigh	f7cc
  	sliders-h	f1de
  	smile	f118
  	smile-beam	f5b8
  	smile-wink	f4da
  	smog	f75f
  	smoking	f48d
  	smoking-ban	f54d
  	sms	f7cd
  	snowboarding	f7ce
  	snowflake	f2dc
  	snowman	f7d0
  	snowplow	f7d2
  	soap	e06e
  	socks	f696
  	solar-panel	f5ba
  	sort	f0dc
  	sort-alpha-down	f15d
  	sort-alpha-down-alt	f881
  	sort-alpha-up	f15e
  	sort-alpha-up-alt	f882
  	sort-amount-down	f160
  	sort-amount-down-alt	f884
  	sort-amount-up	f161
  	sort-amount-up-alt	f885
  	sort-down	f0dd
  	sort-numeric-down	f162
  	sort-numeric-down-alt	f886
  	sort-numeric-up	f163
  	sort-numeric-up-alt	f887
  	sort-up	f0de
  	spa	f5bb
  	space-shuttle	f197
  	spell-check	f891
  	spider	f717
  	spinner	f110
  	splotch	f5bc
  	spray-can	f5bd
  	square	f0c8
  	square-full	f45c
  	square-root-alt	f698
  	stamp	f5bf
  	star	f005
  	star-and-crescent	f699
  	star-half	f089
  	star-half-alt	f5c0
  	star-of-david	f69a
  	star-of-life	f621
  	step-backward	f048
  	step-forward	f051
  	stethoscope	f0f1
  	sticky-note	f249
  	stop	f04d
  	stop-circle	f28d
  	stopwatch	f2f2
  	stopwatch-20	e06f
  	store	f54e
  	store-alt	f54f
  	store-alt-slash	e070
  	store-slash	e071
  	stream	f550
  	street-view	f21d
  	strikethrough	f0cc
  	stroopwafel	f551
  	subscript	f12c
  	subway	f239
  	suitcase	f0f2
  	suitcase-rolling	f5c1
  	sun	f185
  	superscript	f12b
  	surprise	f5c2
  	swatchbook	f5c3
  	swimmer	f5c4
  	swimming-pool	f5c5
  	synagogue	f69b
  	sync	f021
  	sync-alt	f2f1
  	syringe	f48e
  	table	f0ce
  	table-tennis	f45d
  	tablet	f10a
  	tablet-alt	f3fa
  	tablets	f490
  	tachometer-alt	f3fd
  	tag	f02b
  	tags	f02c
  	tape	f4db
  	tasks	f0ae
  	taxi	f1ba
  	teeth	f62e
  	teeth-open	f62f
  	temperature-high	f769
  	temperature-low	f76b
  	tenge	f7d7
  	terminal	f120
  	text-height	f034
  	text-width	f035
  	th	f00a
  	th-large	f009
  	th-list	f00b
  	theater-masks	f630
  	thermometer	f491
  	thermometer-empty	f2cb
  	thermometer-full	f2c7
  	thermometer-half	f2c9
  	thermometer-quarter	f2ca
  	thermometer-three-quarters	f2c8
  	thumbs-down	f165
  	thumbs-up	f164
  	thumbtack	f08d
  	ticket-alt	f3ff
  	times	f00d
  	times-circle	f057
  	tint	f043
  	tint-slash	f5c7
  	tired	f5c8
  	toggle-off	f204
  	toggle-on	f205
  	toilet	f7d8
  	toilet-paper	f71e
  	toilet-paper-slash	e072
  	toolbox	f552
  	tools	f7d9
  	tooth	f5c9
  	torah	f6a0
  	torii-gate	f6a1
  	tractor	f722
  	trademark	f25c
  	traffic-light	f637
  	trailer	e041
  	train	f238
  	tram	f7da
  	transgender	f224
  	transgender-alt	f225
  	trash	f1f8
  	trash-alt	f2ed
  	trash-restore	f829
  	trash-restore-alt	f82a
  	tree	f1bb
  	trophy	f091
  	truck	f0d1
  	truck-loading	f4de
  	truck-monster	f63b
  	truck-moving	f4df
  	truck-pickup	f63c
  	tshirt	f553
  	tty	f1e4
  	tv	f26c
  	umbrella	f0e9
  	umbrella-beach	f5ca
  	underline	f0cd
  	undo	f0e2
  	undo-alt	f2ea
  	universal-access	f29a
  	university	f19c
  	unlink	f127
  	unlock	f09c
  	unlock-alt	f13e
  	upload	f093
  	user	f007
  	user-alt	f406
  	user-alt-slash	f4fa
  	user-astronaut	f4fb
  	user-check	f4fc
  	user-circle	f2bd
  	user-clock	f4fd
  	user-cog	f4fe
  	user-edit	f4ff
  	user-friends	f500
  	user-graduate	f501
  	user-injured	f728
  	user-lock	f502
  	user-md	f0f0
  	user-minus	f503
  	user-ninja	f504
  	user-nurse	f82f
  	user-plus	f234
  	user-secret	f21b
  	user-shield	f505
  	user-slash	f506
  	user-tag	f507
  	user-tie	f508
  	user-times	f235
  	users	f0c0
  	users-cog	f509
  	users-slash	e073
  	utensil-spoon	f2e5
  	utensils	f2e7
  	vector-square	f5cb
  	venus	f221
  	venus-double	f226
  	venus-mars	f228
  	vest	e085
  	vest-patches	e086
  	vial	f492
  	vials	f493
  	video	f03d
  	video-slash	f4e2
  	vihara	f6a7
  	virus	e074
  	virus-slash	e075
  	viruses	e076
  	voicemail	f897
  	volleyball-ball	f45f
  	volume-down	f027
  	volume-mute	f6a9
  	volume-off	f026
  	volume-up	f028
  	vote-yea	f772
  	vr-cardboard	f729
  	walking	f554
  	wallet	f555
  	warehouse	f494
  	water	f773
  	wave-square	f83e
  	weight	f496
  	weight-hanging	f5cd
  	wheelchair	f193
  	wifi	f1eb
  	wind	f72e
  	window-close	f410
  	window-maximize	f2d0
  	window-minimize	f2d1
  	window-restore	f2d2
  	wine-bottle	f72f
  	wine-glass	f4e3
  	wine-glass-alt	f5ce
  	won-sign	f159
  	wrench	f0ad
  	x-ray	f497
  	yen-sign	f157
  </pre>
  `

  return $(x)
}