#!/usr/bin/env node
// This script scans the source folder of mdl and collects all the sass files.

var pathToPackageRoot = '../';
var mdlPath = 'src';
var packageFilePath = 'package.js';
var bookmarkName = 'SASSFILES';
var variableName = 'sassFiles';
var fileTypes = ['.scss'];

var path = require("path");
var update = require('./imports/update.js');

var scanPath = path.resolve(__dirname, pathToPackageRoot, mdlPath);
var packageFileFullPath = path.resolve(__dirname, pathToPackageRoot, packageFilePath);
update(scanPath, fileTypes, update.recursive, packageFileFullPath, bookmarkName, variableName);
