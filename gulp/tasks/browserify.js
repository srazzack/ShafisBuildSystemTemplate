'use strict';

var browserify = require('browserify');
var config = require('../config');
var stringify = require('stringify');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var debug = require('gulp-debug');
var minifycss = require('gulp-minify-css');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var mainBowerFiles = require('main-bower-files');
var source = require('vinyl-source-stream');

var libs = [
	'jquery',
	'lodash'
];

// Vendor
gulp.task('vendor', function() {
    return browserify()
	.require('jquery')
	.require('lodash', {expose: 'underscore'})
	.bundle({debug: true})
	.pipe(source('vendor.js'))
	.pipe(gulp.dest(config.dist + '/js/'));
});


// grab libraries files from bower_components, minify and push to dist
gulp.task('libs', function() {
    var jsFilter = gulpFilter('*.js');
    var cssFilter = gulpFilter('*.css');
    var imgFilter = gulpFilter('*.png');
    var swfFilter = gulpFilter('*.swf');
    var phpFilter = gulpFilter('*.php');
    var fontFilter = gulpFilter(['*.eot', '*.woff', '*.svg', '*.ttf']);

    return gulp.src(mainBowerFiles({debugging:true}))

	// grab vendor js files from bower_components, minify and push to dist
	.pipe(jsFilter)
	.pipe(concat('libs.js'))
	.pipe(gulp.dest(config.dist + '/js/vendor'))
	// .pipe(uglify())
	// .pipe(rename({ suffix: ".min" }))
	.pipe(jsFilter.restore())

	// grab vendor css files from bower_components, minify and push to dist
	.pipe(cssFilter)
	// .pipe(minifycss())
	// .pipe(rename({ suffix: ".min" }))
	.pipe(gulp.dest(config.dist + '/css'))
	.pipe(cssFilter.restore())

	// grab vendor img files from bower_components, push to dist
	.pipe(imgFilter)
	.pipe(gulp.dest(config.dist + '/images'))
	.pipe(imgFilter.restore())

	// grab vendor swf files from bower_components, push to dist
	.pipe(swfFilter)
	.pipe(gulp.dest(config.dist + '/swf'))
	.pipe(imgFilter.restore())

	// grab vendor php files from bower_components, push to dist
	.pipe(phpFilter)
	.pipe(gulp.dest(config.dist + '/php'))
	.pipe(imgFilter.restore())

	// grab vendor font files from bower_components and push in to dist
	.pipe(fontFilter)
	.pipe(flatten())
	.pipe(gulp.dest(config.dist + '/fonts'))
	.pipe(fontFilter.restore())
});


// Browserify
gulp.task('browserify', function() {
    return browserify('./app/js/main.js')
	.external(libs)
	.transform(stringify({
        extensions: ['.html'], minify: true
      })) // Transform to allow requireing of text files
	.bundle() // can add {debug: true}
	.pipe(source('main.js'))
	.pipe(gulp.dest(config.dist + '/js/'));
});

// Script Dist
gulp.task('scriptDist', function() {
    return gulp.src(['dist/js/*.js'], {base: 'dist'})
	.pipe(gulp.dest('dist'))
	.pipe(rev())
	.pipe(gulp.dest('dist'))
	.pipe(rev.manifest())
	.pipe(rename('script-manifest.json'))
	.pipe(gulp.dest('dist'));
});
