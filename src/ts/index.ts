/*jslint browser:true */
/*jslint node: true */
/*jslint white: true */
"use strict";
import { App }						from "./bubblegum/app";

declare function require (id: string): any;

var app = new App();

var Sidewalk = require('sidewalk').Sidewalk;

import { Index } from "./bubblegum/routes/index";
import { Sections } from "./bubblegum/routes/sections";

window.document.addEventListener('DOMContentLoaded', app.onLoad);

window.addEventListener('bubblegum.loaded', function() {

	Sidewalk.registerRoute({
		name: 'index',
		url: '/',
		onLoad: function(data) {
			Index.run();
		}
	});

	Sidewalk.registerRoutes({
		urls: [
			{
				name: "sections",
				url: "/sections",
				onLoad: function(data) {
					console.log('sections');
				}
			},
			{
				name: "sections.edit",
				url: "/sections/edit",
				onLoad: function(data) {
					console.log('edit');
				}
			},
			{
				name: "sections.search",
				url: "/sections/search",
				onLoad: function(data) {
					console.log('search');
				}
			},
			{
				name: "sections.remove",
				url: "/sections/remove",
				onLoad: function(data) {
					console.log('remove');
				}
			},
			{
				name: "sections.add",
				url: "/sections/add",
				onLoad: function(data) {
					console.log('add');
				}
			},
			{
				name: "sections.id",
				url: "/sections/(:number)",
				onLoad: function(data) {
					console.log('loading sections.id');
					Sections.run(data);
				}
			}
	]
	});

	Sidewalk.run();
});
