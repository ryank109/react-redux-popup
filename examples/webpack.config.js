const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    example1: path.resolve(__dirname, './example1.jsx'),
  },

  output: {
    path: path.resolve(__dirname, '../assets/scripts'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['module', 'main'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
  ],

  optimization: {
    minimize: true,
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        use: 'babel-loader'
      },
    ],
  },
};
