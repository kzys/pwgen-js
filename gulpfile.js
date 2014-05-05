var gulp = require('gulp')
var istanbul = require('gulp-istanbul')
var mocha = require('gulp-mocha')

gulp.task('cover', function (callback) {
    gulp.src('pwgen.js').pipe(istanbul()).on('end', callback)
})

gulp.task('test', ['cover'], function () {
    gulp.src('test/*.js').pipe(mocha()).pipe(istanbul.writeReports())
})