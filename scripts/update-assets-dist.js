#!/usr/bin/env node
// This script scans the distribution folder of mdl and collects all the built files.

var pathToPackageRoot = '../';
var mdlPath = 'dist';
var packageFilePath = 'package.js';
var bookmarkName = 'DISTASSETS';
var variableName = 'distAssets';
var fileTypes = ['.js', '.css'];

var path = require("path");
var update = require('./imports/update.js');

var scanPath = path.resolve(__dirname, pathToPackageRoot, mdlPath);
var packageFileFullPath = path.resolve(__dirname, pathToPackageRoot, packageFilePath);
update(scanPath, fileTypes, update.nonrecursive, packageFileFullPath, bookmarkName, variableName);
