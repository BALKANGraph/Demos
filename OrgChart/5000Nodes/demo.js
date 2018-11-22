window.onload = function () {
    var nodes = [];
    var imgIndex = 1;
    for (var i = 1; i < 4496; i++) {
        nodes.push({
            id: i, name: i, photo: "//balkangraph.com/js/img/" + imgIndex + ".jpg"
        });
        imgIndex++;
        if (imgIndex > 10) {
            imgIndex = 1;
        }
    }

    for (var i = 1; i < 500; i++) {
        nodes[i].pid = 1;

        for (var j = 1; j < 4; j++) {
            nodes[3 * i + j - 2].pid = i;
            for (var k = 1; k < 4; k++) {
                if (nodes[3 * (3 * i + j - 2) + k - 2])
                    nodes[3 * (3 * i + j - 2) + k - 2].pid = (3 * i + j - 2);
            }
        }
    }
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "ana",
        lazyLoading: true,
        showXScroll: BALKANGraph.scroll.visible,
        mouseScroolBehaviour: BALKANGraph.action.xScroll,
        layout: BALKANGraph.mixed,
        scaleInitial: BALKANGraph.match.height,
        nodeBinding: {
            field_0: "name",
            img_0: "photo"
        },
        nodes: nodes
    });
};