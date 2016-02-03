var fs = require("fs");
var path = require("path");

function getFiles(destPath, extNames, recursive) {
  var dirContents = fs.readdirSync(destPath);
  var resultFiles = [];
  var _filename, _fullpath, _filestat, _dirContents;
  var __filename;
  while (dirContents.length) {
    _filename = dirContents.shift();
    _fullpath = path.join(destPath, _filename);
    _filestat = fs.statSync(_fullpath);
    if (_filestat.isDirectory() && recursive) {
      _dirContents = fs.readdirSync(_fullpath);
      while (_dirContents.length) {
        __filename = _dirContents.shift();
        dirContents.push(path.join(_filename, __filename));
      }
    } else if (_filestat.isFile()) {
      if (extNames.indexOf(path.extname(_filename)) > -1) {
        resultFiles.push(_filename);
      }
    }
  }
  return resultFiles;
}
getFiles.recursive = true;
getFiles.nonrecursive = false;

if (require.main !== module) {
  // Loaded by another script.
  module.exports = getFiles;
}
