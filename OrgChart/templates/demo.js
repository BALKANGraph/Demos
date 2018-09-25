
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        template: "luba",
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        links: [
            { from: 2, to: 1 },
            { from: 3, to: 1 }
        ],
        nodes: [
            { id: 1, name: "Angel Cox", title: "CEO", img: "//balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Jackie Price", title: "IT", img: "//balkangraph.com/js/img/3.jpg" },
            { id: 3, name: "Vic Pearson", title: "Marketing", img: "//balkangraph.com/js/img/4.jpg" }
        ]
    });
    document.getElementById("selectTemplate").addEventListener("change", function () {
        chart.config.template = this.value;
        chart.draw(false);
    });
}

