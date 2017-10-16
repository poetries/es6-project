import gulp from "gulp";
import gulpif from "gulp-if";
import liveserver from "gulp-live-server";
import args from "./util/args";

//处理服务器的任务
gulp.task("server",(cb) => {
    if (!args.watch) return cb();

    var server = liveserver.new(['--harmony','server/bin/www']); 
    server.start();//启动服务器

    //监听server代码发生代表，浏览器自动刷新
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file) {
        server.notify.apply(server,[file]); 
    })

    //让服务重启
    gulp.watch(['server/routes/**/*.js','server/app.js'],function() {
        server.start.bind(server)();
    })
})