'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');

// Clean
gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist/css', 'dist/js', 'dist/images', 'dist/'], {read: false}).pipe(clean());
});
