// sap.ui.define(["sap/m/Text"], function (Text) {
//   "use strict";
//  new Text({
//      text: "Hello world 12345"
//  }).placeAt('content')
// });

//for external view -start
sap.ui.define(["sap/ui/core/mvc/XMLView"], function(XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App"
  }).then(function(oView){
    oView.placeAt('content');
  })
})
//for external view -end