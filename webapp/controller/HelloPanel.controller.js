sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function (
    Controller,
	MessageToast,
	Fragment
) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            //read msg from i18n model start
            const oBundle = this.getView().getModel("i18n").getResourceBundle()
            const sRecipient = this.getView().getModel().getProperty("/recipient/name")
            const sMsg = oBundle.getText("helloMessage", [sRecipient])

            alert(sMsg)
            MessageToast.show("Toast here!")
        },

        onOpenDialog: function () {
            // var oView= this.getView();

            // // create dialog lazily
            // if (!this.byId("helloDialog")) {
            //     // load asynchronous XML fragment
            //     Fragment.load({
            //         id: oView.getId(),
            //         name: "sap.ui.demo.walkthrough.view.HelloDialog",
            //         controller: this
            //     }).then(function (oDialog) {
            //         // connect dialog to the root view of this component (models, lifecycle)
            //         oView.addDependent(oDialog);
            //         oDialog.open();
            //     })
            // } else {
            //     this.byId("helloDialog").open();
            // }
            // MessageToast.show("Modal open")

            // for reuse
            this.getOwnerComponent().openHelloDialog();
        },
        onCloseDialog: function () {
            this.byId("helloDialog").close();
        }

    });
});