/**
 * component compiler for the [flow type checker](https://flowtype.org/).
 */
const babel = require('babel-core');
const camelcase = require('camelcase');

function compile(src) {
  const options = {
    presets: ['babel-preset-latest'],
    plugins: ['transform-flow-strip-types'],
    sourceMaps: true,
    ast: false,
    minified: false,
  };

  try {
    const { code, map } = babel.transform(src, options);
    return { code, mappings: map.mappings };
  } catch (e) {
    throw e;
  }
}

function getTemplate(name) {
  return `/** @flow */

/**
 * please add your description here...
 * @param {type} name
 * @returns {type}
 * @example
 * 
 */
module.exports = function ${camelcase(name)}() {
   
};`;
}

module.exports = {
  compile,
  getTemplate
};
