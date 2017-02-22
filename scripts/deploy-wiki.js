'use strict';

var path = require('path');
var fs = require('fs-extra');
var init = require('git-init')
var shell = require('shelljs');
var obj = JSON.parse(fs.readFileSync('package.json', 'utf8'));

main();

function main() {
  fs.removeSync ('wiki/.git');
  shell.cd("wiki/");
  shell.exec("git init .");
  shell.exec("git add .");
  shell.exec("git commit -m 'Deploy to wiki'");
  shell.exec("git remote add origin " + obj.repository.wiki);
}
