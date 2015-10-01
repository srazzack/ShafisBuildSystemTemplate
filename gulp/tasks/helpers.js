'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('helpers', [], function() {
    return gulp.src('./app/js/helpers/**/*.php')
    .pipe(gulp.dest(config.dist + '/helpers'))
});