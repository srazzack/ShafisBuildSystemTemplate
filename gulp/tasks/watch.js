'use strict';

var gulp = require('gulp');

// Watch
gulp.task('watch', ['jshint'], function() {

    // Watch for changes in `app` folder
    gulp.watch([
        // 'app/jade/**/*.jade',
        'app/*.html',
        'app/scss/**/*.scss',
        'app/js/**/*.js',
        'app/helpers/**/*.php',
        'app/images/**/*',
        '.tmp/**/*'
    ]);

    gulp.watch('app/**/*.html', ['html', 'css', 'browserify']);
    gulp.watch('app/**/*.php', ['helpers']);
    gulp.watch('app/styles/**/*.less', ['less']);
    gulp.watch('app/styles/**/*.css', ['css']);
    gulp.watch('app/js/**/*.js', ['jshint', 'jscs', 'browserify']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('app/jade/**/*.jade', ['jade']);
});