sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"
], function (
    Controller,
    MessageToast,
    JSONModel,
    ResourceModel
) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello: function () {
            //read msg from i18n model start
            const oBundle= this.getView().getModel("i18n").getResourceBundle()
            const sRecipient= this.getView().getModel().getProperty("/recipient/name")
            const sMsg= oBundle.getText("helloMessage", [sRecipient])
           
            alert(sMsg)
            MessageToast.show("Toast here!")
        },

        /**
         * @override
         */
        onInit: function () {
            const oData = {
                recipient: {
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel)
            //set i18n model on view. its like const file
            const i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n")
        }
    });
}); 