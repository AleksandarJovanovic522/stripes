var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css')
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');

//scss to css task
gulp.task('scss', function () {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

//scss lint
gulp.task('scss-lint', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sassLint({
            configFile: '.sass-lint.yml'
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

// iconfont task
gulp.task('iconfont', function () {
    return gulp
        .src('src/svg/*.svg')
        .pipe(iconfontCss({
            fontName: "icons",
            cssClass: "icon",
            path: 'src/iconfont-template/iconfont.scss',
            targetPath: '../../../src/scss/icon-font/_iconfont.scss',
            fontPath: '../../src/assets/fonts/'
        }))
        .pipe(iconfont({
            fontName: 'icons',
            prependUnicode: false,
            formats: ['ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            centerHorizontally: true
        }))
        .pipe(gulp.dest('src/assets/fonts'));
});

gulp.task('default', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series(['scss', 'scss-lint']));
})