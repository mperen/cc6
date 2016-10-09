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

gulp.task('sass', function(){
    return gulp.src('./assets/**/*.scss', {ignoreInitial: false})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.tmp/public/css'))
});


gulp.task('sass:watch', function(){
    gulp.watch('./assets/**/*.scss', ['sass'])
});

gulp.task('material:css', function(cb){
    pump([
        gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.css', './node_modules/bootstrap/dist/css/bootstrap.css.map'], {ignoreInitial: false}),
        gulp.dest('.tmp/public/css/styles')    
    ],
    cb);
})

gulp.task('material:js', function(cb){
    pump([
        gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.js'], {ignoreInitial: false}),
        gulp.dest('.tmp/public/js')    
    ],
    cb);
})

gulp.task('material:fonts', function(cb){
    pump([
        gulp.src(['./node_modules/bootstrap/dist/fonts/*'], {ignoreInitial: false}),
        gulp.dest('.tmp/public/css/fonts')    
    ],
    cb);
})

gulp.task('images', function(cb){
    pump([
        gulp.src(['./assets/images/*', './node_modules/bootstrap/dist/css/bootstrap.css.map'], {ignoreInitial: false}),
        gulp.dest('.tmp/public/images')    
    ],
    cb);
})



//MAIN TASK
gulp.task('default', ['sails', 'sass:watch', 'angular', 'views:watch', 'material:css', 'material:js', 'images', 'material:fonts']);