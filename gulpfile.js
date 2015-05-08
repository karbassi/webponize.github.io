var gulp = require('gulp');

gulp.task('copy', function () {

  gulp.src([
    'bower_components/octicons/octicons/*'
  ]).pipe(gulp.dest('css/octicons'));

  gulp.src([
    'bower_components/primer-css/css/primer.css',
    'bower_components/primer-markdown/dist/user-content.min.css',
    'bower_components/fontawesome/css/font-awesome.min.css'
  ]).pipe(gulp.dest('css'));

  gulp.src([
    'bower_components/fontawesome/fonts/*'
  ]).pipe(gulp.dest('fonts'));

});

gulp.task('build', function () {

  gulp.start('copy');

});