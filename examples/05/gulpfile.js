var gulp = require('gulp');

var stuck = function(log, cb, time) {
  time = time || 0;

  setTimeout(function() {
    console.log(log);
    if (cb) {
      cb();
    }
  }, time);
};

gulp.task('one', function() {
  stuck('one');
});

gulp.task('two', function(cb) {
  stuck('two', cb, 1000);
});

gulp.task('three', function(cb) {
  stuck('three', cb, 2000);
});

gulp.task('default', ['one', 'two', 'three'], function() {
  console.log('default');
});
