var gulp = require('gulp');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var imagemin = require('gulp-imagemin');
var imageminGifsicle = require('imagemin-gifsicle');
var imageminOptipng = require('imagemin-optipng');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminSvgo = require('imagemin-svgo');

var cssFiles = [
	'./src/css/styles.css',
	'./src/css/styles — header.css',
	'./src/css/styles — block-1.css',
	'./src/css/styles — block-2.css',
	'./src/css/styles — block-3.css',
	'./src/css/styles — block-4.css',
	'./src/css/styles — footer.css',
	'./src/css/media.css',
	'./src/css/styles-slider.css'
];


function style_css() {
	return gulp.src(cssFiles)
		.pipe(concat('all_css.css'))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({level: 2}))
		.pipe(gulp.dest('./dist/css'));

}

function opt_js() {
	return gulp.src('./src/js/js.js')
		.pipe(minify())
		.pipe(gulp.dest('./dist/js'));


}

function opt_img() {
	return gulp.src('src/img/**/*.*')
		.pipe(imagemin(
			[
				imagemin.gifsicle(
					{
						interlaced: true
					}),
				imagemin.optipng(
					{
						optimizationLevel: 3
					}),
				imagemin.mozjpeg(
					{quality: 75, progressive: true}
				),
				imagemin.svgo(
					{
						plugins: [
							{
								removeViewBox: true
							},
							{
								cleanupIDs: false
							}
						]
					})
			]))
		.pipe(gulp.dest('dist/img/'));

}


gulp.task('style_css', style_css);
gulp.task('opt_js', opt_js);
gulp.task('opt_img', opt_img);

gulp.task('default', gulp.series('style_css', 'opt_js', 'opt_img'));
