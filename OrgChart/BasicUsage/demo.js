
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        menu: {
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeMenu: {
            add: { text: "Add New" },
            edit: { text: "Edit" },
            remove: { text: "Remove" },
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            field_number_children: "field_number_children"
        },
        links: [
            { from: 2, to: 1 },
            { from: 3, to: 1 },
            { from: 4, to: 2 },
            { from: 5, to: 2 },
            { from: 6, to: 3 },
            { from: 7, to: 3 }
        ],
        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "//balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Ashley Barnett", title: "Marketing Manager", img: "//balkangraph.com/js/img/3.jpg" },
            { id: 3, name: "Caden Ellison", title: "Dev Manager", img: "//balkangraph.com/js/img/4.jpg" },
            { id: 4, name: "Elliot Patel", title: "Marketing", img: "//balkangraph.com/js/img/5.jpg" },
            { id: 5, name: "Lynn Hussain", title: "Marketing", img: "//balkangraph.com/js/img/6.jpg" },
            { id: 6, name: "Tanner May", title: "Developer", img: "//balkangraph.com/js/img/7.jpg" },
            { id: 7, name: "Fran Parsons", title: "Developer", img: "//balkangraph.com/js/img/8.jpg" }
        ]
    });
};