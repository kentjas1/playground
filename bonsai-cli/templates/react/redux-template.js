const reduxTemplate = ({ name }) => `
import { connect } from "react-redux";
import ${name} from "../components/${name}";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(${name});
`;

module.exports = reduxTemplate;
