var gulp 	= 	require('gulp'),
	jade	=	require('gulp-jade');


	gulp.task('jade', function() {
		return gulp.src('components/jade/**/*.jade')
			.pipe(jade())
			.pipe(gulp.dest('builds/dvelopment'));
	});	

	gulp.task('watch', function() {
		gulp.watch('components/jade/**/*.jade', ['jade']);
	});

	gulp.task('default', ['jade', 'watch']);