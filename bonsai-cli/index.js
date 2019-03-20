#!/usr/bin/env node
const program = require("commander"),
    { version } = require("./package"),
    { listTypes } = require("./cmds/types"),
    createReactComponent = require("./cmds/react/react-component");

program
    .version(version, "-v, --version")
    .command("list")
    .alias("ls")
    .description("List all available Bonsai Components")
    .action(() => {
        listTypes();
    });

program
    .command("react <component>")
    .alias("rc")
    .description("Creates a react component")
    .option("-t, --type [value]", "Bonsai Component")
    .option("-rx, --redux", "Adds redux state tie-in")
    .action((component, args) => {
        createReactComponent(component, args);
    });

program
    .command("vue <component>")
    .alias("vc")
    .description("Creates a Vue component")
    .option("-t, --type [value]")
    .option("-vx, --vuex", "Adds Vuex state tie-in")
    .action(() => {
        console.log("created".cyan)
    });


program.on("--help", () => {
    console.log("\nExamples:");
    console.log("\nReact".bold);
    console.log("  $ bonsai react|rc --type|-t modal --redux|-rx ExampleModal");
    console.log("\nVue".bold);
    console.log("  $ bonsai --type|-t dropdown --vuex|-vx ExampleDropdown");
    console.log("\n");
});

program.parse(process.argv);

if (program.args.length === 0) {
    program.help();
}
