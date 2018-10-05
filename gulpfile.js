var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var fs = require('fs-extra');
var runSequence = require('run-sequence');
var vueify = require('vueify');

gulp.task('clean', function() {
	fs.emptyDirSync("dist");
});

gulp.task('copy', function() {
	gulp.src(['app/*.html', 'app/img/*'], { base: './app/'})
		.pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
	fs.ensureDirSync('./dist/css/');

	return browserify('./app/src/main.js')
		.transform(vueify)
		.plugin('vueify/plugins/extract-css', {
			out: './dist/css/main.css'
		})
		.bundle()
		.on('error', function(err){
			console.log(err);
			this.emit('end');
		})
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', function() {
	runSequence(['clean'], ['scripts', 'copy'], function() {
		console.log('Complete');
	});
});

gulp.task('default',function() {
	runSequence('clean', ['scripts', 'copy']);
    gulp.watch('app/*',['copy']);
    gulp.watch('app/img/*',['copy']);
    gulp.watch('app/src/*',['scripts']);
});