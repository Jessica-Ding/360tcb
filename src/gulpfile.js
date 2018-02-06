var gulp=require("gulp");
var webserver=require("gulp-webserver");
var livereload=require("gulp-livereload");
gulp.task("reload",function(){
	gulp.arc("src");
	.pipe(webserver({
		livereload:true,
		open:true
	}))
})
