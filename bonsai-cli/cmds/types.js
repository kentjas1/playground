const colors = require("colors"),
    types = [
        {
            name: "Accessible Notifications",
            value: "Accessible.notifications"
        },
        {
            name: "Accordion Menu",
            value: "Accordionmenu"
        },
        {
            name: "Dropdown",
            value: "Dropdown"
        },
        {
            name: "Dropdown Menu",
            value: "Dropdownmenu"
        },
        {
            name: "Fuzzy Search",
            value: "Fuzzy.search"
        },
        {
            name: "Global Navigation",
            value: "Globalnav"
        },
        {
            name: "Media Query",
            value: "Mediaquery"
        },
        {
            name: "Overlay",
            value: "Modal"
        },
        {
            name: "Off Canvas",
            value: "Offcanvas"
        },
        {
            name: "Sticky Navigation",
            value: "Sticky"
        },
        {
            name: "Tabs",
            value: "Tabs"
        },
        {
            name: "Text Editor",
            value: "Texteditor"
        },
        {
            name: "Tool Tip",
            value: "Tooltip"
        }
    ];

exports.types = types;

exports.listTypes = () => {
    console.log("\nBonsai Components Available");
    console.log("---------------------------");
    // list on separate lines
    types.forEach((type) => {
        console.log(`${type.name}  --  `, colors.green(type.value).bold);
    });
    console.log("\n");
};
