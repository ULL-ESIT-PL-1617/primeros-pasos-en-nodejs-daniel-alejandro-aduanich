var gulp = require('gulp');
var ghpages = require('gh-pages');
var gitbook = require('gitbook');

'use strict';

gulp.task('deploy', function(){
	require ('./scripts/deploy-gitbook.js')
	//require ('./scripts/deploy-wiki.js');
});

gulp.task('build', function(cb){
	require ('./scripts/generate-wiki.js');
	require ('./scripts/generate-gitbook.js');
});

gulp.task('serve', function(){

});

gulp.task('default', []);
