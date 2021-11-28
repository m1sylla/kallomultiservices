 //Gulp modules CSS
 const gulp = require('gulp'),
     watch = require('gulp-watch'),
     postCSS = require('gulp-postcss'),
     cssImport = require('postcss-import'),
     cssvars = require('postcss-simple-vars'),
     utilities = require('postcss-utilities'),
     mixins = require('postcss-mixins'),
     autoprefixer = require('autoprefixer'),
     nested = require('postcss-nested'),
     minify = require('gulp-minify-css'),
     browserSync = require('browser-sync').create();

 // Gulp modules js
 const concat = require('gulp-concat'),
     uglify = require('gulp-uglify');

 // Gulp modules Image
 const changedImgDir = require('gulp-changed'),
     imagemin = require('gulp-imagemin');

 //Gulp CSS tasks
 gulp.task('css', function() {
     return gulp.src('./assets/css/styles.css')
         .pipe(postCSS([cssImport(), mixins(), cssvars(), nested(), utilities(), autoprefixer()]))
         .pipe(minify())
         .pipe(gulp.dest('./src/css'));
 });

 //Gulp image tasks
 gulp.task('image', function() {
     return gulp.src('./assets/images/**/*')
         .pipe(changedImgDir('./src/images'))
         .pipe(imagemin())
         .pipe(gulp.dest('./src/images'));
 });

 //Gulp JS tasks
 gulp.task('js', function() {
     return gulp.src('./assets/js/**/*.js')
         .pipe(concat(script.js))
         .pipe(uglify())
         .pipe(gulp.dest('./src/js'));
 });


 // watch task
 gulp.task('default', function() {
     browserSync.init({
         notify: false,
         server: {
             baseDir: "src"
         },
     });

     watch('./assets/css/**/*.css', gulp.series('css', function() {
         browserSync.reload();
     }));
     watch('./assets/images/**/*', gulp.series('image', function() {
         browserSync.reload();
     }));
     watch('./assets/js/**/*', gulp.series('js', function() {
         browserSync.reload();
     }));
     watch('./src/*.html', function() {
         browserSync.reload();
     });
 });