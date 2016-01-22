#!/usr/bin/env node
// This script scans the distribution folder of mdl and collects all the built files.

var pathToPackageRoot = '../';
var mdlPath = 'dist';
var packageFilePath = 'package.js';
var bookmarkName = 'DISTASSETS';
var variableName = 'distAssets';
var fileTypes = ['.js', '.css'];

// Load modules
var fs = require("fs");
var path = require("path");
var getFiles = require('./imports/getFiles.js');

function print (data) {data = data || '';process.stdout.write(data);}
function println (data) {data = data || '';process.stdout.write(data + '\n');}

var matchRegex = new RegExp('\\/\\/\\/>>>>' + bookmarkName + '((.|\\n)*?)\\/\\/\\/<<<<' + bookmarkName + '', 'g');

println('Scanning directory...');
var files = getFiles(path.resolve(__dirname, pathToPackageRoot, mdlPath), fileTypes, getFiles.nonrecursive, fs, path);
println(files.join('\n'));
println(files.length + ' files found.');

var packageFileFullPath = path.resolve(__dirname, pathToPackageRoot, packageFilePath);
var packageFile = fs.readFileSync(packageFileFullPath, {encoding: 'utf8'});
var filesJSON = JSON.stringify(files);
packageFile = packageFile.replace(matchRegex, '///>>>>' + bookmarkName + '\n' + variableName + ' = ' + filesJSON + ';\n///<<<<' + bookmarkName + '');
fs.writeFileSync(packageFileFullPath, packageFile, {encoding: 'utf8'});
