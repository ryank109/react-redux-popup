var webpack = require('webpack');
var path = require('path');

var srcDir = path.resolve(__dirname, '../src');
var nodeModulesDir = path.resolve(__dirname, '../node_modules');

var moduleConfig = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'test-config.js'
    ],

    preprocessors: {
      '../src/**/*': [ 'webpack', 'sourcemap' ],
      'test-config.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: ['dots', 'junit'],
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
    }
  });
};

// moduleConfig.preprocessors = {};
// moduleConfig.preprocessors['src/**/*'] = [ 'webpack', 'sourcemap' ];
// moduleConfig.preprocessors['test-config.js'] = [ 'webpack', 'sourcemap' ];

module.exports = moduleConfig;
