'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');

// JSHint
gulp.task('jscs', function() {
    return gulp.src('app/js/**/*.js')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(jscs('.jscsrc'))
    .pipe(jshint.reporter(require('jshint-stylish')));
});

var onError = function (err) {
    gutil.beep();
    console.log(err.message);
};