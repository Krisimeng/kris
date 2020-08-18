// 加载模块
const {task,src,dest,watch,series,parallel} = require('gulp');
// 用于加载其他gulp插件
const load = require('gulp-load-plugins')();
// nodejs的del模块用于删除文件

// 处理图片
task('image', async ()=>{
  src('./native/img/*.*')
  .pipe(dest('./pro/img'))
  .pipe(load.connect.reload())
})

// 处理css
task('css', async ()=>{
  src('./native/css/*.css')
  .pipe(dest('./pro/css'))
  .pipe(load.connect.reload())
})

// 处理js
task('script', async ()=>{
  src('./native/js/*.js')
  .pipe(dest('./pro/js/'))
  .pipe(load.connect.reload())
})

// 处理html
task('html', async ()=>{
  src('./native/*.html')
  .pipe(dest('./pro'))
  .pipe(load.connect.reload())
})

// 监听文件变化
task('watch',async ()=>{
  watch('./native/img/*.*',series('image'));
  watch('./native/css/*.css',series('css'));
  watch('./native/js/*.js',series('script'));
  watch('./native/*.html',series('html'));
})

// 启动服务，自动刷新
task('connect',async ()=>{
  load.connect.server({
    root: './pro',
    livereload: true,
    port: 3000
  });
})

// 构建开发包
task('default',series('image','css','script','html','connect','watch'))