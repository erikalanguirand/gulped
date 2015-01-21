var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));
})

gulp.task('default', ['scripts'], function() {
  console.log('love me some gulp');
})
