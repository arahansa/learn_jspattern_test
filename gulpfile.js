/**
 * Created by jarvis on 2017. 1. 5..
 */

// gulpfile.js
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function() {
    return gulp.src('es2015/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('./', {sourceRoot: '../es2015'}))
        .pipe(gulp.dest('out'));;
});
