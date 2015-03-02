var gulp = require("gulp"),
    stylus = require("gulp-stylus"),
    prefixer = require("gulp-autoprefixer"),
    shell = require("gulp-shell"),
    bower = require('main-bower-files'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter');

gulp.task("stylus", function() {
  return gulp.src("assets/stylesheets/*.styl")
    .pipe(stylus())
    .pipe(prefixer())
    .pipe(gulp.dest('public/styles'));
});

gulp.task('bower', function() {
  jsFilter = filter("**/*.js")
  cssFilter = filter("**/*.css")
  return bower()
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public'))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('public'))
    .pipe(cssFilter.restore())
    .pipe(gulp.dest('public'));
});

gulp.task('minify', function() {
  return gulp.src("public/styles/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("public/styles"));
})

gulp.task("watch", function() {
  gulp.watch(['bower.json', '.bowerrc'], ['bower']);
  gulp.watch("assets/**/*.styl", ["stylus"]);
});

gulp.task("supervisor", shell.task([
  "supervisor --extensions js,jade server.js"
]));

gulp.task("dev", ["bower", "watch", "supervisor"])
gulp.task("build", ["bower", "stylus", "minify"])
