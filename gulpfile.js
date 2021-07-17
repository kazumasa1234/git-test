var gulp = require('gulp');
// var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));

var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    return gulp
        .src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'));
});

// var gulp = require('gulp');
// var webserver = require('gulp-webserver');

gulp.task('default', function() {
    gulp.src('app')
        .pipe(webserver({
            port: 9000,
            livereload: true,

        }));
});


//サンプルコード
// gulp.task("default", function() {
//     return gulp.src('public')
//         .pipe(webserver({
// このした自動リロード　コマンドsでセーブしたらブラウザ更新される
//             livereload: true,
//この下は起動時に自動で起動するかどうか　多分ブラウザ？
//             open: true
//         }));
// });