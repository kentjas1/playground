module.exports = template = (options) => `
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Bonsai${options.type} } from "@ithaka/bonsai/js/bonsai.${options.type.toLowerCase()}";


class ${options.name} extends PureComponent {
    constructor(props) {
        super(props);
        
        this.overlayID = "${options.name.toLowerCase()}";
    }

    componentDidMount() {
        if(!Bonsai.${options.type}.members.hasOwnProperty(this.overlayID)) {
            new Bonsai${options.type}($(\`#\${this.overlayID}\`));
        }
    }
    
    componentWillUnmount() {
        Bonsai.${options.type}.members[this.overlayID].destroy();
        delete Bonsai.${options.type}.members[this.overlayID];
    }

    render() {
        return (
           <div>Hello, I am ${options.name} Component</div> 
        );
    }
}

${options.name}.propTypes = {};

${options.name}.defaultProps = {};

export default ${options.name};
`;