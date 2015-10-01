'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('php', [], function() {
    return gulp.src('./app/php/**/*.php')
    .pipe(gulp.dest(config.dist + '/php'))
});