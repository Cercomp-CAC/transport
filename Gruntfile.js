module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'public/js/main.js'
                ],
                dest: 'public/js/production.js'
            },
            css: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'public/css/style.css'
                ],
                dest: 'public/css/build.css'
            }
        },
        uglify: {
            build: {
                src: 'public/js/production.js',
                dest: 'public/js/production.min.js'
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('heroku', ['concat', 'uglify']);
};
