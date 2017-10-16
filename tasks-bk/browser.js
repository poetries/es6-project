import gulp from "gulp";
import gulpif from "gulp-if";
import gulpil from "gulp-util";
import args from "./util/args";

gulp.task("browser",(cb)=> {
    if (!args.watch) return cb();

    //监听变化来执行任务
    gulp.watch("app/**/*.js",["scripts"]); 
    gulp.watch("app/**/*.ejs",["pages"]);
    gulp.watch("app/**/*.css",["css"]);
});