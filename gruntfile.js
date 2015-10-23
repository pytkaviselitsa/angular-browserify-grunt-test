'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
      browserify: {
        app: {
          // A single entry point for our app
          src: [
                './src/app/js/modules/foo/foo.js',
                './src/app/js/modules/bar/bar.js',
                './src/app/js/index_controller.js',
                './src/app/js/app.js',
                ],
          // Compile to a single file to add a script tag for in your HTML
          dest: './src/app/dest/js/app.js',
        }
      },
      jshint: {
        files: [
            'package.json',
            'gruntfile.js', 
            './src/app/js/*.js', 
            './src/app/js/modules/*/**.js', 
            './src/app/js/common/*/**.js'
            ],
        options: {
          // options here to override JSHint defaults
          globals: {
            console: true,
            module: true
          }
        }
      },
      watch: {
        js: {
          files: ['<%= jshint.files %>'],
          tasks: ['browserify:app']
        }
      }      
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ["browserify:app"]);
};
