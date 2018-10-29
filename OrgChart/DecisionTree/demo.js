window.onload = function () {
    OrgChart.templates.toni = Object.assign({}, OrgChart.templates.belinda);
    OrgChart.templates.toni.size = [30, 30];
    OrgChart.templates.toni.node = '<circle cx="15" cy="15" r="15" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></circle>';
    OrgChart.templates.toni.minus = "";
    OrgChart.templates.toni.plus = "";
    OrgChart.templates.toni.rippleRadius = 15;
    OrgChart.templates.toni.link_field_0 = '<g transform="rotate(90)"><text text-anchor="middle" fill="#aeaeae" width="290" x="0" y="0" style="font-size:18px;">{val}</text></g>';

    OrgChart.templates.toni.field_0 = '<text class="field_0" style="font-size: 18px;" text-anchor="middle" fill="#039BE5"  x="15" y="48">{val}</text>';
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
            { from: 2, to: 1, text: "yes", tags: ["link-yes"] },
            { from: 3, to: 1, text: "no", tags: ["link-no"] },
            { from: 4, to: 2, text: "yes", tags: ["link-yes"] },
            { from: 5, to: 2, text: "no", tags: ["link-no"] },
            { from: 6, to: 4, text: "yes", tags: ["link-yes"] },
            { from: 7, to: 4, text: "no", tags: ["link-no"] }
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