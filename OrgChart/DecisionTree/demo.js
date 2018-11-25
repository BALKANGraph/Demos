
window.onload = function () {
    OrgChart.templates.toni = Object.assign({}, OrgChart.templates.belinda);
    OrgChart.templates.toni.size = [30, 30];
    OrgChart.templates.toni.node = '<circle cx="15" cy="15" r="15" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></circle>';
    OrgChart.templates.toni.minus = "";
    OrgChart.templates.toni.plus = "";
    OrgChart.templates.toni.rippleRadius = 15;
    OrgChart.templates.toni.link_field_0 = '<g transform="rotate(90)"><text text-anchor="middle" fill="#aeaeae" width="290" x="0" y="0" style="font-size:10px;">{val}</text></g>';

    OrgChart.templates.toni.field_0 = '<text class="field_0" style="font-size: 10px;" text-anchor="middle" fill="#039BE5"  x="15" y="38">{val}</text>';
    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: false,
        enableSearch: false,
        mouseScroolBehaviour: BALKANGraph.action.zoom,
        template: "toni",
        orientation: BALKANGraph.orientation.left,
        nodeMouseClickBehaviour: BALKANGraph.action.expandCollapse,
        padding: 50,
        levelSeparation: 200,
        siblingSeparation: 40,
        nodeBinding: {
            field_0: "text"
        },
        linkBinding: {
            link_field_0: "text"
        },
        nodes: [
            { id: 1, text: "Is it raining?" },
            { id: 2, pid: 1, text: "Is it windy?" },
            { id: 3, pid: 1, text: "Don't bring anything", tags: ["node-end"] },
            { id: 4, pid: 2, text: "Is it extremely windy?" },
            { id: 5, pid: 2, text: "Use an ubrella", tags: ["node-end"] },
            { id: 6, pid: 3, text: "Stay home" },
            { id: 7, pid: 3, text: "Wear a rain jacket", tags: ["node-end"] }
        ]
    });
};
