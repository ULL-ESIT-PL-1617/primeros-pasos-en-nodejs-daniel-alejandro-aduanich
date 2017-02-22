var ghpages = require('gh-pages');
var fs = require('fs-extra');
console.log("Deploy GitBook on Github");

var repository = JSON.parse(fs.readFileSync('package.json', 'utf8')).repository.url;

ghpages.publish("./gh-pages", { 
   repo: repository, 
   logger: function(m) { 
      console.error(m); 
      
   } 
   
});
