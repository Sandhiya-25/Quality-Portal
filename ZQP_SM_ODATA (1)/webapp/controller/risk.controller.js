sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SANGAVI_EHSMSANGAVI_EHSM.controller.risk", {
		onLogin : function(){
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("risk");
             
         },
          onLoginss   : function(){
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("inc");
             
         },
		onInit: function(){
				var url= "/sap/opu/odata/SAP/ZQP_SM_OD_SRV/";
			var d;
		    var oe = new sap.ui.model.odata.ODataModel(url, true);
		     //var uri = "PoNum='" + plant + "'";
		     //window.console.log(uri);
			oe.read("/ZQP_RESULT_SSSet?$filter=IInspecNo eq '1000002'&$format=json",{
				context:null,
				urlParameter:null,
				async:false,
				success: function(oData, oResponse)
				{
					d = oData.results;
				}
			});
		var oen = new sap.ui.model.json.JSONModel();
						// created a JSON model
						oen.setData({
					 "results"	: d
						});
						// oTable.setModel(tableModel);
			// set explored app's demo model on this sample
				this.getView().byId("producttable").setModel(oen);
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf SANGAVI_EHSMSANGAVI_EHSM.view.risk
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf SANGAVI_EHSMSANGAVI_EHSM.view.risk
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf SANGAVI_EHSMSANGAVI_EHSM.view.risk
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf SANGAVI_EHSMSANGAVI_EHSM.view.risk
		 */
		//	onExit: function() {
		//
		//	}

	});

});