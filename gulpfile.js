var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
gulp.task('default', function() {
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream:true
    }))
});

gulp.task('browser-sync', function(){
  browserSync.init({
    server:{
      baseDir:"./"
    }
  })
})
gulp.task('watch', ['browser-sync', 'sass'] ,function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
