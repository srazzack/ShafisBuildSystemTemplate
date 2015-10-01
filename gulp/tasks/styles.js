'use strict';

var config = require('../config');
var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var fingerprint = require('gulp-fingerprint');
var less = require('gulp-less');
var size = require('gulp-size');
var concat = require('gulp-concat');

// Compile Less
gulp.task('less', function() {
    return gulp.src('app/styles/app.less')
	.pipe(less({
		style: 'expanded',
		loadPath: [config.bower]
	}))
	.pipe(gulp.dest(config.dist + '/css'))
	.pipe(size());
});

// Compile CSS
gulp.task('css', function() {
    return gulp.src(['app/styles/**/*.css'])
	.pipe(concat('style.css'))
	.pipe(gulp.dest(config.dist + '/css'))
});

// Styles Dist
gulp.task('stylesDist', function() {
    return gulp.src('app/styles/app.less')
	.pipe(less({
		style: 'expanded',
		loadPath: [config.bower]
	}))
	.pipe(prefix('last 1 version'))  // add vendor prefixes if necessary
	.pipe(csso())  // minify css
	.pipe(gulp.dest(config.dist + '/css'))
	.pipe(size());
});

gulp.task('map', function() {
    return gulp.src(['app/bower_components/bootstrap-select/dist/css/*.map'])
	.pipe(gulp.dest(config.dist + '/css'));
});