window.onload = function () {
    var c = document.getElementById("console");

    function update(sender, oldNode, newNode) {
        c.innerHTML += "update(sender, oldNode, newNode)<br />";
    };

    function remove(id) {
        c.innerHTML += "remove(id)<br />";
    };

    function add(sender, node) {
        c.innerHTML += "addNode(sender, node)<br />";
    };

    function redraw(sender) {
        c.innerHTML += "redraw(sender)<br />";
    };

    function click(sender, node) {
        c.innerHTML += "click(sender, node)<br />";
    };

    function dbclick(sender, node) {
        c.innerHTML += "dbclick(sender, node)<br />";
    };

    function imageUploaded(file, inputHtmlElement) {
        c.innerHTML += "click(file, inputHtmlElement)<br />";
    };

    function updateTags(sender, tags) {
        c.innerHTML += "updateTags(sender, tags)<br />";
    };

    function expCollClick(sender, action, id, ids) {
        c.innerHTML += "expCollClick(sender, action, id, ids)<br />";
    }

    function exportEnd(sender, type, filename, content) {
        c.innerHTML += "exportEnd(sender, type, filename, content)<br />";
    }

    function exportStart(sender, type, filename) {
        c.innerHTML += "exportStart(sender, type, filename)<br />";
    };

    function searchClick(sender, nodeId) {
        c.innerHTML += "searchClick(sender, nodeId)<br />";
    };


    

    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        enableSearch: false,
        onUpdate: update,
        onRemove: remove,
        onAdd: add,
        onImageUploaded: imageUploaded,
        onUpdateTags: updateTags, 
        onClick: click,
        onDbClick: dbclick,
        onRedraw: redraw,
        onExpCollClick: expCollClick,
        onExportStart: exportStart,
        onExportEnd: exportEnd,
        onSearchClick: searchClick,
        dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
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