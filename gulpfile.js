var gulp = require('gulp');
var ghpages = require('gh-pages');
var path = require('path');
var gitbook = require('gitbook');

'use strict';

gulp.task('deploy', function(){
	ghpages.publish(path.join(__dirname, '_book'), {
    message: 'Auto update gh-pages branch'
  }, function(err) {});
	require ('./scripts/deploy-wiki.js');
});

gulp.task('build', function(cb){
	require ('./scripts/generate-wiki.js');
	require ('./scripts/generate-gitbook.js');
});

gulp.task('serve', function(){

});

gulp.task('default', []);
