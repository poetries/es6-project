import gulp from "gulp";
import gulpSequence from "gulp-sequence";

// 让任务按顺序执行 server放到最后执行
gulp.task("build",gulpSequence("clean","css","pages","scripts",["browser","server"]));