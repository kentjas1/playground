const colors = require("colors"),
    fs = require("fs-extra"),
    directory = process.cwd(),
    capitalize = (component) => {
        return component[0].toUpperCase() + component.substring(1, component.length);
    },
    fetchTemplate = (url, options) => {
        return require(url)(options).replace(/^\s+/g, "");
    },
    outputSyncFile = (file, options) => {
        if (!fs.existsSync(file.path)) {
            const output = fetchTemplate(`../../templates/react/${file.template}`, options);
            fs.outputFileSync(file.path, output, (error) => {
                if(error) {
                    throw error;
                }
            });
            console.log("Generated", file.path);
        }
        else {
            console.log("File already exists at this path. Choose another name".red);
        }
    },
    outputComponentFile = (file, options) => {
        if (!fs.existsSync(file.path)) {
            const generatedTemplate = fetchTemplate(`../../templates/react/${file.template}`, options);

            fs.outputFile(file.path, generatedTemplate, (error) => {
                if(error) {
                    throw error;
                }
                console.log(`Component ${options.name} create complete`.cyan);
            });
        }
        else {
            console.log(`Component ${options.name} already exists at this path. Choose another name`.red);
        }
    },
    outputContainerFile = (file, options) => {
        if (!fs.existsSync(file.path)) {
            const generatedTemplate = fetchTemplate(`../../templates/react/${file.template}`, options);

            fs.outputFile(file.path, generatedTemplate, (error) => {
                if(error) {
                    throw error;
                }
                console.log(`Component ${options.name} create complete`.cyan);
            });
        }
        else {
            console.log(`Component ${options.name} already exists at this path. Choose another name`.red);
        }
    };

async function createReactComponent(component, cmd) {
    if(!cmd.type) {
     throw "Unable to create component, missing parameter [type]".red;
    }

    const name = capitalize(component),
        files = {
            test: {
                path: `${directory}/__tests__/${name}.test.jsx`,
                template: "test-template"
            },
            component: {
                path: `${directory}/${name}.jsx`,
                template: "component-template"
            },
            container: {
                path: `${directory}/../containers/${name}.js`,
                template: "redux-template"
            }
        },
        options = {
            name,
            type: cmd.type
        };

    outputSyncFile(files.test, options);

    outputComponentFile(files.component, options);
    if(cmd.redux) {
        outputContainerFile(files.container, options);
    }
}


module.exports = createReactComponent;
