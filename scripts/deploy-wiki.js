'use strict';

var path = require('path');
var fs = require('fs-extra');

main();

function main() {
  fs.removeSync ('wiki/.git');
}
