/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
"use strict";

declare function require (id: string): any;
var Sidewalk = require('sidewalk').Sidewalk;
// var actionbarTemplate = require("html!../templates/actionbar.html");
// var sectionlistTemplate = require("html!../templates/sectionlist.html");
// var sectionlistItemTemplate = require("html!../templates/sectionlistitem.html");

export module Sections {

	Sidewalk.registerModel({
		name: "sections",
		root: "sections",
		urls: {
			"all": "(:all)",
			"id": "(:id)"
		}
	});

	export function run(id) {
		let listitems = [];
		let sectionsModel = Sidewalk.getModel('sections');
		console.log(sectionsModel);
		sectionsModel.getId(function(id, data) {
			console.log('model data');
			console.log(data);
		});
	}

}
