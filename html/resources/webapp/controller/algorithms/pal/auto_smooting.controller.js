sap.ui.define([
	"forecast/html/base/algorithms/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("forecast.html.controller.algorithms.pal.auto_smooting", {
		forcedSelectedAlgorithm: "auto_smooting",
		onPressExecute: function(oEvent) {
			Controller.prototype.onPressExecute.apply(this, oEvent);
				this.setVizProperties("result_fit_viz_frame", "result_fit_popover");			
		}
	});
});