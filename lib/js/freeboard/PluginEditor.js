PluginEditor = function (jsEditor, valueEditor) {
	function _displayValidationError(settingName, errorMessage) {
		var errorElement = $('<div class="validation-error"></div>').html(errorMessage);
		$("#setting-value-container-" + settingName).append(errorElement);
	}

	function _removeSettingsRows() {
		if ($("#setting-row-instance-name").length) {
			$("#setting-row-instance-name").nextAll().remove();
		}
		else {
			$("#setting-row-plugin-types").nextAll().remove();
		}
	}

	function _isNumerical(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function _appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue, includeRemove, target) {
		var input = $('<textarea></textarea>');

		if (settingDef.multi_input) {
			input.change(function () {
				var arrayInput = [];
				$(valueCell).find('textarea').each(function () {
					var thisVal = $(this).val();
					if (thisVal) {
						arrayInput = arrayInput.concat(thisVal);
					}
				});
				newSettings.settings[settingDef.name] = arrayInput;
			});
		} else {
			input.change(function () {
				newSettings.settings[settingDef.name] = $(this).val();
			});
		}

		if (currentValue) {
			input.val(currentValue);
		}

		valueEditor.createValueEditor(input);

		var datasourceToolbox = $('<ul class="board-toolbar datasource-input-suffix"></ul>');
		var wrapperDiv = $('<div class="calculated-setting-row"></div>');
		wrapperDiv.append(input).append(datasourceToolbox);

		if (settingDef.type=='target') {
			var datasourceTool = $('<li><i class="icon-plus icon-white"></i><label>DATATARGET</label></li>')
				.mousedown(function (e) {
					e.preventDefault();
					if ($(input).is(":focus")) {
						$(input).insertAtCaret("datasources[\"").trigger("freeboard-eval");
					}
					else {
						$(input).val("").focus().insertAtCaret("datasources[\"").trigger("freeboard-eval");
					}
				});
				datasourceToolbox.append(datasourceTool);

		}
		else {
			if(settingDef.type=='calculated')
			var datasourceTool = $('<li><i class="icon-plus icon-white"></i><label>DATASOURCE</label></li>')
				.mousedown(function (e) {
					e.preventDefault();

					if ($(input).val().length == 0) {
						$(input).insertAtCaret('=')
					}
					$(input).insertAtCaret("datasources[\"").trigger("freeboard-eval");

				});
				datasourceToolbox.append(datasourceTool);

		}

		if (!(settingDef.type=='target')) {
			var jsEditorTool = $('<li><i class="icon-fullscreen icon-white"></i><label>JS EDITOR</label></li>')
				.mousedown(function (e) {
					e.preventDefault();
					jsEditor.displayJSEditor(input.val(), function (result) {
						input.val(result);
						input.change();
					});
				});
			datasourceToolbox.append(jsEditorTool);
		}

		if (includeRemove) {
			var removeButton = $('<li class="remove-setting-row"><i class="icon-minus icon-white"></i><label></label></li>')
				.mousedown(function (e) {
					e.preventDefault();
					wrapperDiv.remove();
					$(valueCell).find('textarea:first').change();
				});
			datasourceToolbox.prepend(removeButton);
		}

		$(valueCell).append(wrapperDiv);
	}

	function createPluginEditor(title, pluginTypes, currentTypeName, currentSettingsValues, settingsSavedCallback) {
		var newSettings = {
			type: currentTypeName,
			settings: {}
		};

		function createSettingRow(name, displayName, regex) {
			var tr = $('<div id="setting-row-' + name + '" class="form-row"></div>').appendTo(form);

			tr.append('<div class="form-label"><label class="control-label">' + displayName + '</label></div>');
			return $('<div id="setting-value-container-' + name + '" class="form-value"></div>').appendTo(tr);
		}

		var selectedType;
		var form = $('<div></div>');

		var pluginDescriptionElement = $('<div id="plugin-description"></div>').hide();
		form.append(pluginDescriptionElement);

		var toDestroy = []

		function createSettingsFromDefinition(settingsDefs, typeaheadSource, typeaheadDataSegment) {
			_.each(settingsDefs, function (settingDef) {
				// Set a default value if one doesn't exist
				if (!_.isUndefined(settingDef.default_value) && _.isUndefined(currentSettingsValues[settingDef.name])) {
					currentSettingsValues[settingDef.name] = _.clone(settingDef.default_value);
				}

				var displayName = settingDef.name;

				if (!_.isUndefined(settingDef.display_name)) {
					displayName = settingDef.display_name;
				}


				var valueCell = createSettingRow(settingDef.name, displayName);

				switch (settingDef.type) {
					case "array":
						{
							var subTableDiv = $('<div class="form-table-value-subtable"></div>').appendTo(valueCell);

							var subTable = $('<table class="table table-condensed sub-table"></table>').appendTo(subTableDiv);
							var subTableHead = $("<thead></thead>").hide().appendTo(subTable);
							var subTableHeadRow = $("<tr></tr>").appendTo(subTableHead);
							var subTableBody = $('<tbody></tbody>').appendTo(subTable);

							var currentSubSettingValues = [];

							// Create our headers
							_.each(settingDef.settings, function (subSettingDef) {
								var subsettingDisplayName = subSettingDef.name;

								if (!_.isUndefined(subSettingDef.display_name)) {
									subsettingDisplayName = subSettingDef.display_name;
								}

								$('<th>' + subsettingDisplayName + '</th>').appendTo(subTableHeadRow);

								if ((['text', 'datasource', 'target'].indexOf(subSettingDef.type) > -1) && subSettingDef.options) {
									$('<datalist></datalist>').attr("id", settingDef.name + subSettingDef.name + "ac").appendTo(subTableHeadRow);
									$.each(subSettingDef.options(), function (i, item) {
										$("#" + settingDef.name + subSettingDef.name + "ac").append($("<option>").attr('value', i).text(item));
									});
								}
							});

							if (settingDef.name in currentSettingsValues) {
								currentSubSettingValues = currentSettingsValues[settingDef.name];
							}

							function processHeaderVisibility() {
								if (newSettings.settings[settingDef.name].length > 0) {
									subTableHead.show();
								}
								else {
									subTableHead.hide();
								}
							}

							function createSubsettingRow(subsettingValue) {
								var subsettingRow = $('<tr></tr>').appendTo(subTableBody);

								var newSetting = {};

								if (!_.isArray(newSettings.settings[settingDef.name])) {
									newSettings.settings[settingDef.name] = [];
								}

								newSettings.settings[settingDef.name].push(newSetting);




								_.each(settingDef.settings, function (subSettingDef) {
									var subsettingCol = $('<td></td>').appendTo(subsettingRow);
									var subsettingValueString = "";

									if (!_.isUndefined(subsettingValue[subSettingDef.name])) {
										subsettingValueString = subsettingValue[subSettingDef.name];
									}

									newSetting[subSettingDef.name] = subsettingValueString;

									if (subSettingDef.type == "option") {
										var input = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(subsettingCol)).change(function () {
											newSetting[subSettingDef.name] = $(this).val();

										});

										_.each(subSettingDef.options, function (option) {

											var optionName;
											var optionValue;

											if (_.isObject(option)) {
												optionName = option.name;
												optionValue = option.value;
											}
											else {
												optionName = option;
											}

											if (_.isUndefined(optionValue)) {
												optionValue = optionName;
											}

											if (_.isUndefined(defaultValue)) {
												defaultValue = optionValue;
											}

											$("<option></option>").text(optionName).attr("value", optionValue).appendTo(input);
										});


										input.val(currentSettingsValues[subsettingValueString]);

									}
									else if (subSettingDef.type == 'color') {


										var color = $('<div>EDIT</div>').attr('id', subSettingDef.name + '-picker').appendTo(valueCell);

										var parent = document.querySelector('#' + subSettingDef.name + '-picker');
										var currentcolor = subsettingValueString || 'black';


										color.css({ 'color': currentcolor })
										var picker = new Picker({ parent: parent, color: currentcolor });

										newSetting[subSettingDef.name] = subsettingValueString || 'rgb(0,0,0)'


										picker.onChange = function (color) {
											newSetting[subSettingDef.name] = color.rgbastring;
											color.css({ 'color': color.rgbastring })

										};

									}
									else {
										$('<input class="table-row-value" type="text">').appendTo(subsettingCol).val(subsettingValueString).attr('list', settingDef.name + subSettingDef.name + "ac").change(function () {
											newSetting[subSettingDef.name] = $(this).val();
										});
									}
								});

								subsettingRow.append($('<td class="table-row-operation"></td>').append($('<ul class="board-toolbar"></ul>').append($('<li></li>').append($('<i class="icon-trash icon-white"></i>').click(function () {
									var subSettingIndex = newSettings.settings[settingDef.name].indexOf(newSetting);

									if (subSettingIndex != -1) {
										newSettings.settings[settingDef.name].splice(subSettingIndex, 1);
										subsettingRow.remove();
										processHeaderVisibility();
									}
								})))));

								subTableDiv.scrollTop(subTableDiv[0].scrollHeight);

								processHeaderVisibility();
							}

							$('<div class="table-operation text-button">ADD</div>').appendTo(valueCell).click(function () {
								var newSubsettingValue = {};

								_.each(settingDef.settings, function (subSettingDef) {
									newSubsettingValue[subSettingDef.name] = "";
								});

								createSubsettingRow(newSubsettingValue);
							});

							// Create our rows
							_.each(currentSubSettingValues, function (currentSubSettingValue, subSettingIndex) {
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

							var text = $('<div><label>' + settingDef.name + '</label> <br> <textarea id="' + settingDef.name + '-trumbo"></textarea></div>').appendTo(valueCell);
							var l = ["ffffff", "000000", "eeece1", "1f497d", "4f81bd", "c0504d", "9bbb59", "8064a2", "4bacc6", "f79646", "ffff00", "f2f2f2", "7f7f7f", "ddd9c3", "c6d9f0", "dbe5f1", "f2dcdb", "ebf1dd"]
							$('#' + settingDef.name + '-trumbo').trumbowyg({
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
									['fontsize', 'fontfamily', 'preformatted'],
									['emoji', 'table', 'specialChars']
								],
								plugins: {
									colors: {
										displayAsList: true,
										foreColorList: l,
										backColorList: l,

									},
									fontfamily:
									{
										fontList: [
											{ name: 'Seriff', family: 'FBSerif' },
											{ name: 'Color Emoji', family: 'NotoColorEmoji' },
											{ name: 'Sans', family: 'FBSans' },
											{ name: 'Monospace', family: 'FBMono' },
											{ name: 'Cursive', family: 'FBCursive' },
											{ name: 'Pandora', family: 'Pandora' },
											{ name: 'Chalkboard', family: 'Chalkboard' },
											{ name: 'Handwriting', family: 'Handwriting' },
											{ name: 'Rough Script', family: 'RoughScript' },
											{ name: 'Chancery', family: 'Chancery' },
											{ name: 'Comic', family: 'FBComic' },
											{ name: 'Blackletter', family: 'Blackletter' },
											{ name: 'Cinzel', family: 'Cinzel' },
											{ name: 'Stencil', family: 'Stencil' },
											{ name: 'Pixel', family: 'Pixel' },
											{ name: 'B612', family: 'B612' },
											{ name: 'DIN', family: 'DIN' },
											{ name: 'Penguin Attack', family: 'PenguinAttack' },
											{ name: 'DSEG7', family: 'DSEG7' },
											{ name: 'DSEG14', family: 'DSEG14' }


										]
									}
								}
							});


							$('#' + settingDef.name + '-trumbo').on('tbwchange', function (e) {
								newSettings.settings[settingDef.name] = $('#' + settingDef.name + '-trumbo').trumbowyg('html')
							});
							$('#' + settingDef.name + '-trumbo').on('tbwblur', function (e) {
								newSettings.settings[settingDef.name] = $('#' + settingDef.name + '-trumbo').trumbowyg('html')
							});


							if (settingDef.name in currentSettingsValues) {
								$('#' + settingDef.name + '-trumbo').trumbowyg('html', currentSettingsValues[settingDef.name])
							}
							toDestroy.push($('#editor').trumbowyg)

							break;
						}

					case "boolean":
						{
							newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

							var onOffSwitch = $('<div class="onoffswitch"><label class="onoffswitch-label" for="' + settingDef.name + '-onoff"><div class="onoffswitch-inner"><span class="on">YES</span><span class="off">NO</span></div><div class="onoffswitch-switch"></div></label></div>').appendTo(valueCell);

							var input = $('<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="' + settingDef.name + '-onoff">').prependTo(onOffSwitch).change(function () {
								newSettings.settings[settingDef.name] = this.checked;
							});

							if (settingDef.name in currentSettingsValues) {
								input.prop("checked", currentSettingsValues[settingDef.name]);
							}

							break;
						}

					case "json":
						{
							newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

							var input = $('<button>EDIT</button>').appendTo(valueCell).on('click',
								function () {
									var x = [];
									freeboard.showDialog($('<div id="fb-global-json-editor">'), settingDef, name, "OK", "Cancel",
										function () {
											newSettings.settings[settingDef.name] = x[0].getValue()
											x[0].destroy();
										},
										function () {
											x[0].destroy();
										}
									)

									var Editor = new JSONEditor(document.getElementById('fb-global-json-editor'), { schema: settingDef.schema });
									x.push(Editor);
									try {
										Editor.setValue(newSettings.settings[settingDef.name]|| {})
									}
									catch (e) {
										console.log(e)
									}

								})
							break;
		}


					case "button":
		{
			var input = $('<button></button>').appendTo($('<div class="styled-select"></div>').appendTo(valueCell)).html(settingDef.html).on('click', function () {
				settingDef.onclick(currentSettingsValues, freeboard.getDatasourceInstance(currentSettingsValues.name));
			});

			break;
		}

					case "option":
		{
			var defaultValue = currentSettingsValues[settingDef.name];

			var input = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(valueCell)).change(function () {
				newSettings.settings[settingDef.name] = $(this).val();
			});

			_.each(settingDef.options, function (option) {

				var optionName;
				var optionValue;

				if (_.isObject(option)) {
					optionName = option.name;
					optionValue = option.value;
				}
				else {
					optionName = option;
				}

				if (_.isUndefined(optionValue)) {
					optionValue = optionName;
				}

				if (_.isUndefined(defaultValue)) {
					defaultValue = optionValue;
				}

				$("<option></option>").text(optionName).attr("value", optionValue).appendTo(input);
			});

			newSettings.settings[settingDef.name] = defaultValue;

			if (settingDef.name in currentSettingsValues) {
				input.val(currentSettingsValues[settingDef.name]);
			}

			break;
		}
					default:
		{
			newSettings.settings[settingDef.name] = currentSettingsValues[settingDef.name];

			if (settingDef.type == "calculated" || settingDef.type == "target" || settingDef.type == "constructor") {
				var target = settingDef.type == "target";

				if (settingDef.name in currentSettingsValues) {
					var currentValue = currentSettingsValues[settingDef.name];
					if (settingDef.multi_input && _.isArray(currentValue)) {
						var includeRemove = false;
						for (var i = 0; i < currentValue.length; i++) {
							_appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue[i], includeRemove, target);
							includeRemove = true;
						}
					} else {
						_appendCalculatedSettingRow(valueCell, newSettings, settingDef, currentValue, false, target);
					}
				} else {
					_appendCalculatedSettingRow(valueCell, newSettings, settingDef, null, false, target);
				}

				if (settingDef.multi_input) {
					var inputAdder = $('<ul class="board-toolbar"><li class="add-setting-row"><i class="icon-plus icon-white"></i><label>ADD</label></li></ul>')
						.mousedown(function (e) {
							e.preventDefault();
							_appendCalculatedSettingRow(valueCell, newSettings, settingDef, null, true, target);
						});
					$(valueCell).siblings('.form-label').append(inputAdder);
				}
			}
			else {


				if (settingDef.name == 'name') {
					//Discourage names that are not valid identifiers
					var defaultregex = '[a-zA-Z][a-zA-Z0-9_]+'
				}
				else {
					var defaultregex = null;
				}

				var regex = settingDef.regex;
				if (_.isUndefined(settingDef.regex)) {
					regex = defaultregex;
				}


				if (settingDef.options) {
					$('<datalist></datalist>').attr("id", settingDef.name + "ac").appendTo(valueCell);
					$.each(settingDef.options(), function (i, item) {
						$("#" + settingDef.name + "ac").append($("<option>").attr('value', i).text(item || i));
					});
				}


				var input = $('<input type="text">').appendTo(valueCell).attr('pattern', regex).attr('list', settingDef.name + "ac").change(function () {
					if (settingDef.type == "number") {
						newSettings.settings[settingDef.name] = Number($(this).val());
					}
					else {
						newSettings.settings[settingDef.name] = $(this).val();
					}
				});

				if (settingDef.type == "integer") {
					input.attr('type', 'number')
				}

				if (settingDef.name in currentSettingsValues) {
					input.val(currentSettingsValues[settingDef.name]);
				}

				if (typeaheadSource && settingDef.typeahead_data_field) {
					input.addClass('typeahead_data_field-' + settingDef.typeahead_data_field);
				}

				if (typeaheadSource && settingDef.typeahead_field) {
					var typeaheadValues = [];

					input.keyup(function (event) {
						if (event.which >= 65 && event.which <= 91) {
							input.trigger('change');
						}
					});

					$(input).autocomplete({
						source: typeaheadValues,
						select: function (event, ui) {
							input.val(ui.item.value);
							input.trigger('change');
						}
					});

					input.change(function (event) {
						var value = input.val();
						var source = _.template(typeaheadSource)({ input: value });
						$.get(source, function (data) {
							if (typeaheadDataSegment) {
								data = data[typeaheadDataSegment];
							}
							data = _.select(data, function (elm) {
								return elm[settingDef.typeahead_field][0] == value[0];
							});

							typeaheadValues = _.map(data, function (elm) {
								return elm[settingDef.typeahead_field];
							});
							$(input).autocomplete("option", "source", typeaheadValues);

							if (data.length == 1) {
								data = data[0];
								//we found the one. let's use it to populate the other info
								for (var field in data) {
									if (data.hasOwnProperty(field)) {
										var otherInput = $(_.template('input.typeahead_data_field-<%= field %>')({ field: field }));
										if (otherInput) {
											otherInput.val(data[field]);
											if (otherInput.val() != input.val()) {
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

	if (!_.isUndefined(settingDef.suffix)) {
		valueCell.append($('<div class="input-suffix">' + settingDef.suffix + '</div>'));
	}

	if (!_.isUndefined(settingDef.description)) {
		valueCell.append($('<div class="setting-description">' + settingDef.description + '</div>'));
	}
});
		}


new DialogBox(form, title, "Save", "Cancel", function () {
	$(".validation-error").remove();

	// Loop through each setting and validate it
	for (var index = 0; index < selectedType.settings.length; index++) {
		var settingDef = selectedType.settings[index];

		if (settingDef.required && (_.isUndefined(newSettings.settings[settingDef.name]) || newSettings.settings[settingDef.name] == "")) {
			_displayValidationError(settingDef.name, "This is required.");
			return true;
		}
		else if (settingDef.type == "integer" && (newSettings.settings[settingDef.name] % 1 !== 0)) {
			_displayValidationError(settingDef.name, "Must be a whole number.");
			return true;
		}
		else if (settingDef.type == "number" && !_isNumerical(newSettings.settings[settingDef.name])) {
			_displayValidationError(settingDef.name, "Must be a number.");
			return true;
		}
	}

	freeboard.unsaved["Board Definition"]=true
	
	if (_.isFunction(settingsSavedCallback)) {
		settingsSavedCallback(newSettings);
	}
});

for (var i of toDestroy) {
	i('destroy')
}

// Create our body
var pluginTypeNames = _.keys(pluginTypes);
var typeSelect;

if (pluginTypeNames.length > 1) {
	var typeRow = createSettingRow("plugin-types", "Type");
	typeSelect = $('<select></select>').appendTo($('<div class="styled-select"></div>').appendTo(typeRow));

	typeSelect.append($("<option>Select a type...</option>").attr("value", "undefined"));

	_.each(pluginTypes, function (pluginType) {
		typeSelect.append($("<option></option>").text(pluginType.display_name).attr("value", pluginType.type_name));
	});

	typeSelect.change(function () {
		newSettings.type = $(this).val();
		newSettings.settings = {};

		// Remove all the previous settings
		_removeSettingsRows();

		selectedType = pluginTypes[typeSelect.val()];

		if (_.isUndefined(selectedType)) {
			$("#setting-row-instance-name").hide();
			$("#dialog-ok").hide();
		}
		else {
			$("#setting-row-instance-name").show();

			if (selectedType.description && selectedType.description.length > 0) {
				pluginDescriptionElement.html(selectedType.description).show();
			}
			else {
				pluginDescriptionElement.hide();
			}

			$("#dialog-ok").show();
			createSettingsFromDefinition(selectedType.settings, selectedType.typeahead_source, selectedType.typeahead_data_segment);
		}
	});
}
else if (pluginTypeNames.length == 1) {
	selectedType = pluginTypes[pluginTypeNames[0]];
	newSettings.type = selectedType.type_name;
	newSettings.settings = {};
	createSettingsFromDefinition(selectedType.settings);
}

if (typeSelect) {
	if (_.isUndefined(currentTypeName)) {
		$("#setting-row-instance-name").hide();
		$("#dialog-ok").hide();
	}
	else {
		$("#dialog-ok").show();
		typeSelect.val(currentTypeName).trigger("change");
	}
}
	}

// Public API
return {
	createPluginEditor: function (
		title,
		pluginTypes,
		currentInstanceName,
		currentTypeName,
		currentSettingsValues,
		settingsSavedCallback) {
		createPluginEditor(title, pluginTypes, currentInstanceName, currentTypeName, currentSettingsValues, settingsSavedCallback);
	}
}
}
