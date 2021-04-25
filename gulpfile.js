let	gulp = require('gulp'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');


gulp.task('css', function(){
	return gulp.src('app/css/**/*.css')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('media', function(){
	return gulp.src('app/imgs/*.+(png|jpg|mp4)')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('script', function(){
	return gulp.src('app/js/**/*.js')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
	return gulp.src('app/js/*')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', function(){
	gulp.watch('app/css/**/*.css', gulp.parallel('css'))
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('script'))
	gulp.watch('app/img/*.+(png|jpg|mp4|webp)', gulp.parallel('media'))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', gulp.parallel('html', 'css', 'js', 'browserSync', 'watch'));


