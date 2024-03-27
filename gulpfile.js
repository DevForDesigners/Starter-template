const gulp = require('gulp');
const browserSync = require('browser-sync').create();

//watch function
function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./dist/*.css').on('change', browserSync.reload);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

exports.watch = watch;