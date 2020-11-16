var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var { task, series, src, dest, watch, parallel } = require("gulp");

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function (done) {
    browserSync.reload();
    done();
}));
/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', gulp.series('sass', 'jekyll-build', function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
}));

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */

gulp.task('watch', function () {
    gulp.watch(['*.html', '_layouts/*.html'], gulp.series('jekyll-rebuild'));
    gulp.watch('_scss/**/*.scss', gulp.series('sass'));
    // gulp.watch('*.html', '_layouts/*.html', '_projects/*.md', '_prototypes/*.md', gulp.series('jekyll-rebuild'));
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel('browser-sync', 'watch'));
