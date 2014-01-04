var gulp   = require('gulp')
  , myth   = require('gulp-myth')
  , concat = require('gulp-concat');

gulp.task('build', function() {

  gulp.src('css/style.css')
    .pipe(myth())
    .pipe(concat('style.build.css'))
    .pipe(gulp.dest('css'));

});

gulp.task('default', function() {
  gulp.run('build');
});
