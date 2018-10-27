const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()

const browser_sync = () => {
	browserSync.init({
    files: ['**/*.html'],
    open: false,
    server: {
      baseDir: "./",
    	index: "index.html"
    }
  })
}

const transpile_js = () => {
	gulp.src('src/javascript/main.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest('./'))
}

const compile_sass = () => {
	return gulp.src('src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({stream: true}))
}

const watch_sass = () => gulp.watch('src/sass/**/*.scss', gulp.series(compile_sass))
const watch_js = () => gulp.watch('src/javascript/**/*.js', gulp.series(transpile_js))

gulp.task('sass', gulp.series(compile_sass))
gulp.task('default', gulp.parallel(watch_sass, watch_js, browser_sync))