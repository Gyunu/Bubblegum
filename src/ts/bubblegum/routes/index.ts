/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
"use strict";

declare function require (id: string): any;
var Sidewalk = require('sidewalk').Sidewalk;
var actionbarTemplate = require("html!../templates/actionbar.html");
var sectionlistTemplate = require("html!../templates/sectionlist.html");
var sectionlistItemTemplate = require("html!../templates/sectionlistitem.html");

export module Index {

	Sidewalk.registerModel({
		name: "sections",
		root: "sections",
		urls: {
			"all": "(:all)",
			"id": "(:id)"
		}
	});

	Sidewalk.registerComponent({
		name: 'list',
		template: sectionlistTemplate,
	});

	//TODO sort out using
	Sidewalk.registerComponent({
		name: 'listitem',
		template: sectionlistItemTemplate
	});

	Sidewalk.registerComponent({
		name: 'bar',
		template: actionbarTemplate,
	});



	let bar = Sidewalk.getComponent('bar').attachTo(document.querySelectorAll('body')[0]).render();
	let list = Sidewalk.getComponent('list').attachTo(document.querySelectorAll('body')[0]).render();
	let listitems = [];

	export function run() {
		let listitems = [];
		let sectionsModel = Sidewalk.getModel('sections');
		sectionsModel.getAll(function(data) {
			data.forEach(function(item) {
				let litem = Sidewalk.getComponent('listitem').attachTo(document.querySelectorAll('.list')[0]);
				//TODO expose these properties on the controller, i made the msitage of doing it on the controller so its not obvious and i wrote the fucker
				litem.template.title = item.name;
				litem.template.count = item.entries;
				litem.template.id = item.id;
				litem.render();
				litem.on('click', function(e) {
					
				});

				listitems.push(litem);
			});

		});
	}

}
