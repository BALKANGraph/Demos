window.onload = function () {
    var c = document.getElementById("console");
    function updateLink(sender, from, to) {
        c.innerHTML += "updateLink(sender: " + sender + ", from: " + from + ", to: " + to + ")<br />";
    };

    function updateNode(sender, node) {
        c.innerHTML += "updateNode(node: " + node + ")<br />";
    };

    function removeNode() {
        c.innerHTML += "removeNode()<br />";
    };
    function addNode() {
        c.innerHTML += "addNode()<br />";
    };

    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        enableSearch: false,
        onUpdateLink: updateLink,
        onUpdateNode: updateNode,
        onRemoveNode: removeNode,
        onAddNode: addNode,
        nodeMenu: {
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
            { from: 7, to: 3 }
        ],
        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "//balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Ashley Barnett", title: "Sales Manager", img: "//balkangraph.com/js/img/3.jpg" },
            { id: 3, name: "Caden Ellison", title: "Dev Manager", img: "//balkangraph.com/js/img/4.jpg" },
            { id: 4, name: "Elliot Patel", title: "Sales", img: "//balkangraph.com/js/img/5.jpg" },
            { id: 5, name: "Lynn Hussain", title: "Sales", img: "//balkangraph.com/js/img/6.jpg" },
            { id: 6, name: "Tanner May", title: "Developer", img: "//balkangraph.com/js/img/7.jpg" },
            { id: 7, name: "Fran Parsons", title: "Developer", img: "//balkangraph.com/js/img/8.jpg" }
        ]
    });
};