const { src, dest, watch, series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
//const postcss = require('gulp-postcss');
//const autoprefixer = require('autoprefixer');
//const cssnano = require('cssnano');

const minify = require('gulp-minify');

const files = { 
    scssPath: 'source/scss/**/*.scss',
    jsPath: 'source/js/**/*.js'
}

function style() {
    return gulp.src(files.scssPath)
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError))
    //.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('public/css'));
}

exports.style = style;

function compressJS () {
  return gulp.src(files.jsPath)
    .pipe(minify({
        ext: {
            min: '.min.js'
        },
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('public/js'))
};

exports.compressJS = compressJS;

function watchTask() {
    browserSync.init({
        server: {
           baseDir: "./source",
           index: "/index.html"
        }
    });
    gulp.watch('source/scss/**/*.scss', style);
    gulp.watch('./public/*.html').on('change',browserSync.reload);
    gulp.watch('source/js/**/*.js').on('change', browserSync.reload);
}

exports.default = series(
    parallel(style, compressJS), 
    watchTask
);














