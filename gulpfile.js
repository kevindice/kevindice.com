var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function(){
    return gulp.src('src/*.jade')
      .pipe(jade({
          pretty: true
      }))
      .pipe(gulp.dest('dest/'));
});
