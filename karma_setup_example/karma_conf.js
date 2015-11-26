// Karma configuration
// Generated on Tue Nov 24 2015 13:53:30 GMT+0200 (IST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/assets/javascripts/*/*.js',
      'app/assets/javascripts/*.js',
      'spec/javascripts/*_spec.js',
      'spec/javascripts/*/*_spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/assets/javascripts/*.js' : ['coverage'],
      'app/assets/javascripts/*/*.js' : ['coverage']
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};
