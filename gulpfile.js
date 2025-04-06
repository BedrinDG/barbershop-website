'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

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

exports.watch = function () {
    gulp.watch('./src/assets/styles/*.less', gulp.series('less'));
};