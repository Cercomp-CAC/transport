module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: "bower_components/bootstrap/dist/css/*",
                        dest: "public/stylesheets",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: "bower_components/bootstrap/dist/js/*",
                        dest: "public/javascripts",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: "bower_components/jquery/dist/*",
                        dest: "public/javascripts",
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
