window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        tags: {
            "assistant": {
                template: "ula"
            }
        },
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        links: [
            { from: 2, to: 1 },
            { from: 3, to: 1 },
            { from: 4, to: 2 },
            { from: 5, to: 2 },
            { from: 6, to: 3 },
            { from: 7, to: 3 },
            { from: 8, to: 1 },
            { from: 9, to: 2 },
        ],
        nodes: [
            { id: 1, tags: ["ceo"], name: "Denny Curtis", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Ashley Barnett", title: "Sales Manager", img: "https://balkangraph.com/js/img/3.jpg" },
            { id: 3, tags: "RR", name: "Caden Ellison", title: "Dev Manager", img: "https://balkangraph.com/js/img/4.jpg" },
            { id: 4, name: "Elliot Patel", title: "Sales", img: "https://balkangraph.com/js/img/5.jpg" },
            { id: 5, name: "Lynn Hussain", title: "Sales", img: "https://balkangraph.com/js/img/6.jpg" },
            { id: 6, name: "Tanner May", title: "Developer", img: "https://balkangraph.com/js/img/7.jpg" },
            { id: 7, name: "Fran Parsons", title: "Developer", img: "https://balkangraph.com/js/img/8.jpg" },
            { id: 8, tags: ["assistant"], name: "Rudy Griffiths", title: "Assistant", img: "https://balkangraph.com/js/img/9.jpg" },
            { id: 9, tags: ["assistant"], name: "Skyler Hunt", title: "Assistant", img: "https://balkangraph.com/js/img/12.jpg" }
        ]
    });
};