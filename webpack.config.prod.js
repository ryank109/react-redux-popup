'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = 'source-map';
config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

module.exports = config;
