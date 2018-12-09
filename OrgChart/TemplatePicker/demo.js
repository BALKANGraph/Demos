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
        template: "ula",
        scaleInitial: BALKANGraph.match.boundary,
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

    var html = "";
    for (var templateNeme in OrgChart.templates) {
        if (templateNeme.indexOf("group") != -1)
            continue;

        var node = new BALKANGraph.node(templateNeme, null, [], templateNeme);
        html += '<svg data-template-name="' + templateNeme + '" style="padding: 2px 0px  2px 7px; cursor:pointer; padding: 10px;" preserveAspectRatio="xMaxYMax meet" width="' + node.w + '" height="' + (node.h + 30) + '" viewBox="0, 0, ' + node.w + ', ' + (node.h) + '"><defs>' + chart.ui.defs() + '</defs>' + chart.ui.node(node, { id: 1, name: "Lorem ipsum", title: "Dolor sit amet", img: "https://balkangraph.com/js/img/empty-img-white.svg" }, [], chart.config, 0, 0, chart.nodeBinding) + "</svg>";
    }

    document.getElementById("templatePicker").innerHTML = html;

    var templateElements = document.querySelectorAll("[data-template-name]");

    for (var i = 0; i < templateElements.length; i++) {
        templateElements[i].addEventListener("click", function () {
            var name = this.getAttribute("data-template-name");

            if (!chart.config.tags[name]) {
                chart.config.tags[name] = { template: name };
            }

            var node = {};
            node.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            node.pid = parentNodeId;
            node.tags = [name];
            node.img = "https://balkangraph.com/js/img/empty-img-white.svg";
            chart.addNode(node);

            hideTemplatePicker();
        });
    }
};