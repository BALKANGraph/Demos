
window.onload = function () { 
    var chart = new OrgChart(document.getElementById("tree"), {
        template: "olivia",
        enableDragDrop: true,
        nodeMouseClick: BALKANGraph.action.edit,
        scaleInitial: BALKANGraph.match.boundary,
        nodeMenu: {
            details: { text: "Details" },
            edit: { text: "Edit" },
            add: { text: "Add" },
            remove: { text: "Remove" }
        },
        dragDropMenu: {
            addInGroup: { text: "Add in group" },
            addAsChild: { text: "Add as child" }
        },
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
        },
        tags: {
            Directors: {
                group: true,
                groupName: "Directors",
                groupState: BALKANGraph.EXPAND,
                template: "group_grey"
            },
            HRs: {
                group: true,
                groupName: "HR Team",
                groupState: BALKANGraph.COLLAPSE,

                template: "group_grey"
            },
            Sales: {
                group: true,
                groupName: "Sales Team",
                groupState: BALKANGraph.EXPAND,
                template: "group_grey"
            },
            Devs: {
                group: true,
                groupName: "Dev Team",
                groupState: BALKANGraph.EXPAND,
                template: "group_grey"
            }
        },
        nodes: [
            { id: 1, tags: ["Directors"], name: "Billy Moore", title: "CEO", img: "https://balkangraph.com/js/img/2.jpg" },
            { id: 2, tags: ["Directors"], name: "Marley Wilson", title: "Director", img: "https://balkangraph.com/js/img/3.jpg" },
            { id: 3, tags: ["Directors"], name: "Bennie Shelton", title: "Shareholder", img: "https://balkangraph.com/js/img/4.jpg" },

            { id: 4, pid: 1, name: "Billie Rose", title: "Dev Team Lead", img: "https://balkangraph.com/js/img/5.jpg" },

            { id: 5, pid: 1, tags: ["HRs"], name: "Glenn Bell", title: "HR", img: "https://balkangraph.com/js/img/10.jpg" },
            { id: 6, pid: 1, tags: ["HRs"], name: "Blair Francis", title: "HR", img: "https://balkangraph.com/js/img/11.jpg" },

            { id: 7, pid: 1, name: "Skye Terrell", title: "Manager", img: "https://balkangraph.com/js/img/12.jpg" },

            { id: 8, pid: 4, tags: ["Devs"], name: "Jordan Harris", title: "JS Developer", img: "https://balkangraph.com/js/img/6.jpg" },
            { id: 9, pid: 4, tags: ["Devs"], name: "Will Woods", title: "JS Developer", img: "https://balkangraph.com/js/img/7.jpg" },
            { id: 10, pid: 4, tags: ["Devs"], name: "Skylar Parrish", title: "node.js Developer", img: "https://balkangraph.com/js/img/8.jpg" },
            { id: 11, pid: 4, tags: ["Devs"], name: "Ashton Koch", title: "C# Developer", img: "https://balkangraph.com/js/img/9.jpg" },

            { id: 12, pid: 7, tags: ["Sales"], name: "Bret Fraser", title: "Sales", img: "https://balkangraph.com/js/img/13.jpg" },
            { id: 13, pid: 7, tags: ["Sales"], name: "Steff Haley", title: "Sales", img: "https://balkangraph.com/js/img/14.jpg" }
        ]
    });    
};
