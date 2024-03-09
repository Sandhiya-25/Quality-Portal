sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("SANGAVI_EHSMSANGAVI_EHSM.controller.login", {
		onLogin : function(){
			
            var uid = this.getView().byId("uid").getValue();
            var pasw = this.getView().byId("pasw").getValue();
            var surl = "/sap/opu/odata/SAP/ZQP_SM_OD_SRV/";
            var oModel = new sap.ui.model.odata.ODataModel(surl, true);
            var uri = "Userid='" + uid + "',Password='" + pasw + "'";
            var status;
            window.console.log(uri);
            oModel.read("/ZQP_LOGIN_SMSet(" + uri + ")", {
               
                context: null,
                urlParameters: null,
                async: false,
                success: function(oData, oResponse) {
                    window.console.log(oData);
                    status = oData["Result"];
                    window.console.log(status);
                  
                }
            });
            if(status === "Success"){
            var oR = sap.ui.core.UIComponent.getRouterFor(this);
            oR.navTo("inc");
            }
            else{
                MessageBox.alert("Enter The Valid Credentials");
            }
       
        }

	});
});