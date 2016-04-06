var gulp       = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('_site/**/*.html', function(e) {
        gulp.src(e.path)
            .pipe(livereload());
    });
})
