window.onload = function () {
    var nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "IT Manager", img: "https://balkangraph.com/js/img/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Marketing Manager", img: "https://balkangraph.com/js/img/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Developer", img: "https://balkangraph.com/js/img/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Developer", img: "https://balkangraph.com/js/img/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Marketing", img: "https://balkangraph.com/js/img/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Marketing", img: "https://balkangraph.com/js/img/8.jpg" }
    ];


    for (var i = 0; i < nodes.length; i++) {
        nodes[i].field_number_children = childCount(nodes[i].id);
    }

    function childCount(id) {
        let count = 0;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].pid == id) {
                count++;
                count += childCount(nodes[i].id);
            }
        }

        return count;
    }

    OrgChart.templates.rony.field_number_children = '<circle cx="60" cy="110" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="60" y="115" text-anchor="middle">{val}</text>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "rony",
        scaleInitial: BALKANGraph.match.boundary,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            field_number_children: "field_number_children"
        },
        nodes: nodes
    });
};