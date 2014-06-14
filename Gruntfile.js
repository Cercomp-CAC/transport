module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: "bower_components/bootstrap/dist/css/*",
                        dest: "public/css",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: "bower_components/bootstrap/dist/js/*",
                        dest: "public/js",
                        flatten: true
                    },
                    {
                        expand: true,
                        src: "bower_components/jquery/dist/*",
                        dest: "public/js",
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
