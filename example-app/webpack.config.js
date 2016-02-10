'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var VENDOR_DEPENDENCIES = [
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-redux-popup',
  'redux',
  'webpack-hot-middleware/client'
];

var NODE_ENV = process.env.NODE_ENV;
var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
  build: (env.production || env.staging)
});

var mainCss = new ExtractTextPlugin("main.css");

module.exports = {
  entry: {
    main: ['./example-app/main.jsx', 'webpack-hot-middleware/client'],
    vendor: VENDOR_DEPENDENCIES
  },

  output: {
    path: path.resolve(__dirname, 'example_run'),
    filename: 'example_app.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, 'example-app')
    },
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'example-app',
      '../lib'
    ],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    mainCss,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: 'node_modules',
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'styles'),
        loader: mainCss.extract("css!sass")
      }
    ]
  }
};
