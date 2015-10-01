'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');

// JSHint
gulp.task('jshint', function() {
    return gulp.src('app/js/**/*.js')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(require('jshint-stylish')));
});

var onError = function (err) {
    gutil.beep();
    console.log(err.message);
};