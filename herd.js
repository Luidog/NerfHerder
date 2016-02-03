'use strict'
 
var walk = require('walk'),
    fs = require('fs'),
    md5File = require('md5-file'),
    walker;
 
  walker = walk.walk("./test");
 
  walker.on("file", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      var hash = md5File(root + "/" + fileStats.name)
      console.log(fileStats.name + " | "+ fileStats.type +" | " + hash)
      next();
    });
  });

    walker.on("directory", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      console.log("Directory -- | -- " + fileStats.name)
      next();
    });
  });
 
  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });
 
  walker.on("end", function () {
    console.log("all done");
  });