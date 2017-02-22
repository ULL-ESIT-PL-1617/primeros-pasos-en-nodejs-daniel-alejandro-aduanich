var gulp = require('gulp');
var ghpages = require('gh-pages');
var path = require('path');


gulp.task('gh-pages', function(){
	ghpages.publish(path.join(__dirname, '_book'), {
    message: 'Auto update gh-pages branch'
  }, function(err) {});
});

gulp.task('default', ['gh-pages' ]);
