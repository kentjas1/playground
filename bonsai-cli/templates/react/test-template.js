const testTemplate = ({ name }) => `
import React from "react";
import { shallow } from "enzyme";
import ${name} from "../${name}";

describe("${name}", () => {
    let props = {},
        component = shallow(<${name} {...props} />);
  
    it("renders correctly", () => {
        expect(component).toMatchSnapshot();
    });
});
`;

module.exports = testTemplate;
