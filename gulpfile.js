const
	gulp = require('gulp')
	sourcemaps = require('gulp-sourcemaps')
	postcss = require('gulp-postcss')
	less = require('gulp-less')
	imagemin = require('gulp-imagemin')
	htmlmin = require('gulp-htmlmin')
	jsmin = require('gulp-uglify')
	pump = require('pump')
	// livereload = require('gulp-livereload')

function mincss() {
	const processors = [
		prefix = require('autoprefixer'),
		csso = require('postcss-csso')
	]
	return gulp.src('less/*.less')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.identityMap())
		.pipe(less())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('', {includeContent: false, sourceRoot: 'less'}))
		.pipe(gulp.dest('css'))
		// .pipe(livereload({ start: true }))
}

gulp.task('minhtml', () => {
	return gulp.src('dev/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('prod'));
});

gulp.task(function watchcss() {
	gulp.watch('less/*.less', mincss)
}
)
gulp.task('imgmin', () => {
	return gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('imgs'))
}
)
gulp.task('minjs', function (cb) {
	pump([
		gulp.src('js/*.js'),
		jsmin(),
		gulp.dest('dist')
	],
	cb
	)
})
gulp.task('default', gulp.series(mincss, 'watchcss'))
