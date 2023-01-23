export const copyjs = () => {
   return app.gulp.src(app.path.src.copyjs)
      .pipe(app.gulp.dest(app.path.build.copyjs))
}