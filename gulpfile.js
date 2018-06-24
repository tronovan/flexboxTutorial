var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('default', ()=>{
    console.log('run gulp watch instead');
});

gulp.task('watch', ()=>{
    browserSync.init({
        server:{
            baseDir: '.'
        }
    });
    watch('./index.html', ()=>{
        browserSync.reload();
    });
    watch('./styles.css', ()=>{
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ()=>{
    return gulp.src('./styles.css').pipe(browserSync.stream());
});