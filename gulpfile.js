var gulp = require("gulp");
var sass = require("gulp-sass");

//复制html
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\vancl"));
	
});

//复制css
gulp.task("copycss",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\vancl\\css"));
	
});
// 复制图片
gulp.task("copyimg",function(){
	gulp.src("img/**/*.{jpg,png}").pipe(gulp.dest("D:\\phpStudy\\WWW\\vancl\\img"));
	
	
});
//复制js
gulp.task("copyjs",function(){
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\vancl\\js"));
	
	
});


//sass编译
gulp.task("scssfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\vancl\\css"));
});

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("img/**/*.{jpg,png}",["copyimg"]);
	gulp.watch("js/*.js",["copyjs"]);
	gulp.watch("css/*.css",["copycss"]);
	gulp.watch("scss/*.scss",["scssfile"]);
	// gulp.watch("php/*.php",["copyphp"]);
});