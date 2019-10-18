sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/sapgrid/util/map",
	"jquery.sap.global"
], function(Controller, map, jQuery) {
	"use strict";

	return Controller.extend("com.sapgrid.controller.View", {

		map: map,

		onInit: function() {
			// this.svgturkiyeharitasi();
			debugger;
		},

		svgturkiyeharitasi: function() {
			debugger;

			var element = this.getView().byId("__xmlview0--map");
			var info = this.getView().byId("il-isimleri");

		
				// element.addEventListener(
				// 	"mouseover",
				// 	function(event) {
				// 		debugger;
				// 		if (event.target.tagName === "path" && event.target.parentNode.id !== "guney-kibris") {
				// 			info.innerHTML = [
				// 				"<div>",
				// 				event.target.parentNode.getAttribute("data-iladi"),
				// 				"</div>"
				// 			].join("");
				// 		}
				// 	}
				// );

			element.addEventListener(
				"mousemove",
				function(event) {
					info.style.top = event.pageY + 25 + "px";
					info.style.left = event.pageX + "px";
				}
			);

			element.addEventListener(
				"mouseout",
				function(event) {
					info.innerHTML = "";
				}
			);

			element.addEventListener(
				"click",
				function(event) {
					if (event.target.tagName === "path") {
						var parent = event.target.parentNode;
						var id = parent.getAttribute("id");

						if (
							id === "guney-kibris"
						) {
							return;
						}

						window.location.href = (
							"#" + id + "-" + parent.getAttribute("data-plakakodu")
						);
					}
				}
			);
		},

		handleSearch: function(evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("employeeList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}

		// onAfterRendering: function() {
		// 	this.getView().byId("vBoxCol1").addDelegate({
		// 		onclick: jQuery.proxy(function() {
		// 			this.expandColumn("left");
		// 		}, this)

		// 	});

		// 	this.getView().byId("vBoxCol2").addDelegate({
		// 		onclick: jQuery.proxy(function() {
		// 			this.expandColumn("center");
		// 		}, this)

		// 	});

		// 	this.getView().byId("vBoxCol3").addDelegate({
		// 		onclick: jQuery.proxy(function() {
		// 			this.expandColumn("right");
		// 		}, this)

		// 	});
		// },
		// expandColumn: function(column) {
		// 	switch (column) {
		// 		case "left":
		// 			this.getView().byId("vBoxCol1").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L6 M6 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol2").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol3").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			break;
		// 		case "center":
		// 			this.getView().byId("vBoxCol1").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol2").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L6 M6 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol3").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			break;
		// 		case "right":
		// 			this.getView().byId("vBoxCol1").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol2").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L3 M3 S12"
		// 			}));
		// 			this.getView().byId("vBoxCol3").setLayoutData(new sap.ui.layout.GridData({
		// 				span: "L6 M6 S12"
		// 			}));
		// 			break;
		// 		default:
		// 	}

		// }
	});
});