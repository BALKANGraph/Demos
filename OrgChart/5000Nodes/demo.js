window.onload = function () {
    var nodes = [];
    var links = [];
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

    for (var i = 2; i < 500; i++) {
        links.push({ from: i, to: 1 });

        for (var j = 1; j < 4; j++) {
            links.push({ from: 3 * i + j - 2, to: i });
            for (var k = 1; k < 4; k++) {
                links.push({ from: 3 * (3 * i + j - 2) + k - 2, to: 3 * i + j - 2 });
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
        links: links,
        nodes: nodes
    });  
};