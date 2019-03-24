window.onload = function () {
    OrgChart.templates.family_template_11 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.family_template_11.size = [200, 140];
    OrgChart.templates.family_template_11.plus = "";
    OrgChart.templates.family_template_11.minus = "";
    OrgChart.templates.family_template_11.node = '';
    OrgChart.templates.family_template_11.rippleRadius = 45;
    OrgChart.templates.family_template_11.name_1 = '<text class="name_1" style="font-size: 12px;" fill="#000000" x="100" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.name_2 = '<text class="name_2" style="font-size: 12px;" fill="#000000" x="235" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.name_3 = '<text class="name_3" style="font-size: 12px;" fill="#000000" x="370" y="105" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_1 = '<text class="title_1" style="font-size: 12px;" fill="#aeaeae" x="100" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_2 = '<text class="title_2" style="font-size: 12px;" fill="#aeaeae" x="235" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.title_3 = '<text class="title_3" style="font-size: 12px;" fill="#aeaeae" x="370" y="120" text-anchor="middle">{val}</text>';
    OrgChart.templates.family_template_11.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#aeaeae" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_11.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: 0
        };


    OrgChart.templates.family_template_12 = Object.assign({}, OrgChart.templates.family_template_11);
    OrgChart.templates.family_template_12.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_12.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: -95
        };



    OrgChart.templates.family_template_21 = Object.assign({}, OrgChart.templates.family_template_11);
    OrgChart.templates.family_template_21.size = [335, 140];
    OrgChart.templates.family_template_21.node = '<line x1="145" x2="190" y1="45" y2="45" stroke-width="1" stroke="#000000"></line>';
    OrgChart.templates.family_template_21.img_1 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#aeaeae" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_21.linkAdjuster =
        {
            fromX: 65,
            fromY: 0,
            toX: 0,
            toY: -95
        };

    OrgChart.templates.family_template_22 = Object.assign({}, OrgChart.templates.family_template_21);
    OrgChart.templates.family_template_22.linkAdjuster =
        {
            fromX: -70,
            fromY: 0,
            toX: 65,
            toY: -95
        };

    OrgChart.templates.family_template_23 = Object.assign({}, OrgChart.templates.family_template_21);
    OrgChart.templates.family_template_23.img_1 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_23.linkAdjuster =
        {
            fromX: 65,
            fromY: 0,
            toX: 65,
            toY: -95
        };

    OrgChart.templates.family_template_24 = Object.assign({}, OrgChart.templates.family_template_21);
    OrgChart.templates.family_template_24.img_0 = '<clipPath id="{randId}"><circle cx="100" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="100" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="5"  width="80" height="80"></image>';


    OrgChart.templates.family_template_25 = Object.assign({}, OrgChart.templates.family_template_21);
    OrgChart.templates.family_template_25.img_1 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';




    OrgChart.templates.family_template_31 = Object.assign({}, OrgChart.templates.family_template_21);
    OrgChart.templates.family_template_31.size = [470, 140];
    OrgChart.templates.family_template_31.node = '<line x1="145" x2="190" y1="45" y2="45" stroke-width="1" stroke="#000000"></line><line x1="280" x2="325" y1="45" y2="45" stroke-width="1" stroke="#F57C00"></line>';
    OrgChart.templates.family_template_31.img_1 = '<clipPath id="{randId}"><circle cx="235" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#039BE5" cx="235" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="195" y="5"  width="80" height="80"></image>';

    OrgChart.templates.family_template_31.img_2 = '<clipPath id="{randId}"><circle cx="370" cy="45" r="40"></circle></clipPath><circle stroke-width="3" fill="none" stroke="#aeaeae" cx="370" cy="45" r="45"></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="330" y="5"  width="80" height="80"></image>';
    OrgChart.templates.family_template_31.linkAdjuster =
        {
            fromX: 0,
            fromY: 0,
            toX: 0,
            toY: -95
        };

    var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            "family_template_11": {
                template: "family_template_11"
            },
            "family_template_21": {
                template: "family_template_21"
            },
            "family_template_31": {
                template: "family_template_31"
            },
            "family_template_22": {
                template: "family_template_22"
            },
            "family_template_23": {
                template: "family_template_23"
            },
            "family_template_24": {
                template: "family_template_24"
            },
            "family_template_25": {
                template: "family_template_25"
            },
            "family_template_12": {
                template: "family_template_12"
            }
        },
        enableSearch: false,
        nodeMouseClick: BALKANGraph.action.none,
        mouseScrool: BALKANGraph.action.zoom,
        scaleInitial: BALKANGraph.match.boundary,
        nodeBinding: {
            name_1: "name1",
            name_2: "name2",
            name_3: "name3",
            title_1: "title1",
            title_2: "title2",
            title_3: "title3",
            img_0: "img0",
            img_1: "img1",
            img_2: "img2"
        },
        nodes: [
            { id: "1", tags: ["family_template_24"], name1: "King George VI", name2: "Queen Elizabeth,", title2: "The Queen Mother", img0: "https://balkangraph.com/js/img/f1.png", img1: "https://balkangraph.com/js/img/f2.png" },
            { id: "2", pid: 1, tags: ["family_template_25"], name1: "Prince Philip", name2: "Queen Elizabeth II", title1: "Duke of Edinburgh", img0: "https://balkangraph.com/js/img/f3.png", img1: "https://balkangraph.com/js/img/f5.png" },
            { id: "3", pid: 1, tags: ["family_template_11"], name1: "Princess Margaret", img0: "https://balkangraph.com/js/img/f6.png" },
            { id: "4", pid: 2, tags: ["family_template_31"], name1: "Camila,", name2: "Charles,", name3: "Diana,", title1: "Duchess of Cornwall", title2: "Prince of Wales", title3: "Princess of Wales", img0: "https://balkangraph.com/js/img/f7.png", img1: "https://balkangraph.com/js/img/f8.png", img2: "https://balkangraph.com/js/img/f9.png" },
            { id: "5", pid: 2, tags: ["family_template_11"], name1: "Anne", title1: "Princess Royal", img0: "https://balkangraph.com/js/img/f10.png" },
            { id: "6", pid: 2, tags: ["family_template_11"], name1: "Prince Andrew", title1: "Duke of York", img0: "https://balkangraph.com/js/img/f11.png" },
            { id: "7", pid: 2, pid: 2, tags: ["family_template_11"], name1: "Prince Edward", title1: "Earl of Wessex", img0: "https://balkangraph.com/js/img/f12.png" },
            { id: "8", pid: 4, tags: ["family_template_23"], name1: "Catherine,", name2: "Prince William", title1: "Duchess of Cambridge", title2: "Duch of Cambridge", img0: "https://balkangraph.com/js/img/f13.png", img1: "https://balkangraph.com/js/img/f14.png" },
            { id: "9", pid: 4, tags: ["family_template_22"], name1: "Prince Harry", name2: "Meghan Markle", img0: "https://balkangraph.com/js/img/f15.png", img1: "https://balkangraph.com/js/img/f16.png" },
            { id: "10", pid: 8, tags: ["family_template_12"], name1: "Prince George of Cambridge", img0: "https://balkangraph.com/js/img/f17.png" },
            { id: "11", pid: 8, tags: ["family_template_12"], name1: "Prince Charlotte of Cambridge", img0: "https://balkangraph.com/js/img/f18.png" },
            { id: "12", pid: 8, tags: ["family_template_12"], name1: "Prince Louis of Cambridge", img0: "https://balkangraph.com/js/img/f19.png" }
        ]
    });
};