/* File: gulpfile.js */

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync').create(),
    prefix = require('gulp-autoprefixer');




gulp.task('sass', function() {
    return sass('scss/style.scss', {
            style: 'compressed',
        })
        .pipe(plumber())
        .on('error', sass.logError)
        .pipe(prefix('last 3 versions'))
        .pipe(gulp.dest('css'));
});



gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


/*
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        proxy: "localhost:3002",
        online: true
    });


});
*/



//Watches The Project For Changes

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/style.css").on('change', browserSync.reload);



});



gulp.task('default', ['browser-sync', 'sass', 'watch']);
