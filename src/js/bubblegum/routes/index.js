"use strict";
var Sidewalk = require('sidewalk').Sidewalk;
var actionbarTemplate = require("html!../templates/actionbar.html");
var sectionlistTemplate = require("html!../templates/sectionlist.html");
var sectionlistItemTemplate = require("html!../templates/sectionlistitem.html");
var Index;
(function (Index) {
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
    Sidewalk.registerComponent({
        name: 'listitem',
        template: sectionlistItemTemplate
    });
    Sidewalk.registerComponent({
        name: 'bar',
        template: actionbarTemplate,
    });
    var bar = Sidewalk.getComponent('bar').attachTo(document.querySelectorAll('body')[0]).render();
    var list = Sidewalk.getComponent('list').attachTo(document.querySelectorAll('body')[0]).render();
    var listitems = [];
    function run() {
        var listitems = [];
        var sectionsModel = Sidewalk.getModel('sections');
        sectionsModel.getAll(function (data) {
            data.forEach(function (item) {
                var litem = Sidewalk.getComponent('listitem').attachTo(document.querySelectorAll('.list')[0]);
                litem.template.title = item.name;
                litem.template.count = item.entries;
                litem.template.id = item.id;
                litem.render();
                litem.on('click', function (e) {
                });
                listitems.push(litem);
            });
        });
    }
    Index.run = run;
})(Index = exports.Index || (exports.Index = {}));
//# sourceMappingURL=index.js.map