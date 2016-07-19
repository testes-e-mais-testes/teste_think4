module.exports = function(grunt) {

	grunt.initConfig({

		imagemin: {
			// png: {
			// 	options: {
			// 		optimizationLevel: 7
			// 	},
			// 	files: [{
			// 		expand: true,
			// 		cwd: 'img/',
			// 		src: ['*.png'],
			// 		dest: 'dist/img/',
			// 		ext: '.png'
			// 	}]
			// },
			jpg: {
				options: {
					progressive: true,
				},
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['*.jpg'],
					dest: 'dist/img/',
					ext: '.jpg'
				}]
			},
			// gif: {
			// 	options: {
			// 		interlaced: true
			// 	},
			// 	files: [{
			// 		expand: true,
			// 		cwd: 'img/',
			// 		src: ['*.gif'],
			// 		dest: 'dist/img/',
			// 		ext: '.gif'
			// 	}]
			// }
		},

		sass: {
			app: {
				files: [{
					expand: true,
					cwd: 'scss/',
					src: ['style.scss'],
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},

		purifycss: {
			options: {},
			target: {
				src: ['dist/*.html'],
				css: ['dist/css/*.css'],
				dest: 'dist/purestyle.css'
			}
		},

		autoprefixer: {
			options: {
				browsers: [
					"Android 2.3",
					"Android >= 4",
					"Chrome >= 20",
					"Firefox >= 24",
					"Explorer >= 8",
					"iOS >= 6",
					"Opera >= 12",
					"Safari >= 6"
				]
			},
			compile: {
				files: {
					'dist/purestyle.css': 'dist/purestyle.css'
				}
			}
		},

		jade: {
			compile: {
				options: {
					data: {
						pretty: false
					}
				},
				files: [{
					expand: true,
					cwd: 'jade/',
					src: 'index.jade',
					dest: 'dist',
					ext: '.html'
				}]
			}
		},

		watch: {
			
			taskone: {
				files: ['jade/index.jade', 'scss/style.scss'],
				tasks: ['jade', 'sass', 'purifycss', 'autoprefixer', 'imagemin']
			},
// 			test_tasks: {
// 				files: ['source/sass/{,*/}*.{scss,sass}'],
// 				tasks: ['sass', 'purifycss', 'autoprefixer', 'cssmin', 'uglify']
// 			}
		}
		
// 		uglify: {
// 			bower_js_files: {
// 				files: {
// 					'build/js/output.min.js': [
// 						'source/js/modernizr.min.js',
// 						'source/js/jquery.min.js',
// 						'source/js/bootstrap.min.js',
// 						'bower_components/skrollr/dist/skrollr.min.js',
// 						'source/js/main.js',
// 						'source/js/plugins.js'
// 					]
// 				}
// 			}
// 		},

	});

	grunt.loadNpmTasks('grunt-purifycss');
	grunt.loadNpmTasks('grunt-autoprefixer');
// 	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

};