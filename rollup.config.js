const svelte = require('rollup-plugin-svelte');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const pkg = require('./package.json');

module.exports = {
  input: 'src/P5Renderer.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'P5Renderer' },
  ],
  plugins: [svelte(), resolve(), commonjs()],
};
