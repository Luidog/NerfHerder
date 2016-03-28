var JSFtp = require("jsftp"),
    path = require('path'),
    configuration = require('./configuration/ftp.configuration');


var Ftp = new JSFtp(configuration.source)

// Ftp.on('jsftp_debug', function(eventType, data) {
//  console.log('DEBUG: ', eventType);
// console.log(JSON.stringify(data, null, 2));
// });



  Ftp.get("/nerfherder/",'source/nerfherder/', function(hadErr){
    if(hadErr)
        console.log(hadErr)
    else
      console.log(complete)
  })



//Ftp.raw.quit(function(err, data) {
//    if (err) return console.error(err);

//    console.log("Bye!");
//});