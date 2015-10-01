'use strict';

var gulp = require('gulp');

// Build
gulp.task('dist', ['html', 'css', 'less', 'php', 'helpers', 'libs', 'stylesDist', 'map', 'vendor', 'browserify', 'images'], function() {
    return gulp.src(['.tmp/**/*'], {base: '.tmp'})
	.pipe(gulp.dest('dist'))
});