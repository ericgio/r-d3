var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = Object.assign(webpackConfig, {
  entry: './examples/index.js',
  output: {
    path: path.resolve('examples'),
    filename: 'package-examples.js',
  },
});
