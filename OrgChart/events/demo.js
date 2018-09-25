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
        enableSearch: false,
        scaleInitial: BALKANGrapth.match.boundary,
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
            img_0: "img"
        },
        links: [
            { from: 2, to: 1 },
            { from: 3, to: 1 }
        ],
        nodes: [
            { id: 1, name: "Denny Curtis", img: "//balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Ashley Barnett", img: "//balkangraph.com/js/img/3.jpg" },
            { id: 3, name: "Caden Ellison", img: "//balkangraph.com/js/img/4.jpg" }
        ]
    });
};
