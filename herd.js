'use strict'
 
var walk = require('walk'),
    fs = require('fs'),
    md5File = require('md5-file'),
    logger = require("./configuration/winston"),
    walker;
 
walker = walk.walk("./files/0000/SiteTransferFiles/ETMF/");
 
walker.on("file", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      var hash = md5File(root + "/" + fileStats.name);
      logger.verbose(fileStats.name + " | "+ fileStats.type +" | " + hash)
      next();
    });
}); 

walker.on("directory", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      logger.verbose("Directory -- | -- " + fileStats.name)
      next();
  });
});
 
walker.on("errors", function (root, nodeStatsArray, next) {
  next();
});
 
walker.on("end", function () {
  logger.verbose("Finished Walking Directory");
});
