window.onload = function () {
    var nodes = [];

    nodes.push({
        id: "1_1", photo: "//balkangraph.com/js/img/1.jpg"
    });


    var imgIndex = 2;
    for (var i = 0; i < 1000; i++) {
        nodes.push({
            id: "2_" + i, pid: "1_1", photo: "//balkangraph.com/js/img/" + imgIndex + ".jpg"
        });

        for (var j = 3; j < 7; j++) {
            nodes.push({
                id: j + "_" + i, pid: "2_" + i, photo: "//balkangraph.com/js/img/" + imgIndex + ".jpg"
            });

            imgIndex++;
            if (imgIndex > 15) {
                imgIndex = 2;
            }
        }
    }


    var chart = new OrgChart(document.getElementById("tree"), {
        template: "ana",
        lazyLoading: true,
        showXScroll: BALKANGraph.scroll.visible,
        mouseScrool: BALKANGraph.action.xScroll,
        layout: BALKANGraph.mixed,
        scaleInitial: BALKANGraph.match.height,
        nodeBinding: {
            field_0: "id",
            img_0: "photo"
        },
        nodes: nodes
    });
};