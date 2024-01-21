module.exports = function (grunt) {

    grunt.initConfig({

        // For documentation see https://github.com/dciccale/grunt-processhtml
        processhtml: {
            
            options: {
                recursive: false,
                includeBase: 'includes/',
                data: {
                    message: 'Hello world!'
                }
            },
            dist: {

                // for each file in templates/ run the processhtml task
                files: [{
                    expand: true,
                    cwd: 'templates/',
                    src: ['*.html'],
                    dest: 'dist/',
                    ext: '.html'
                }]
                
            }
        },
        watch: {
            scripts: {
              files: ['templates/**/*.html', 'includes/**/*.html'],
              tasks: ['processhtml'],
              options: {
                spawn: false,
              },
            },
          },
    });

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('default', ['processhtml']);

};