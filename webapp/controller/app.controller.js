sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("simpleInput.controller.app", {
		
		// function handle the change event of Date picker 
		// if the data provided by user is wrong
		// we need to set the error
		handleChange: function(oEvent){
			var oSource = oEvent.getSource();
			
			var oSrcValue = oEvent.getParameter("value");
			var oSrcValid = oEvent.getParameter("valid");
			
			var odp = this.byId("id_dp1");
			var oDpValue = odp.getValue();
	//		var oDpValid = odp.getValid();
			var oDpFormat = odp.getDisplayFormatType();
			
			if (oSrcValid === true){
				oSource.setValueState(sap.ui.core.ValueState.None);
				} else {
				oSource.setValueState(sap.ui.core.ValueState.Error);
			}
		}
	});
});