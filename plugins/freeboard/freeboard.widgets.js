// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ F R E E B O A R D                                                  │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2013 Jim Heising (https://github.com/jheising)         │ \\
// │ Copyright © 2013 Bug Labs, Inc. (http://buglabs.net)               │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT license.                                    │ \\
// └────────────────────────────────────────────────────────────────────┘ \\

//const { set } = require("grunt");

(function () {
    var SPARKLINE_HISTORY_LENGTH = 100;
    var SPARKLINE_COLORS = ["#FF9900", "#FFFFFF", "#B3B4B4", "#6B6B6B", "#28DE28", "#13F7F9", "#E6EE18", "#C41204", "#CA3CB8", "#0B1CFB"];

    function easeTransitionText(newValue, textElement, duration) {

        var currentValue = $(textElement).text();

        if (currentValue == newValue)
            return;

        if ($.isNumeric(newValue) && $.isNumeric(currentValue)) {
            var numParts = newValue.toString().split('.');
            var endingPrecision = 0;

            if (numParts.length > 1) {
                endingPrecision = numParts[1].length;
            }

            numParts = currentValue.toString().split('.');
            var startingPrecision = 0;

            if (numParts.length > 1) {
                startingPrecision = numParts[1].length;
            }

            jQuery({ transitionValue: Number(currentValue), precisionValue: startingPrecision }).animate({ transitionValue: Number(newValue), precisionValue: endingPrecision }, {
                duration: duration,
                step: function () {
                    $(textElement).text(this.transitionValue.toFixed(this.precisionValue));
                },
                done: function () {
                    $(textElement).text(newValue);
                }
            });
        }
        else {
            $(textElement).text(newValue);
        }
    }

    function addSparklineLegend(element, legend) {
        var legendElt = $("<div class='sparkline-legend'></div>");
        for (var i = 0; i < legend.length; i++) {
            var color = SPARKLINE_COLORS[i % SPARKLINE_COLORS.length];
            var label = legend[i];
            legendElt.append("<div class='sparkline-legend-value'><span style='color:" +
                color + "'>&#9679;</span>" + label + "</div>");
        }
        element.empty().append(legendElt);

        freeboard.addStyle('.sparkline-legend', "margin:5px;");
        freeboard.addStyle('.sparkline-legend-value',
            'color:white; font:10px arial,san serif; float:left; overflow:hidden; width:50%;');
        freeboard.addStyle('.sparkline-legend-value span',
            'font-weight:bold; padding-right:5px;');
    }

    function addValueToSparkline(element, value, legend) {
        var values = $(element).data().values;
        var valueMin = $(element).data().valueMin;
        var valueMax = $(element).data().valueMax;
        if (!values) {
            values = [];
            valueMin = undefined;
            valueMax = undefined;
        }

        var collateValues = function (val, plotIndex) {
            if (!values[plotIndex]) {
                values[plotIndex] = [];
            }
            if (values[plotIndex].length >= SPARKLINE_HISTORY_LENGTH) {
                values[plotIndex].shift();
            }
            values[plotIndex].push(Number(val));

            if (valueMin === undefined || val < valueMin) {
                valueMin = val;
            }
            if (valueMax === undefined || val > valueMax) {
                valueMax = val;
            }
        }

        if (_.isArray(value)) {
            _.each(value, collateValues);
        } else {
            collateValues(value, 0);
        }
        $(element).data().values = values;
        $(element).data().valueMin = valueMin;
        $(element).data().valueMax = valueMax;

        var tooltipHTML = '<span style="color: {{color}}">&#9679;</span> {{y}}';

        var composite = false;
        _.each(values, function (valueArray, valueIndex) {
            $(element).sparkline(valueArray, {
                type: "line",
                composite: composite,
                height: "100%",
                width: "100%",
                fillColor: false,
                lineColor: SPARKLINE_COLORS[valueIndex % SPARKLINE_COLORS.length],
                lineWidth: 2,
                spotRadius: 3,
                spotColor: false,
                minSpotColor: "#78AB49",
                maxSpotColor: "#78AB49",
                highlightSpotColor: "#9D3926",
                highlightLineColor: "#9D3926",
                chartRangeMin: valueMin,
                chartRangeMax: valueMax,
                tooltipFormat: (legend && legend[valueIndex]) ? tooltipHTML + ' (' + legend[valueIndex] + ')' : tooltipHTML
            });
            composite = true;
        });
    }

    var valueStyle = freeboard.getStyleString("values");

    freeboard.addStyle('.widget-big-text', valueStyle + "font-size:75px;");

    freeboard.addStyle('.tw-display', 'width: 100%; height:100%; display:table; table-layout:fixed;');

    freeboard.addStyle('.tw-tr',
        'display:table-row;');

    freeboard.addStyle('.tw-tg',
        'display:table-row-group;');

    freeboard.addStyle('.tw-tc',
        'display:table-caption;');

    freeboard.addStyle('.tw-td',
        'display:table-cell;');

    freeboard.addStyle('.tw-value',
        valueStyle +
        'overflow: hidden;' +
        'display: inline-block;' +
        'text-overflow: ellipsis;');

    freeboard.addStyle('.tw-unit',
        'display: inline-block;' +
        'padding-left: 10px;' +
        'padding-bottom: 1.1em;' +
        'vertical-align: bottom;');

    freeboard.addStyle('.tw-value-wrapper',
        'position: relative;' +
        'vertical-align: middle;' +
        'height:100%;');

    freeboard.addStyle('.tw-sparkline',
        'height:20px;');

    var textWidget = function (settings) {

        var self = this;

        var currentSettings = settings;
        var displayElement = $('<div class="tw-display"></div>');
        var titleElement = $('<h2 class="section-title tw-title tw-td"></h2>');
        var valueElement = $('<div class="tw-value"></div>');
        var unitsElement = $('<div class="tw-unit"></div>');
        var sparklineElement = $('<div class="tw-sparkline tw-td"></div>');

        function updateValueSizing() {
            if (!_.isUndefined(currentSettings.units) && currentSettings.units != "") // If we're displaying our units
            {
                valueElement.css("max-width", (displayElement.innerWidth() - unitsElement.outerWidth(true)) + "px");
            }
            else {
                valueElement.css("max-width", "100%");
            }
        }

        this.render = function (element) {
            $(element).empty();

            $(displayElement)
                .append($('<div class="tw-tr"></div>').append(titleElement))
                .append($('<div class="tw-tr"></div>').append($('<div class="tw-value-wrapper tw-td"></div>').append(valueElement).append(unitsElement)))
                .append($('<div class="tw-tr"></div>').append(sparklineElement));

            $(element).append(displayElement);

            updateValueSizing();
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;

            var shouldDisplayTitle = (!_.isUndefined(newSettings.title) && newSettings.title != "");
            var shouldDisplayUnits = (!_.isUndefined(newSettings.units) && newSettings.units != "");

            if (newSettings.sparkline) {
                sparklineElement.attr("style", null);
            }
            else {
                delete sparklineElement.data().values;
                sparklineElement.empty();
                sparklineElement.hide();
            }

            if (shouldDisplayTitle) {
                titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));
                titleElement.attr("style", null);
            }
            else {
                titleElement.empty();
                titleElement.hide();
            }

            if (shouldDisplayUnits) {
                unitsElement.html((_.isUndefined(newSettings.units) ? "" : newSettings.units));
                unitsElement.attr("style", null);
            }
            else {
                unitsElement.empty();
                unitsElement.hide();
            }


            if (newSettings.size == "big") {
                valueFontSize = '60px';
            }
            else if (newSettings.size == "regular") {
                valueFontSize = '30px';
            }
            else {
                valueFontSize = newSettings.size;
            }


            valueElement.css({ "font-size": valueFontSize });

            updateValueSizing();
        }

        this.onSizeChanged = function () {
            updateValueSizing();
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName == "value") {

                if (currentSettings.animate) {
                    easeTransitionText(newValue, valueElement, 500);
                }
                else {
                    valueElement.text(newValue);
                }

                if (currentSettings.sparkline) {
                    addValueToSparkline(sparklineElement, newValue);
                }
            }
        }

        this.onDispose = function () {

        }

        this.getHeight = function () {
            if (currentSettings.size == "big" || currentSettings.sparkline) {
                return 2;
            }
            else {
                return 1;
            }
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "text_widget",
        display_name: "Text",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            {
                name: "size",
                display_name: "Size",
                type: "option",
                options: [
                    {
                        name: "Regular",
                        value: "regular"
                    },
                    {
                        name: "Big",
                        value: "big"
                    },
                    {
                        name: "Small",
                        value: "small"
                    },
                    {
                        name: "Medium",
                        value: "Medium"
                    },
                    {
                        name: "Large",
                        value: "large"
                    },
                    {
                        name: "Extra Large",
                        value: "x-large"
                    },
                    {
                        name: "32px",
                        value: "32px"
                    },
                    {
                        name: "48px",
                        value: "48px"
                    },
                    {
                        name: "64px",
                        value: "64px"
                    }
                ]
            },
            {
                name: "value",
                display_name: "Value",
                type: "calculated"
            },
            {
                name: "sparkline",
                display_name: "Include Sparkline",
                type: "boolean"
            },
            {
                name: "animate",
                display_name: "Animate Value Changes",
                type: "boolean",
                default_value: true
            },
            {
                name: "units",
                display_name: "Units",
                type: "text",
                options: function () {
                    return {
                        'lbs': '',
                        'kgs': '',
                        'psi': '',
                        'meters': '',
                        'feet': '',
                        'mm': '',
                        'degC': '',
                        'degF': '',
                    }
                }
            },

            {
                name: "font",
                display_name: "Font",
                type: "text",
                options: function () {
                    return {
                        'FBMono': '',
                        'FBSans': '',
                        'DSEG7': '',
                        'DSEG14': '',
                        'Pandora': '',
                        'FBCursive': '',
                        'FBSerif': '',
                        'DIN': '',
                        'FBComic': '',
                        'QTBlackForest': '',
                        'PenguinAttack': '',
                        'Chancery': '',
                        'Pixel': '',
                        'Handwriting': '',
                        'Chalkboard': '',
                        'RoughScript': '',
                    }
                }
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new textWidget(settings));
        }
    });

    var gaugeID = 0;
    freeboard.addStyle('.gauge-widget-wrapper', "width: 100%;text-align: center;");

    var gaugeWidget = function (settings) {
        var self = this;

        var thisGaugeID = "gauge-" + gaugeID++;
        var titleElement = $('<h2 class="section-title"></h2>');
    
        var gaugeElement = $('<canvas width=180 height=180 id="' + thisGaugeID + '"></canvas>')

        var gaugeObject;
        var rendered = false;

        self.value = 0

        self.currentSettings = settings;

        settings.style = settings.style || {}

        function createGauge() {
            if (!rendered) {
                return;
            }

            gaugeElement.empty();

            if (gaugeObject) {
                gaugeObject.destroy();
            }

            //10px just for extra margin
            var tlh = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--title-line-height'))+10;
            gaugeElement.attr('width', parseInt(settings.style.size) * 60-tlh).attr('height', parseInt(settings.style.size)* 60-tlh);
            var target = document.getElementById(thisGaugeID); // your canvas element

            //Decimals to contain the max possible value
            var places = String(self.currentSettings.max_value||100).split('.')[0].length




            var ops = {
                renderTo: target,
                width: (Number(settings.style.size) * 60)-tlh,
                height: Number(settings.style.size) * 60-tlh,
                units: self.currentSettings.units,
                title: self.currentSettings.title,
                value: self.value,
                minValue: self.currentSettings.min_value,
                maxValue: self.currentSettings.max_value,
                majorTicks: [
                ],
                minorTicks: self.currentSettings.minorTicks,
                strokeTicks: false,
                highlights: [
                ],
                colorBorderOuter: self.currentSettings.style.borderOuter,
                colorBorderOuterEnd: self.currentSettings.style.borderOuterEnd,
                colorBorderMiddle: self.currentSettings.style.borderMiddle,
                colorBorderMiddleEnd: self.currentSettings.style.borderMiddleEnd,
                colorBorderInner: self.currentSettings.style.borderInner,
                colorBorderInnerEnd: self.currentSettings.style.borderInnerEnd,

                borderInnerWidth: self.currentSettings.style.borderInnerWidth,
                borderMiddleWidth: self.currentSettings.style.borderMiddleWidth,
                borderOuterWidth: self.currentSettings.style.borderOuterWidth,


                colorBorderShadow: self.currentSettings.style.borderShadow,



                

                colorPlate: self.currentSettings.style.plateColor,
                colorPlateEnd: self.currentSettings.style.plateColorEnd,

                colorMajorTicks: self.currentSettings.style.fgColor,
                colorMinorTicks: self.currentSettings.style.fgColor,
                colorTitle: self.currentSettings.style.fgColor,
                colorUnits: self.currentSettings.style.fgColor,
                colorNumbers: self.currentSettings.style.fgColor,
                colorNeedle: self.currentSettings.style.pointerColor,
                colorNeedleShadowUp: self.currentSettings.style.pointerShadowTop,
                colorNeedleShadowBottom: self.currentSettings.style.pointerShadowBottom,


                colorNeedleEnd: self.currentSettings.style.pointerTipColor,

                colorNeedleCircleOuter: self.currentSettings.style.pointerCircleOuter,
                colorNeedleCircleOuterEnd: self.currentSettings.style.pointerCircleOuterEnd,
                colorNeedleCircleInner: self.currentSettings.style.pointerCircleInner,
                colorNeedleCircleInnerEnd: self.currentSettings.style.pointerCircleInnerEnd,


                fontTitleSize: self.currentSettings.style.fontTitleSize,
                fontUnitsSize: self.currentSettings.style.fontTitleSize,

                fontValueSize: self.currentSettings.style.fontValueSize,


                valueBox: self.currentSettings.digits>0,
                valueInt: places,
                valueDec: Math.max(self.currentSettings.digits-places,0),
                animationRule: 'bounce',
                animationDuration: 500,
                animation: false
            }

            var tick = parseInt(self.currentSettings.min_value)


            while (tick <= parseInt(self.currentSettings.max_value)) {
                ops.majorTicks.push(String(tick));
                tick += parseInt(self.currentSettings.tick_interval);
            }


            var gauge = new RadialGauge(ops);
            gauge.draw()





            gaugeObject = gauge


        }

        this.render = function (element) {
            rendered = true;
            $(element).append(titleElement).append($('<div class="gauge-widget-wrapper"></div>').append(gaugeElement));
            createGauge();
        }

        this.onSettingsChanged = function (newSettings) {

            self.currentSettings = newSettings;
            createGauge();

            titleElement.html(newSettings.heading || '');
        }

        this.onCalculatedValueChanged = function (settingName, value) {
            self.value = value
            if (!_.isUndefined(gaugeObject)) {

                gaugeObject.value = (Number(value));
                gaugeElement.attr('title', String(value)+(self.currentSettings.units||''))

            }
        }

        this.onDispose = function () {
            if (gaugeObject) {
                gaugeObject.destroy();
            }
        }

        this.getHeight = function () {
            try {
                return self.currentSettings.style.size;
            }
            catch (e) { 
                console.log(e);
                return 3
             }
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "gauge",
        display_name: "Gauge",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            {
                name: "heading",
                display_name: "Heading",
                type: "text"
            },

            {
                name: 'style',
                type: 'json',
                display_name: "Theming",
                schema: {
                    type: "object",
                    title: "Theme",
                    properties: {
                        "pointerColor": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }
                        },
                        "pointerTipColor": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },
                        "pointerCircleInner": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },
                        "pointerCircleInnerEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },
                        "pointerCircleOuter": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },
                        "pointerCircleOuterEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },
                        "pointerShadowBottom": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        }, 
                        "pointerShadowTop": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }

                        },

                        "fgColor": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                        },
                        "borderInner": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                        }, "borderInnerEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                        }, "borderMiddle": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }
                        },

                        "borderMiddleEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                        }, "borderOuter": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                        }, "borderOuterEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            }
                        },
                        "borderInnerWidth": {
                            type: "number",
                            min: 0,
                            max: 12,
                        },
                        "borderMiddleWidth": {
                            type: "number",
                            min: 0,
                            max: 12,
                        },
                        "borderOuterWidth": {
                            type: "number",
                            min: 0,
                            max: 12,
                        },
                        "size": {
                            type: "number",
                            min: 1,
                            max: 8,
                        },


                        "borderShadow": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                    alpha: true
                                }
                            },
                        },
                        "plateColor": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                            default_value: "rgb(0,0,0)"

                        },
                        "plateColorEnd": {
                            type: "string",
                            format: 'color',
                            'options': {
                                'colorpicker': {
                                    'editorFormat': 'rgb',
                                }
                            },
                            default_value: "rgb(0,0,0)"

                        },

                        "fontTitleSize": {
                            type: "number",
                            min: 8,
                            max: 64
                        },
                        "fontValueSize": {
                            type: "number",
                            min: 8,
                            max: 64
                        }
                    }
                },

                default_value: {
                    "pointerCircleInner": "rgb(57,43,21)",
                    "pointerCircleInnerEnd": "rgb(57,43,21)",
                    "pointerCircleOuter": "rgb(87,63,41)",
                    "pointerCircleOuterEnd": "rgb(57,43,21)",

                    "pointerShadowTop": "#000000",
                    "pointerShadowBottom": "#000000",

                    "pointerColor": "#000000",
                    "pointerTipColor": "#002000",
                    "fgColor": "rgb(57,43,21)",
                    "borderInner": "rgb(77,68,56)",
                    "borderInnerEnd": "rgb(59,44,36)",
                    "borderMiddle": "rgb(202,192,155)",
                    "borderMiddleEnd": "rgb(163,145,96)",
                    "borderOuter": "rgb(102,90,67)",
                    "borderOuterEnd": "rgb(57,41,34)",
                    "borderInnerWidth": 2,
                    "borderMiddleWidth": 3,
                    "borderOuterWidth": 2,
                    "borderShadow": "#000000",
                    "plateColor": "rgb(204,198,190)",
                    "plateColorEnd": "rgb(195,190,180)",

                    "fontTitleSize": 32,
                    "fontValueSize": 40,

                    size: 4
                }
            },



            {
                name: "value",
                display_name: "Value",
                type: "calculated"
            },

            {
                name: "units",
                display_name: "Units",
                type: "text"
            },
            {
                name: "min_value",
                display_name: "Minimum",
                type: "text",
                default_value: 0
            },
            {
                name: "max_value",
                display_name: "Maximum",
                type: "text",
                default_value: 100
            },
            {
                name: "tick_interval",
                display_name: "Tick Spacing",
                type: "text",
                default_value: 10
            },
            {
                name: "minor_ticks",
                display_name: "Tick divisions",
                type: "text",
                default_value: 5
            },
            {
                name: "digits",
                display_name: "Show digits",
                type: "number",
                default_value: 4
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new gaugeWidget(settings));
        }
    });


    freeboard.addStyle('.sparkline', "width:100%;height: 75px;");
    var sparklineWidget = function (settings) {
        var self = this;

        var titleElement = $('<h2 class="section-title"></h2>');
        var sparklineElement = $('<div class="sparkline"></div>');
        var sparklineLegend = $('<div></div>');
        var currentSettings = settings;

        this.render = function (element) {
            $(element).append(titleElement).append(sparklineElement).append(sparklineLegend);
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
            titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));

            if (newSettings.include_legend) {
                addSparklineLegend(sparklineLegend, newSettings.legend.split(","));
            }
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (currentSettings.legend) {
                addValueToSparkline(sparklineElement, newValue, currentSettings.legend.split(","));
            } else {
                addValueToSparkline(sparklineElement, newValue);
            }
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            var legendHeight = 0;
            if (currentSettings.include_legend && currentSettings.legend) {
                var legendLength = currentSettings.legend.split(",").length;
                if (legendLength > 4) {
                    legendHeight = Math.floor((legendLength - 1) / 4) * 0.5;
                } else if (legendLength) {
                    legendHeight = 0.5;
                }
            }
            return 2 + legendHeight;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "sparkline",
        display_name: "Sparkline",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            {
                name: "value",
                display_name: "Value",
                type: "calculated",
                multi_input: "true"
            },
            {
                name: "include_legend",
                display_name: "Include Legend",
                type: "boolean"
            },
            {
                name: "legend",
                display_name: "Legend",
                type: "text",
                description: "Comma-separated for multiple sparklines"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new sparklineWidget(settings));
        }
    });

    freeboard.addStyle('div.pointer-value', "position:absolute;height:95px;margin: auto;top: 0px;bottom: 0px;width: 100%;text-align:center;");
    var pointerWidget = function (settings) {
        var self = this;
        var paper;
        var strokeWidth = 3;
        var triangle;
        var width, height;
        var currentValue = 0;
        var valueDiv = $('<div class="widget-big-text"></div>');
        var unitsDiv = $('<div></div>');

        function polygonPath(points) {
            if (!points || points.length < 2)
                return [];
            var path = []; //will use path object type
            path.push(['m', points[0], points[1]]);
            for (var i = 2; i < points.length; i += 2) {
                path.push(['l', points[i], points[i + 1]]);
            }
            path.push(['z']);
            return path;
        }

        this.render = function (element) {
            width = $(element).width();
            height = $(element).height();

            var radius = Math.min(width, height) / 2 - strokeWidth * 2;

            paper = Raphael($(element).get()[0], width, height);
            var circle = paper.circle(width / 2, height / 2, radius);
            circle.attr("stroke", "#FF9900");
            circle.attr("stroke-width", strokeWidth);

            triangle = paper.path(polygonPath([width / 2, (height / 2) - radius + strokeWidth, 15, 20, -30, 0]));
            triangle.attr("stroke-width", 0);
            triangle.attr("fill", "#fff");

            $(element).append($('<div class="pointer-value"></div>').append(valueDiv).append(unitsDiv));
        }

        this.onSettingsChanged = function (newSettings) {
            unitsDiv.html(newSettings.units);
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName == "direction") {
                if (!_.isUndefined(triangle)) {
                    var direction = "r";

                    var oppositeCurrent = currentValue + 180;

                    if (oppositeCurrent < newValue) {
                        //direction = "l";
                    }

                    triangle.animate({ transform: "r" + newValue + "," + (width / 2) + "," + (height / 2) }, 250, "bounce");
                }

                currentValue = newValue;
            }
            else if (settingName == "value_text") {
                valueDiv.html(newValue);
            }
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return 4;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "pointer",
        display_name: "Pointer",
        settings: [
            {
                name: "direction",
                display_name: "Direction",
                type: "calculated",
                description: "In degrees"
            },
            {
                name: "value_text",
                display_name: "Value Text",
                type: "calculated"
            },
            {
                name: "units",
                display_name: "Units",
                type: "text"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new pointerWidget(settings));
        }
    });

    var pictureWidget = function (settings) {
        var self = this;
        var widgetElement;
        var timer;
        var imageURL;

        function stopTimer() {
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
        }

        function updateImage() {
            if (widgetElement && imageURL) {
                //var cacheBreakerURL = imageURL + (imageURL.indexOf("?") == -1 ? "?" : "&") + Date.now();

                //Overriding cache is generally a bad thing if there is polling happening.  If needed, fix your cache settings.
                var cacheBreakerURL = imageURL


                $(widgetElement).css({
                    "background-image": "url(" + cacheBreakerURL + ")"
                });


            }
        }

        this.updateMode = function(){
            if(this.settings.mode=="cover")
            {
                $(widgetElement).css({
                    width: "100%",
                    height: "100%",
                    "background-size": "cover",
                    "background-position": "center"
                });
            }
            else{
                $(widgetElement).css({
                    width: "100%",
                    "background-size": "contain",
                    "background-position": "center",
                    "background-repeat":"no-repeat"
                });
            }
        }
        this.render = function (element) {
            widgetElement = element;
            this.updateMode()
        }

        this.onSettingsChanged = function (newSettings) {
            stopTimer();

            if (newSettings.refresh && newSettings.refresh > 0) {
                timer = setInterval(updateImage, Number(newSettings.refresh) * 1000);
            }
            this.settings = newSettings
            this.updateMode()
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName == "src") {
                imageURL = newValue;
            }

            updateImage();

        }

        this.onDispose = function () {
            stopTimer();
        }

        this.getHeight = function () {
            return 4;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "picture",
        display_name: "Picture",
        fill_size: true,
        settings: [
            {
                name: "src",
                display_name: "Image URL",
                type: "calculated"
            },
            {
                "type": "calculated",
                "display_name": "Refresh every",
                "name": "refresh",
                "suffix": "seconds",
                "description": "Leave blank if the image doesn't need to be refreshed"
            },

            {
                name: "mode",
                display_name: "mode",
                type: "option",
                options: [
                    {
                        name: "Center",
                        value: "center"
                    },
                    {
                        name: "Cover",
                        value: "cover"
                    }
                   
                ]
            },
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new pictureWidget(settings));
        }
    });

    freeboard.addStyle('.indicator-light', "border-radius:50%;width:22px;height:22px;border:2px solid #3d3d3d;margin-top:5px;float:left;background-color:#222;margin-right:10px;");
    freeboard.addStyle('.indicator-light.on', "background-color:#FFC773;box-shadow: 0px 0px 15px #FF9900;border-color:#FDF1DF;");
    freeboard.addStyle('.indicator-text', "margin-top:10px;");
    var indicatorWidget = function (settings) {
        var self = this;
        var titleElement = $('<h2 class="section-title"></h2>');
        var stateElement = $('<div class="indicator-text"></div>');
        var indicatorElement = $('<div class="indicator-light"></div>');
        var currentSettings = settings;
        var isOn = false;
        var onText;
        var offText;

        function updateState() {
            indicatorElement.toggleClass("on", isOn);

            if (isOn) {
                stateElement.text((_.isUndefined(onText) ? (_.isUndefined(currentSettings.on_text) ? "" : currentSettings.on_text) : onText));
            }
            else {
                stateElement.text((_.isUndefined(offText) ? (_.isUndefined(currentSettings.off_text) ? "" : currentSettings.off_text) : offText));
            }
        }

        this.render = function (element) {
            $(element).append(titleElement).append(indicatorElement).append(stateElement);
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
            titleElement.html((_.isUndefined(newSettings.title) ? "" : newSettings.title));
            updateState();
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName == "value") {
                isOn = Boolean(newValue);
            }
            if (settingName == "on_text") {
                onText = newValue;
            }
            if (settingName == "off_text") {
                offText = newValue;
            }

            updateState();
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return 1;
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        type_name: "indicator",
        display_name: "Indicator Light",
        settings: [
            {
                name: "title",
                display_name: "Title",
                type: "text"
            },
            {
                name: "value",
                display_name: "Value",
                type: "calculated"
            },
            {
                name: "on_text",
                display_name: "On Text",
                type: "calculated"
            },
            {
                name: "off_text",
                display_name: "Off Text",
                type: "calculated"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new indicatorWidget(settings));
        }
    });

    freeboard.addStyle('.gm-style-cc a', "text-shadow:none;");

    freeboard.addStyle('.html-widget', "white-space:normal;width:100%;height:100%");

    var htmlWidget = function (settings) {
        var self = this;
        var htmlElement = $('<div class="html-widget"></div>');
        var currentSettings = settings;

        this.render = function (element) {
            $(element).append(htmlElement);
        }

        this.onSettingsChanged = function (newSettings) {
            currentSettings = newSettings;
        }

        this.onCalculatedValueChanged = function (settingName, newValue) {
            if (settingName == "html") {
                htmlElement.html(newValue);
            }
        }

        this.onDispose = function () {
        }

        this.getHeight = function () {
            return Number(currentSettings.height);
        }

        this.onSettingsChanged(settings);
    };

    freeboard.loadWidgetPlugin({
        "type_name": "html",
        "display_name": "Show computed HTML",
        "fill_size": true,
        "settings": [
            {
                "name": "html",
                "display_name": "HTML",
                "type": "calculated",
                "description": "Can be literal HTML, or javascript that outputs HTML."
            },
            {
                "name": "height",
                "display_name": "Height Blocks",
                "type": "number",
                "default_value": 4,
                "description": "A height block is around 60 pixels"
            }
        ],
        newInstance: function (settings, newInstanceCallback) {
            newInstanceCallback(new htmlWidget(settings));
        }
    });

}());
