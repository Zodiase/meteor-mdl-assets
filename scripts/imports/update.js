var getFiles = require('./getFiles.js');
var fs = require("fs");
var path = require("path");

function print (data) {data = data || '';process.stdout.write(data);}
function println (data) {data = data || '';process.stdout.write(data + '\n');}

function update(scanPath, fileTypes, recursive, packageFilePath, bookmarkName, variableName) {
  println('Scanning directory...');
  var files = getFiles(scanPath, fileTypes, recursive);
  println(files.join('\n'));
  println(files.length + ' files found.');
  var packageFile = fs.readFileSync(packageFilePath, {encoding: 'utf8'});
  var filesJSON = JSON.stringify(files);
  var matchRegex = new RegExp('\\/\\/\\/>>>>' + bookmarkName + '((.|\\n)*?)\\/\\/\\/<<<<' + bookmarkName + '', 'g');
  packageFile = packageFile.replace(matchRegex, '///>>>>' + bookmarkName + '\n' + variableName + ' = ' + filesJSON + ';\n///<<<<' + bookmarkName + '');
  fs.writeFileSync(packageFilePath, packageFile, {encoding: 'utf8'});
}

update.recursive = getFiles.recursive;
update.nonrecursive = getFiles.nonrecursive;

if (require.main !== module) {
  // Loaded by another script.
  module.exports = update;
}
