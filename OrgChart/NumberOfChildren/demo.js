
window.onload = function () {
    var nodes = nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "//balkangraph.com/js/img/2.jpg" },
        { id: 2, name: "Ashley Barnett", title: "Marketing Manager", img: "//balkangraph.com/js/img/3.jpg" },
        { id: 3, name: "Caden Ellison", title: "Dev Manager", img: "//balkangraph.com/js/img/4.jpg" },
        { id: 4, name: "Elliot Patel", title: "Marketing", img: "//balkangraph.com/js/img/5.jpg" },
        { id: 5, name: "Lynn Hussain", title: "Marketing", img: "//balkangraph.com/js/img/6.jpg" },
        { id: 6, name: "Tanner May", title: "Developer", img: "//balkangraph.com/js/img/7.jpg" },
        { id: 7, name: "Fran Parsons", title: "Developer", img: "//balkangraph.com/js/img/8.jpg" }
    ];

    var links = [
        { from: 2, to: 1 },
        { from: 3, to: 1 },
        { from: 4, to: 2 },
        { from: 5, to: 2 },
        { from: 6, to: 3 },
        { from: 7, to: 3 }
    ];

    for (var i = 0; i < nodes.length; i++) {
        nodes[i].field_number_children = childCount(links, nodes[i].id);
    }

    function childCount(objectArray, from, children) {
        let count = 0;

        if (!children) {
            children = new Set();
            objectArray.forEach(obj => {
                if (obj.to === from) {
                    ++count;
                    children.add(obj.from);
                }
            });
            if (count) {
                count += childCount(objectArray, null, children);
            }
            return count;
        }

        let nextGen = new Set();
        objectArray.forEach(obj => {
            if (children.has(obj.to)) {
                ++count;
                nextGen.add(obj.from);
            }
        });
        if (count) {
            count += childCount(objectArray, null, nextGen)
        }
        return count;
    }

    OrgChart.templates.luba.field_number_children = '<circle cx="230" cy="20" r="15" fill="#F57C00"></circle><text fill="#ffffff" x="230" y="25" text-anchor="middle">{val}</text>';

    var chart = new OrgChart(document.getElementById("tree"), {
        template: "luba",
        scaleInitial: BALKANGraph.match.boundary,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img",
            field_number_children: "field_number_children"
        },
        links: links,
        nodes: nodes
    });
};
