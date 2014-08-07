var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat');

gulp.task('css', function() {
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch('css/**/*.styl', ['css']);
});

gulp.task('default', ['css', 'watch']);
