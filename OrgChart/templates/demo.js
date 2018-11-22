
window.onload = function () {
    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        scaleInitial: BALKANGraph.match.boundary,
        template: "luba",
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
    document.getElementById("selectTemplate").addEventListener("change", function () {
        chart.config.template = this.value;
        chart.draw(false);
    });
}

