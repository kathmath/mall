
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'src/js/*.js',
        dest: 'dist/js/script.min.js'
      },
      dev: {
      	options: {
      		beautify: true,
      		mangle: false,
      		compress: false,
      		preserveComments: 'all'
      	},
      	src: 'src/js/*.js',
        dest: 'js/script.min.js'
      }
    },

    sass: {
    	dev: {
    		options: {
    			outputStyle: 'expanded'
    		},
    		files: {
    			'css/style.css' : 'src/scss/style.scss'
    		}
    	},
    	build: {
    		options: {
    			outputStyle: 'expanded'
    		},
    		files: {
    			'css/style.css' : 'src/scss/style.scss'
    		}
    	}
    },

   // postcss: {
   //  options: {
   //    map: true, // inline sourcemaps
   //    processors: [
   //      require('pixrem')(), // add fallbacks for rem units
   //      require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
   //      require('cssnano')() // minify the result
   //    ]
   //  },
   //  dist: {
   //    src: 'css/*.css'
   //  }
   //  }

  	watch: {
  		js: {
  			files: ['src/js/*.js'],
  			tasks: ['uglify:dev']
  		},
  		css: {
  			files: ['src/scss/**/*.scss'],
  			tasks: ['sass:dev']
  		}
  	},

    htmllint: {
      options: {},
      src: ['*.html'],
    },

    autoprefixer: {
      options: {
          browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },
      main: {
          expand: true,
          flatten: true,
          src: 'css/style.css',
          dest: 'dist/css'
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
  grunt.registerTask('build', ['uglify:build', 'sass:build', 'autoprefixer']);

};

