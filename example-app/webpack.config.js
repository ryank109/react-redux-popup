'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    main: ['./main.jsx', 'webpack-hot-middleware/client']
  },

  output: {
    path: path.resolve(__dirname, 'example_run'),
    filename: 'example_app.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      app: __dirname,
      rrp: path.resolve(__dirname, '../src'),
      'react-redux-popup': path.resolve(__dirname, '../src')
    },
    root: path.join(__dirname, ''),
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    mainCss,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
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
