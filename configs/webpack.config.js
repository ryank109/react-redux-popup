var path = require('path');
var webpack = require('webpack');

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

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    filename: 'react-redux-popup.js',
    library: 'react-redux-popup',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../lib')
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-addons-css-transition-group': {
      root: 'ReactAddonsCssTransitionGroup"',
      commonjs2: 'react-addons-css-transition-group',
      commonjs: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-redux': {
      root: 'ReactRedux',
      commonjs2: 'react-redux',
      commonjs: 'react-redux',
      amd: 'react-redux'
    }
  },

  resolve: {
    alias: {
      rrp: path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src')
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    }),
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
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        include: path.join(__dirname, '../src'),
        use: 'babel-loader'
      }
    ]
  }
};
