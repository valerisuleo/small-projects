// 1
const gulp = require('gulp');
const babel = require('gulp-babel');

// 1 require pkg
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const flatten = require('gulp-flatten'); // really useful when we have a lot of css file, linking them in one file
const plumber = require('gulp-plumber'); // help with gulp issues
const livereload = require('gulp-livereload'); // it will refresh the page for us
// const audiosprite = require('gulp-audiosprite');


gulp.task('es6', () => {
  // gulp.src finds all the src file that we wanna use for this task.
    // It will look inside the src folder/ then in every single folder/ and every file with the extension .js
  return gulp.src('src/**/*.js')
  // get all the info from the line above and send them into this 'black box' called babel
  .pipe(babel({
    presets: ['es2015'] // this is the style of js that I want you to convert
  }))
  .pipe(gulp.dest('dist')); // finally send everything to the dist folder
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

////////////////////////////////////////////////////////////////////////////////
// gulp.task('audiosprite', function() {
//   gulp.src('./src/sounds/*.wav')
//     .pipe(audiosprite({
//       format: 'howler'
//     }))
//     .pipe(gulp.dest('build/sounds'));
// });
////////////////////////////////////////////////////////////////////////////////

// $ gulp es6. If does not work run $ npm i -g gulp-cli

// Rather than update this command ($ gulp es6) every time we make a change, we want to make it WATCH
  // Let's write e second task:
gulp.task('default', () =>{
  livereload.listen();
  // it watch now for any change in our js folder and when it see it runs the task ['es6']
  gulp.watch('src/**/*.js', ['es6']);
  gulp.watch('src/**/*.scss', ['sass']);
});
