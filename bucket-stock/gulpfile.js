const gulp = require('gulp');
const babel = require('gulp-babel');
// 1 require pkg
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const flatten = require('gulp-flatten'); // really useful when we have a lot of css file, linking them in one file
const plumber = require('gulp-plumber'); // help with gulp issues
const livereload = require('gulp-livereload'); // it will refresh the page for us

gulp.task('es6', () => {
  return gulp.src('src/**/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('dist'));
});

// 2 Write task
gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(plumber())
  .pipe(flatten())
  .pipe(gulp.dest('dist/css/'))
  .pipe(livereload());
});


gulp.task('default', () =>{
  livereload.listen();
  gulp.watch('src/**/*.js', ['es6']);
  gulp.watch('src/**/*.scss', ['sass']);
});

// 3 Make any change in the style.scss and save.
// 4a Update link style --> index.html
// 4b Update link js --> index.html
// 5 MAKE PARTIALS
  // $ touch src/scss/_variables.scss
