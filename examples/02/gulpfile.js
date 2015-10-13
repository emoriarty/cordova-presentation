var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  csslint = require('gulp-csslint'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify');

gulp.task('styles', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(csslint())
    .pipe(csslint.reporter())
    .pipe(gulp.dest('./css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'))
    .pipe(notify({message: 'Styles task complete'}));
});
