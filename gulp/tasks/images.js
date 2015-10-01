'use strict';

var config = require('../config');
var path = require('path');
var gulp = require('gulp');
var cache = require('gulp-cache');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var size = require('gulp-size');

// Images
gulp.task('images', function() {
    var dest = config.dist + '/images';
    return gulp.src('app/images/**/*')
	.pipe(changed(dest)) // Ignore unchanged files
	.pipe(imagemin()) // Optimize
	.pipe(gulp.dest(dest));
});


// Images Dist
gulp.task('imagesDist', ['images'], function() {
    return gulp.src(['app/images/**/*'], {base: path.resolve('app')})
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest('dist'))
    .pipe(size())
    .pipe(gulp.dest('dist'));
});
