const gulp = require('gulp');

gulp.task('clean', () => require('del')('dist'));
gulp.task('copy', () => gulp.src(['package.json', 'package-lock.json', 'README.md']).pipe(gulp.dest('dist')));

gulp.task('uglify', () => {
  const uglify = require('gulp-uglify');
  return gulp.src('dist/**/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
});

gulp.task('prebuild', gulp.series('clean', (done) => done()));
gulp.task('postbuild', gulp.series('copy', 'uglify', (done) => done()));