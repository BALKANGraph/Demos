window.onload = function () {
    var parentNodeId = null;
    function showTemplatePicker(nodeId) {
        parentNodeId = nodeId;

        document.getElementById("bg").style.display = "block";
        document.getElementById("title").style.display = "block";

        var templatePicker = document.getElementById("templatePicker");
        templatePicker.style.opacity = 0;
        templatePicker.style.left = "-10px";

        templatePicker.style.display = "initial";
        BALKANGraph.animate(
            templatePicker,
            { opacity: 0, left: -10 },
            { opacity: 1, left: 0 },
            300, BALKANGraph.animate.inOutPow);
    }

    function hideTemplatePicker() {
        document.getElementById("bg").style.display = "none";
        document.getElementById("title").style.display = "none";
        document.getElementById("templatePicker").style.display = "none";
    }


    var chart = new OrgChart(document.getElementById("tree"), {
        scaleInitial: BALKANGraph.match.boundary,
        template: "ula",
        enableSearch: false,
        nodeMenu: {
            add: {
                text: "Add New",
                onClick: showTemplatePicker
            }
        },
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
            { id: 1, name: "Denny Curtis", title: "CEO", img: "//balkangraph.com/js/img/2.jpg" },
            { id: 2, name: "Ashley Barnett", title: "Marketing", img: "//balkangraph.com/js/img/3.jpg" },
            { id: 3, name: "Caden Ellison", title: "Dev", img: "//balkangraph.com/js/img/4.jpg" }
        ]
    });

    var html = "";
    for (var templateNeme in OrgChart.templates) {
        var node = new BALKANGraph.node(templateNeme, templateNeme);
        var template = OrgChart.templates[templateNeme];
        node.data = { id: 1, name: "Lorem ipsum", title: "Dolor sit amet", img: "//balkangraph.com/js/img/empty-img-white.svg" };
        html += '<svg data-template-name="' + templateNeme + '" style="padding: 2px 0px  2px 7px; cursor:pointer; padding: 10px;" preserveAspectRatio="xMaxYMax meet" width="' + node.w + '" height="' + (node.h + 30) + '" viewBox="0, 0, ' + node.w + ', ' + (node.h) + '"><defs>' + chart.ui.defs() + '</defs>' + chart.ui.node(node, [], chart.config, 0, 0, chart.nodeBinding) + "</svg>";
    }

    document.getElementById("templatePicker").innerHTML = html;

    var templateElements = document.querySelectorAll("[data-template-name]");

    for (var i = 0; i < templateElements.length; i++) {
        templateElements[i].addEventListener("click", function () {
            var name = this.getAttribute("data-template-name");
            var node = new BALKANGraph.node(null, name);

            if (!chart.config.tags[name]) {
                chart.config.tags[name] = { template: name };
            }

            node.pid = parentNodeId;
            node.data.tags = [name];
            node.data.img = "//balkangraph.com/js/img/empty-img-white.svg";
            chart.addNode(node);

            hideTemplatePicker();
        });
    }
};