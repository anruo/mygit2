var gulp = require("gulp");

//压缩css
var minifyCss = require('gulp-minify-css');
gulp.task('cssTask', function(){
	gulp.src('css/dafeiji.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});

//压缩js
var babel = require('gulp-babel'); //es6转es5
var uglify = require('gulp-uglify'); //js压缩插件
var bom = require('gulp-bom'); //解决中文乱码插件

gulp.task('jsTask', function(){
	gulp.src('js2/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(bom()) 
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});

gulp.task('default',['cssTask','jsTask']);