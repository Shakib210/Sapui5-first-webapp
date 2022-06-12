sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view")
        },

        onFilterInvoice: function (oEvent) {
            // build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            console.log('search text', sQuery)
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
                console.log('filter data', aFilter)
            }

            // filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            console.log('binding data', oBinding)
            oBinding.filter(aFilter);
        },

        onPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // without data
            // oRouter.navTo("detail");  

            // With Data/props
            var oItem = oEvent.getSource()
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
    })
})