//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano");
//创建任务（发布任务）
gulp.task("hello",function(){
	console.log("hello world");
})
//编译sass
gulp.task("sass",function(){
	return gulp.src("src/sass/*.scss").pipe(sass({style : "expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})
//监听任务
gulp.task("watch",function(){
	gulp.watch("src/sass/*.scss",["sass"]);
})
