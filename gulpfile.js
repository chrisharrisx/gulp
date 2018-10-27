const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const browser_sync = () => {
	browserSync.init({
    files: ['**/*.js', '**/*.html'],
    open: false,
    server: {
      baseDir: "./",
    	index: "index.html"
    }
  })
}

const compile_sass = () => {
	return gulp.src('src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({stream: true}))
}

const watch = () => gulp.watch('src/sass/**/*.scss', gulp.series(compile_sass));

gulp.task('sass', gulp.series(compile_sass));
gulp.task('default', gulp.parallel(watch, browser_sync));