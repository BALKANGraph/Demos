window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: false,
        enableSearch: false,
        mouseScroolBehaviour: BALKANGraph.action.zoom,
        template: "toni",
        orientation: BALKANGraph.orientation.left,
        nodeMouseClickBehaviour: BALKANGraph.action.expandCollapse,
        padding: 60,
        levelSeparation: 200,
        siblingSeparation: 100,
        nodeBinding: {
            field_0: "text"
        },
        linkBinding: {
            link_field_0: "text"
        },
        links: [
            { from: 2, to: 1, text: "no", tags: ["link-no"] },
            { from: 3, to: 1, text: "yes", tags: ["link-yes"] },
            { from: 4, to: 2, text: "no", tags: ["link-no"] },
            { from: 5, to: 2, text: "yes", tags: ["link-yes"] },
            { from: 6, to: 4, text: "no", tags: ["link-no"] },
            { from: 7, to: 4, text: "yes", tags: ["link-yes"] }
        ],
        nodes: [
            { id: 1, text: "Is it raining?" },
            { id: 2, text: "Is it windy?" },
            { id: 3, text: "Don't bring anything", tags: ["node-end"] },
            { id: 4, text: "Is it extremely windy?" },
            { id: 5, text: "Use an ubrella", tags: ["node-end"] },
            { id: 6, text: "Stay home", tags: ["node-end"] },
            { id: 7, text: "Wear a rain jacket", tags: ["node-end"] }
        ]
    });
};