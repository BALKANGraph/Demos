window.onload = function () {
    var c = document.getElementById("console");

    function updateNode(sender, node) {
        c.innerHTML += "updateNode(sender, node)<br />";
    };

    function removeNode(id) {
        c.innerHTML += "removeNode(id=" + id + ")<br />";
    };

    function addNode(sender, node) {
        c.innerHTML += "addNode(sender, node)<br />";
    };

    function redraw() {
        c.innerHTML += "redraw()<br />";
    };

    function click(sender, node) {
        c.innerHTML += "click(sender, node)<br />";
    };

    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        enableSearch: false,
        onUpdate: updateNode,
        onRemove: removeNode,
        onAdd: addNode,
        onClick: click,
        onRedraw: redraw,
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
        nodes: [
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://balkangraph.com/js/img/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://balkangraph.com/js/img/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://balkangraph.com/js/img/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://balkangraph.com/js/img/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://balkangraph.com/js/img/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://balkangraph.com/js/img/8.jpg" }
        ]
    });
};