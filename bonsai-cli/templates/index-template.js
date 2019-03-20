const indexTemplate = ({ name }) => `export { default } from './${name}';`;

module.exports = indexTemplate;
