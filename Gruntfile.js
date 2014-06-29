module.exports = function(grunt) {

  grunt.initConfig({
    shell: {
      bower: {
        command: 'node_modules/bower/bin/bower install'
      }
    },
    concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/angular/angular.js',
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
    },
    nodemon: {
      dev: {
        script: 'server.js',
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: [ 'public/**/*.css' ],
        tasks: [ 'concat:css' ]
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    express: {
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production',
          background: false
        }
      }
    }
  });

  // Dependencies
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('productionServer', ['express:prod']);
  grunt.registerTask('heroku', ['shell:bower', 'concat', 'uglify']);
  grunt.registerTask('server', ['concurrent']);
};
