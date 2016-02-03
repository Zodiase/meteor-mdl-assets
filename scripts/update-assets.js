#!/usr/bin/env node
// Alias for update-assets-all.

var all = require('./update-assets-all.js');

function main() {
  all();
}

if (require.main === module) {
  // Direct execution.
  main();
} else {
  // Loaded by another script.
  module.exports = main;
}
