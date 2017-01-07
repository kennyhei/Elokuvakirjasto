module.exports = function (grunt) {

    /* Task configuration */
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {

            dist: {

                src: ['web/app/app.js',
                      'web/app/js/controllers/*.js',
                      'web/app/js/services/*.js'],
                dest: 'web/app/app.min.js'
            },

            options: {
                mangle: false
            }
        },

        endline: {

            dist: {

                src: ['Gruntfile.js', 'package.json', 'web/js/*.js', 'web/**/*.html']
            },

            options: {
                replaced: true
            }
        }
    });

    /* Load tasks */
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-endline');

    /* Register tasks */
    grunt.registerTask('default', ['uglify', 'endline']);
}
