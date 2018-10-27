// gulp 代码写在这里  这里的代码在 nodejs环境执行

// 引用
let gulp = require('gulp');
let sass = require('gulp-sass');


// 创建任务
gulp.task('byCss',function(){
    
    // 引入路径
    gulp.src('./src/sass/*.scss')
    // 编译处理
    .pipe(sass({outputStyle:'compact'}))
    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'));
});

// 自动化编译  监听文件修改
gulp.task('autoSass',function(){
    // 监听文件修改 如果有修改  执行上面的 byCss 任务
    gulp.watch('./src/sass/*.scss',['byCss']);
});


//压缩CSS
var cssmin=require('gulp-cssmin');

gulp.task('cssmin',function(){
    return gulp.src('src/css/base.css')
               .pipe(cssmin())
               .pipe(gulp.dest('./dist/'));
});

//压缩图片

var imagemin=require('gulp-imagemin');

gulp.task('imagemin',function(){
    return gulp.src('src/images/*')
               .pipe(imagemin())
               .pipe(gulp.dest('./dist/img-min')); 
});

var babel = require('gulp-babel');

gulp.task('babel',function(){
    return gulp.src('src/js/index.js')
               .pipe(babel())
               .pipe(gulp.dest('./src/package')); 
});


//压缩JS
//
var jsmin=require('gulp-uglify');

gulp.task('jsmin',function(){
     gulp.src('src/package/index.js')
              .pipe(jsmin())
              .pipe(gulp.dest('./src/package/'));
});

