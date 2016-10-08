var gulp            = require('gulp'),
    watch           = require('gulp-watch')
    webpack         = require('webpack-stream'),
    pump            = require('pump'),
    sass            = require('gulp-sass');

//PARA INSERTAR EL SAILS.IO AL EJS
gulp.task('sails', function(cb){
    pump([
        gulp.src('./assets/js/dependencies/sails.io.js', {ignoreInitial: false}),
        gulp.dest('.tmp/public/js/dependencies')    
    ],
    cb);
});

gulp.task('angular', function(cb){
    pump([
        gulp.src('./components/main.js', {ignoreInitial: false}),
        webpack(require('./config/webpack.config.js')),
        gulp.dest('.tmp/public/js')
        ],
    cb);
});

gulp.task('views:watch', function(){
    return watch('./components/views/**/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('.tmp/public/views'));
})

gulp.task('sass', function(cb) {
    pump([
        gulp.src('./assets/**/*.scss', {ignoreInitial: false}),
        sass().on('error', sass.logError),
        gulp.dest('.tmp/public/css')
    ], cb);
});

gulp.task('sass:materialize', function(cb){
    pump([
        gulp.src('./node_modules/materialize-css/sass/materialize.scss', {ignoreInitial: false}),
        sass().on('error', sass.logError),
        gulp.dest('.tmp/public/css/styles')
    ], cb);
})

gulp.task('sass:watch', function(){
    return watch('./assets/**/*.scss', ['sass']);
});


//MAIN TASK
gulp.task('default', ['sails', 'sass', 'sass:watch', 'angular', 'views:watch', 'sass:materialize']);