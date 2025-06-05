const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function () {
  return gulp.src('src/sass/style.scss') // Sass ファイルのパス
    .pipe(sass().on('error', sass.logError)) // Sass のコンパイル
    .pipe(gulp.dest('dist/css')); // 出力先ディレクトリ
});

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', gulp.series('styles')); // ファイルの変更を監視
});

gulp.task('default', gulp.series('styles', 'watch')); // デフォルトタスク