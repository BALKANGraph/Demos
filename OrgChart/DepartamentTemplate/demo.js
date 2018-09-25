window.onload = function () {
    OrgChart.templates.company = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.company.size = [200, 200];
    OrgChart.templates.company.node =
        '<circle cx="100" cy="100" r="100" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></circle>'
        + '<g transform="matrix(3.5,0,0,3.5,20,20)"><circle cx="12" cy="22" r="12" fill="#039BE5"></circle>'
        + '<circle cx="33" cy="14" r="10" fill="#FFCA28"></circle>'
        + '<circle cx="30" cy="32" r="8" fill="#F57C00"></circle></g>';


    OrgChart.templates.department = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.department.size = [330, 50];
    OrgChart.templates.department.node =
        '<rect x="0" y="0" width="330" height="50" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
    OrgChart.templates.department.field_0 = '<text style="font-size: 24px;" fill="#aeaeae" x="165" y="30" text-anchor="middle">{val}</text>';


    OrgChart.templates.staff = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.staff.size = [50, 300];
    OrgChart.templates.staff.node =
        '<rect x="0" y="0" width="50" height="300" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
    OrgChart.templates.staff.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aeaeae" x="150" y="-15" text-anchor="middle">{val}</text>';



    var chart = new OrgChart(document.getElementById("tree"), {
        enableSearch: false,
        scaleInitial: BALKANGraph.match.boundary,
        nodeBinding: {
            field_0: "name"
        },
        tags: {
            "Company": {
                template: "company"
            },
            "Department": {
                template: "department"
            },
            "Staff": {
                template: "staff"
            }
        },
        links: [
            { from: 2, to: 1 },
            { from: 3, to: 1 },
            { from: 4, to: 1 },
            { from: 5, to: 2 },
            { from: 6, to: 2 },
            { from: 7, to: 2 },
            { from: 8, to: 2 },
            { from: 9, to: 2 },
            { from: 10, to: 3 },
            { from: 11, to: 3 },
            { from: 12, to: 3 },
            { from: 13, to: 3 },
            { from: 14, to: 3 },
            { from: 15, to: 4 },
            { from: 16, to: 4 },
            { from: 17, to: 4 },
            { from: 18, to: 4 },
            { from: 19, to: 4 },
        ],
        nodes: [
            { id: 1, tags: ["Company"] },
            { id: 2, tags: ["Department"], name: "Develepment Department" },
            { id: 3, tags: ["Department"], name: "QA Department" },
            { id: 4, tags: ["Department"], name: "Marketing Department" },
            { id: 5, tags: ["Staff"], name: "Elliot Ross" },
            { id: 6, tags: ["Staff"], name: "Anahi Gordon" },
            { id: 7, tags: ["Staff"], name: "Knox Macias" },
            { id: 8, tags: ["Staff"], name: "Nash Ingram" },
            { id: 9, tags: ["Staff"], name: "Sage Barnett" },
            { id: 10, tags: ["Staff"], name: "Alice Gray" },
            { id: 11, tags: ["Staff"], name: "Anne Ewing" },
            { id: 12, tags: ["Staff"], name: "Reuben Mcleod" },
            { id: 13, tags: ["Staff"], name: "Ariel Wiley" },
            { id: 14, tags: ["Staff"], name: "Lucas West" },
            { id: 15, tags: ["Staff"], name: "Adan Travis" },
            { id: 16, tags: ["Staff"], name: "Alex Snider" },
            { id: 17, tags: ["Staff"], name: "Aaliyah Webb" },
            { id: 18, tags: ["Staff"], name: "Janae Barrett" },
            { id: 19, tags: ["Staff"], name: "Lexie Cole" }

        ]
    });
};