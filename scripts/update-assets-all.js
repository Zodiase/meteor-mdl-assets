#!/usr/bin/env node
// A batch call for all asset updates.

var dist = require('./update-assets-dist.js'),
    misc = require('./update-assets-misc.js'),
    sass = require('./update-assets-sass.js');

function main() {
  dist();
  misc();
  sass();
}

if (require.main === module) {
  // Direct execution.
  main();
} else {
  // Loaded by another script.
  module.exports = main;
}
