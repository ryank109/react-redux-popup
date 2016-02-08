var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var VENDOR_DEPENDENCIES = [
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'redux'
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
    main: './app/main.jsx',
    vendor: VENDOR_DEPENDENCIES
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-redux-popup.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      rrp: path.resolve(__dirname, 'app'),
    },
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
      'app'
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
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.react-redux-popup.js"),
    mainCss
  ],

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        include: path.join(__dirname, 'app'),
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
