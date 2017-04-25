var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

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

var VENDOR_DEPENDENCIES = [
  'classnames',
  'react',
  'react-dom'
];

var appCss = new ExtractTextPlugin({ filename: 'example-app.css' });
var appStylePath = path.join(__dirname, '../example-app/styles');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'react-redux-popup': [ path.resolve(__dirname, '../src/index.js'), 'webpack-hot-middleware/client' ] ,
    main: [ path.resolve(__dirname, '../example-app/app/main.jsx'), 'webpack-hot-middleware/client' ],
    vendor: VENDOR_DEPENDENCIES.concat(['webpack-hot-middleware/client'])
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, '../example-app/app'),
      'react-redux-popup': path.resolve(__dirname, '../src'),
      'rrp': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../example-app')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version', 'ie >= 9']
          })
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    appCss
  ],

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        include: [ path.join(__dirname, '../src'), path.join(__dirname, '../example-app/app') ],
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: appStylePath,
        use: appCss.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: appStylePath,
        use: 'file-loader?mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        include: appStylePath,
        use: "file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        include: appStylePath,
        use: "file-loader?mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: appStylePath,
        use: "file-loader?mimetype=application/octet-stream&name=fonts/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        include: appStylePath,
        use: "file-loader&name=fonts/[name].[ext]"
      }
    ],
  }
};
