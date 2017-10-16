import gulp from "gulp";
import gulpif from "gulp-if";
import concat from "gulp-concat"; //合并
import webpack from "webpack";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload"; // 自动刷新
import plumber from "gulp-plumber"; // 处理错误
import rename from "gulp-rename"; // 重命名
import uglify from "gulp-uglify"; //压缩
import {log,colors} from "gulp-util";
import args from "./util/args";

//处理js
gulp.task("scripts", () => {
    return gulp.src(["app/js/index.js"]) //打开文件
                .pipe(plumber({
                    errorHandler: function() { //处理错误

                    }
                }))
                .pipe(named()) //重命名
                .pipe(gulpWebpack({ //编译
                    module: {
                        loaders: [{
                            test: /\.js$/,
                            loader: "babel-loader"
                        }]
                    }
                }),null, (err, stats) => {
                    log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                        chunks:false
                      }))
                })
                .pipe(gulp.dest("server/public/js"))//编译好的未压缩的
                .pipe(rename({ //把上一步生成的文件复制一份
                    basename: "cp",
                    extname: ".min.js"
                }))
                .pipe(uglify({ //对上一步压缩
                    compress: {
                        properties: false
                    },
                    output: {
                        "quote_keys": true
                    }
                }))
                .pipe(gulp.dest("server/public/js")) //编译好的压缩的
                .pipe(gulpif(args.watch, livereload()));//监听变动的文件
})