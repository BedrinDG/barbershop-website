'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
const minify = require('gulp-minify');
const clean = require('gulp-clean');

exports.less = function () {
    return gulp.src('./src/assets/styles/styles.less')
        .pipe(less({
            paths: path.join('less', 'includes')
        }))
        .pipe(concatCss("styles.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/styles'));
}

gulp.task('minify-js', function () {
    return gulp.src(['src/assets/scripts/script.js'])
        .pipe(minify())
        .pipe(gulp.dest('dist/scripts'))
})

exports.watch = function () {
    gulp.watch('src/assets', gulp.series('less', 'minify-js'));
};

