'use strict'
const
	gulp = require('gulp')
	,sourcemaps = require('gulp-sourcemaps')
	,postcss = require('gulp-postcss')
	,less = require('gulp-less')
	,imgmin = require('gulp-imagemin')
	,htmlmin = require('gulp-htmlmin')
	,jsmin = require('gulp-uglify')
	,pump = require('pump')
	,concat = require('gulp-concat')

function mincss() {
	const processors = [
		require('autoprefixer')
		,require('postcss-csso')
		,require('postcss-focus')
	]
	return gulp.src('src/less/*.less')
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.identityMap())
		.pipe(less())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('', {includeContent: false, sourceRoot: 'src/less'}))
		.pipe(gulp.dest('docs/css'))
}

function minhtml () {
	return gulp.src('src/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('docs'))
}

function watchcss() {
	return gulp.watch('src/less/*.less', mincss)
}


function minimg () {
	return gulp.src('src/imgs/*')
		.pipe(imgmin())
		.pipe(gulp.dest('docs/imgs'))
}

gulp.task('minimg', minimg)

function minjs (cb) {
	pump([
		gulp.src('src/js/*.js')
		.pipe(concat('main.js'))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.identityMap())
		.pipe(jsmin())
		.pipe(sourcemaps.write('', {includeContent: false, sourceRoot: 'src/js'})),
		gulp.dest('docs/js')
	],
	cb
	)
}

gulp.task('default', gulp.series(mincss, minhtml, minjs, watchcss))
