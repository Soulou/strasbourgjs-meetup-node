var gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    prefixer = require("gulp-autoprefixer"),
    shell = require("gulp-shell")

gulp.task("stylus", function() {
  return gulp.src("assets/stylesheets/*.styl")
    .pipe(stylus())
    .pipe(prefixer())
    .pipe(gulp.dest('public/styles'));
});
