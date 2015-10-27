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
                    './src/app/dest/js/templates.js',
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
                './src/app/js/common/*/**.js',
                ],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        html2js: {
            options: {
              // custom options, see below
            },
            main: {
                src: ['src/app/js/modules/**/*.html'],
                dest: './src/app/dest/js/templates.js'
            },
        },
        uglify: {
            my_target: {
                files: {
                  'build/js/app.min.js': ['./src/app/dest/js/app.js']
                }
            }
        },
        copy: {
            build: {
                files: [
                    {
                        src: [ './src/app/index.html' ],
                        dest: 'build',
                        expand: true,
                        filter: 'isFile',
                        flatten: true
                    }
                ]
            },
            dev: {
                files: [
                    {
                        src: ['./src/app/dest/js/app.js' ],
                        dest: 'dev',
                        expand: true,
                        filter: 'isFile',
                        flatten: true
                    }
                ]
            },
        },
        watch: {
            js: {
                files: ['<%= jshint.files %>',],
                tasks: ['jshint', 'browserify:app', 'uglify']
            },
            tpls: {
                files: ['<%= html2js.main.src %>'],
                tasks: ['html2js', 'browserify', 'uglify']
            },
            main_html: {
                files: ['./src/app/index.html'],
                tasks: ['copy']
            }
        }      
    });


    // Load the npm installed tasks
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ["jshint", "html2js", "browserify", "uglify", "copy:build", "watch"]);
    grunt.registerTask('dev', ["jshint", "html2js", "browserify", "copy:dev"]);
};
