"use strict";
var app_1 = require("./bubblegum/app");
var app = new app_1.App();
var Sidewalk = require('sidewalk').Sidewalk;
var index_1 = require("./bubblegum/routes/index");
var sections_1 = require("./bubblegum/routes/sections");
window.document.addEventListener('DOMContentLoaded', app.onLoad);
window.addEventListener('bubblegum.loaded', function () {
    Sidewalk.registerRoute({
        name: 'index',
        url: '/',
        onLoad: function (data) {
            index_1.Index.run();
        }
    });
    Sidewalk.registerRoutes({
        urls: [
            {
                name: "sections",
                url: "/sections",
                onLoad: function (data) {
                    console.log('sections');
                }
            },
            {
                name: "sections.edit",
                url: "/sections/edit",
                onLoad: function (data) {
                    console.log('edit');
                }
            },
            {
                name: "sections.search",
                url: "/sections/search",
                onLoad: function (data) {
                    console.log('search');
                }
            },
            {
                name: "sections.remove",
                url: "/sections/remove",
                onLoad: function (data) {
                    console.log('remove');
                }
            },
            {
                name: "sections.add",
                url: "/sections/add",
                onLoad: function (data) {
                    console.log('add');
                }
            },
            {
                name: "sections.id",
                url: "/sections/(:number)",
                onLoad: function (data) {
                    console.log('loading sections.id');
                    sections_1.Sections.run(data);
                }
            }
        ]
    });
    Sidewalk.run();
});
//# sourceMappingURL=index.js.map