
window.onload = function () { 

    var familyGroupTag = {
        group: true,
        template: "group_grey",
        groupState: BALKANGraph.EXPAND
    };


    var chart = new OrgChart(document.getElementById("tree"), {
        template: "diva",
        scaleInitial: BALKANGraph.match.boundary,
        enableDragDrop: true,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            f1: familyGroupTag,
            f2: familyGroupTag,
            f3: familyGroupTag,
            f4: familyGroupTag,
            f5: familyGroupTag
        },
        nodes: [
            { id: 1, tags: ["f1"], name: "King George VI", img: "https://balkangraph.com/js/img/f1.png" },
            { id: 2, tags: ["f1"], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://balkangraph.com/js/img/f2.png" },
            { id: 3, tags: ["f2"], pid: 2, name: "Prince Philip", title: "Duke of Edinburgh", img: "https://balkangraph.com/js/img/f3.png" },
            { id: 4, tags: ["f2"], pid: 2, name: "Queen Elizabeth II", img: "https://balkangraph.com/js/img/f5.png" },
            { id: 5, pid: 2, name: "Princess Margaret", img: "https://balkangraph.com/js/img/f6.png" },
            { id: 6, tags: ["f3"], pid: 4, name: "Camila", title: "Duchess of Cornwall", img: "https://balkangraph.com/js/img/f7.png" },
            { id: 7, tags: ["f3"], pid: 4, name: "Charles", title: "Prince of Wales", img: "https://balkangraph.com/js/img/f8.png" },
            { id: 8, tags: ["f3"], pid: 4, name: "Diana", title: "Princess of Wales", img: "https://balkangraph.com/js/img/f9.png" },
            { id: 9, pid: 4, name: "Anne", title: "Princess Royal", img: "https://balkangraph.com/js/img/f10.png" },
            { id: 10, pid: 4, name: "Prince Andrew", title: "Duke of York", img: "https://balkangraph.com/js/img/f11.png" },
            { id: 11, pid: 4, name: "Prince Edward", title: "Earl of Wessex", img: "https://balkangraph.com/js/img/f12.png" },
            { id: 12, tags: ["f4"], pid: 7, name: "Catherine", title: "Duchess of Cambridge", img: "https://balkangraph.com/js/img/f13.png" },
            { id: 13, tags: ["f4"], pid: 7, name: "Prince William", title: "Duch of Cambridge", img: "https://balkangraph.com/js/img/f14.png" },
            { id: 14, tags: ["f5"], pid: 7, name: "Prince Harry", img: "https://balkangraph.com/js/img/f15.png" },
            { id: 15, tags: ["f5"], pid: 7, name: "Meghan Markle", img: "https://balkangraph.com/js/img/f16.png" },
            { id: 16, pid: 12, name: "Prince George of Cambridge", img: "https://balkangraph.com/js/img/f17.png" },
            { id: 17, pid: 12, name: "Prince Charlotte of Cambridge", img: "https://balkangraph.com/js/img/f18.png" },
            { id: 18, pid: 12, name: "Prince Louis of Cambridge", img: "https://balkangraph.com/js/img/f19.png" }
        ]
    });
};
