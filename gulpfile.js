'use strict';

var gulp = require('gulp'),
		pug = require('gulp-pug'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		formatHtml  = require('gulp-format-html'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		cleanCSS = require('gulp-clean-css'),
		sourcemaps = require('gulp-sourcemaps'),
		clean = require('gulp-clean');

var path = {
	app: {
		pug: './app/pug/**/*.pug',
		html: './dist/',
		sass: './app/sass/style.sass',
		css: './dist/css/',
		gulpfile: './gulpfile.js',
		js: './dist/js/',
		jsLibs: ['./app/libs/jquery/dist/jquery.min.js', './app/libs/slick-carousel/slick/slick.min.js', './app/libs/jquery-ui/jquery-ui.min.js', './app/libs/fancybox/dist/jquery.fancybox.min.js'],
		cssLibs: ['./app/libs/slick-carousel/slick/slick.css', './app/libs/fancybox/dist/jquery.fancybox.min.css'],
		deleteLibs: ['./app/js/libs.js', './app/css/libs.css']
	}
}

// Compile pug to html
gulp.task('pug', function() {
	return gulp.src(path.app.pug)
	.pipe(pug())
	.pipe(formatHtml())
	.pipe(gulp.dest(path.app.html))
	.pipe(browserSync.reload({stream: true}));
});


// Compile sass to css with autoprefixer
gulp.task('sass', function() {
	return gulp.src(path.app.sass)
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer ({
		overrideBrowserslist: ['last 2 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(path.app.css))
	.pipe(browserSync.reload({stream: true}))
});

// Task for browser-sync | auto-reload
gulp.task('browser-sync', function() { 
	browserSync({
		server: {
			baseDir: './dist/'
		},
		notify: false
	});
});

// Auto reload browser on change js files
gulp.task('scripts', function() {
	return gulp.src(path.app.gulpfile)
	.pipe(browserSync.reload({ stream: true }))
});

// Delete libs files
gulp.task('clean-libs', function () {
	return gulp.src(path.app.deleteLibs)
			.pipe(clean());
});
gulp.task('prod', function () {
	return gulp.src(['./app/**'])
			.pipe(gulp.dest('./dist/'));
});
gulp.task('clean-prod', function () {
	return gulp.src(['./dist/libs/', './dist/sass/', './dist/pug/'])
		.pipe(clean());
});
gulp.task('clean-dist', function () {
	return gulp.src(['./dist/*'])
		.pipe(clean());
});

// Concat js libraries
gulp.task('concat-js', function() {
	return gulp.src(path.app.jsLibs)
	.pipe(concat('libs.js'), { allowEmpty: true })
	.pipe(gulp.dest(path.app.js))
	.pipe(browserSync.reload({stream: true}))
});

// Concat css libraries files
gulp.task('concat-css', function() {
	return gulp.src(path.app.cssLibs)
	.pipe(concat('libs.css'), { allowEmpty: true })
	.pipe(cleanCSS({compatibility: 'ie10'}))
	.pipe(gulp.dest(path.app.css))
	.pipe(browserSync.reload({stream: true}))
});

// Work without auto reload
gulp.task('watch', function () {
	gulp.watch(path.app.sass, gulp.series('sass'))
	gulp.watch(path.app.pug, gulp.series('pug'))
	gulp.watch([path.app.gulpfile, path.app.js], gulp.series('scripts'))
});
// Work with auto reload
gulp.task('start', gulp.parallel('browser-sync', 'watch'));


// 'use strict';

// var gulp = require('gulp'),
// 		pug = require('gulp-pug'),
// 		sass = require('gulp-sass'),
// 		autoprefixer = require('gulp-autoprefixer'),
// 		htmlbeautify = require('gulp-html-beautify'),
// 		browserSync = require('browser-sync'),
// 		concat = require('gulp-concat'),
// 		clean = require('gulp-clean');

// var path = {
// 	// Откуда брать
// 	src: {
// 		pug: './app/pug/pages/*.pug',
// 		sass: ['./app/sass/style.sass'],
// 		js: './app/js/*.js',
// 		jsLibs: ['./app/libs/jquery/dist/jquery.min.js', './app/libs/slick-carousel/slick/slick.min.js', './app/libs/jquery-ui/jquery-ui.min.js'],
// 		cssLibs: ['./app/libs/slick-carousel/slick/slick.css'],
// 		deleteLibs: ['./dist/js/libs.js', './dist/css/libs.css']
// 	},
// 	// Куда компилировать
// 	dist: {
// 		html: './dist/',
// 		css: './dist/css/',
// 		js: './dist/js/',
// 		jsLibs: './dist/js/',
// 		cssLibs: './dist/css/'
// 	}
// }

// var jsfiles = ['./dist/js/*.js', './dist/js/*.js', './gulpfile.js'];

// // Compile pug to html with html-beautify
// gulp.task('pug', function() {
// 	var option = {
//     "indent_size": 2,
//     "indent_char": " ",
//     "indent_level": 0,
//     "indent_with_tabs": false,
//     "preserve_newlines": true,
//     "max_preserve_newlines": 10,
//     "jslint_happy": false,
//     "space_after_anon_function": false,
//     "brace_style": "collapse",
//     "keep_array_indentation": false,
//     "keep_function_indentation": false,
//     "space_before_conditional": true,
//     "break_chained_methods": false,
//     "eval_code": false,
//     "unescape_strings": false,
//     "wrap_line_length": 0,
//     "wrap_attributes": "auto",
//     "wrap_attributes_indent_size": 4,
//     "end_with_newline": false
// 	}
// 	return gulp.src(path.src.pug)
// 	.pipe(pug())
// 	.pipe(htmlbeautify(option))
// 	.pipe(gulp.dest(path.dist.html))
// 	.pipe(browserSync.reload({stream: true}))
// });

// // Compile sass to css with autoprefixer
// gulp.task('sass', function() {
// 	return gulp.src(path.src.sass)
// 	.pipe(sass().on('error', sass.logError))
// 	.pipe(autoprefixer ({
// 		overrideBrowserslist: ['last 2 versions'],
// 		cascade: false
// 	}))
// 	.pipe(gulp.dest(path.dist.css))
// 	.pipe(browserSync.reload({stream: true}))
// });

// // Task for browser-sync | auto-reload
// gulp.task('browser-sync', function() { 
// 	browserSync({
// 		server: {
// 			baseDir: './dist/'
// 		},
// 		notify: false
// 	});
// });

// // Auto reload browser on change js files
// gulp.task('scripts', function() {
// 	return gulp.src(jsfiles)
// 	.pipe(browserSync.reload({ stream: true }))
// });

// // Auto reload browser on change html
// gulp.task('html', function() {
// 	return gulp.src('./dist/*.html')
// 	.pipe(browserSync.reload({ stream: true }))
// });

// // Delete libs files
// gulp.task('delete-libs', function () {
// 	return gulp.src(path.src.deleteLibs)
// 			.pipe(clean());
// });

// // Concat js libraries
// gulp.task('concat-js', function() {
// 	return gulp.src(path.src.jsLibs)
// 	.pipe(concat('libs.js'), { allowEmpty: true })
// 	.pipe(gulp.dest(path.dist.jsLibs))
// });

// // Concat css libraries files
// gulp.task('concat-css', function() {
// 	return gulp.src(path.src.cssLibs)
// 	.pipe(concat('libs.css'), { allowEmpty: true })
// 	.pipe(gulp.dest(path.dist.cssLibs))
// 	.pipe(browserSync.reload({stream: true}))
// });

// // Work without auto reload
// gulp.task('watch', function () {
// 	gulp.watch(path.src.sass, gulp.series('sass'))
// 	gulp.watch(path.src.pug, gulp.series('pug'))
// 	gulp.watch(jsfiles, gulp.series('scripts'))
// });
// // Work with auto reload
// gulp.task('start', gulp.parallel('browser-sync', 'watch'));