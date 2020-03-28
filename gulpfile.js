var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var compass = require('gulp-compass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var babel_core = require('babel-core');
var babel = require('gulp-babel');



var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// ============================================================================
//  Main Tasks
// ============================================================================

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Default task is build
gulp.task('default', ['build']);

// Development task (watch alias)
gulp.task('dev', ['watch']);

// Build task
gulp.task('build', ['clean'], function() {
    gulp.start(['styles', 'scripts', 'images']);
});

// Styles task
gulp.task('styles', function() {
    return gulp.src([
            // './assets/sass/lontv-styles.scss'
            './public/static/sass/*.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(compass({
            config_file: './public/static/sass/config.rb',
            css: './public/static/css',
            sass: './public/static/sass'
        }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/static/css/'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('scripts', function() {
    return gulp.src([
            // './node_modules/micromodal/dist/micromodal.min.js',    
            './public/static/vendors/micromodal/dist/micromodal.js',
            './public/static/js/tciiapp-js.js'                            
        ])
        
        .pipe(concat('tciiapp-js.dist.js'))
        // .pipe(uglify())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/static/dist/js/'))
        .pipe(browserSync.reload({stream:true}));
});

//Images
gulp.task('images', function() {
    return gulp.src('./public/static/images/*/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./public/static/dist/images/'));
});

// ============================================================================
//  Build Tasks
// ============================================================================

/**
 * Clean directories
 *
 * @since 0.1.0
 */
gulp.task('clean', function() {
    del([
        './public/static/css/*.css',
        '!./public/static/css/font-awesome.min.css',
        './public/static/js/*.dist.js'
    ]);
});

// END BUILD

// ============================================================================
//  Dev Tasks
// ============================================================================

/**
 * Execute tasks when files are change and live reload web page, and servers
 *
 * @since 0.1.0
 */
gulp.task('watch', function() {
    gulp.watch('./public/static/sass/**/*.scss', ['styles']);    
    gulp.watch('./public/static/js/*.js', ['scripts']);
    gulp.watch('./public/static/images/*', ['images']);
    gulp.watch("*.html", ['bs-reload']);
});
