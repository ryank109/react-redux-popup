var webpack = require('webpack');
var path = require('path');

var srcDir = path.resolve(__dirname, '../src');
var nodeModulesDir = path.resolve(__dirname, '../node_modules');

module.exports = function(config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'test-config.js'
    ],

    preprocessors: {
      'test-config.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: ['dots', 'junit', 'coverage'],
    junitReporter: {
      outputDir: path.join(__dirname, '../test-reports'),
      outputFile: 'test-results.xml',
      useBrowserName: false
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$|\.jsx$/, loader: 'babel' }
        ],
        preLoaders: [
          {
            test: /\.js$|\.jsx$/,
            include: srcDir,
            loader: 'isparta'
          }
        ]
      },
      resolve: {
        alias: {
          rrp: srcDir
        },
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: [ nodeModulesDir, srcDir ],
        root: path.join(__dirname, '../')
      }
    },
    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
      type: 'html',
      dir: '../test-reports/coverage/',
      subdir: function(browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      }
    }
  });
};
