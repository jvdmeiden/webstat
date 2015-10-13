// Utility to convert GeoLite2-City-Locations-XX.csv to JSON
//
// Author: Jan van der Meiden
// Copyright (c) 2015 Jan van der Meiden
// Copying and distribution of this file, with or without modification,
// are permitted in any medium without royalty provided the copyright
// notice and this notice are preserved.
//
// Fields in the 'internet' csv:
// Antigua and Barbuda;AG;ATG;28;ISO 3166-2:AG
// 0 Name
// 1 2-letter code
// 2 3-letter code
// 3 Numeric code
// something regarded noise... 

var    path = require('path'),
  fs = require('fs');
var filename = path.join(process.cwd(), process.argv[2]);
fs.readFile( filename, 'utf8', function (err,data) {
  var list = new Object();
  lines=data.split('\n')
  lines.forEach(function (val, index, array) {
    attr=lines[index].split(';');
    if (attr[1]!=null){
       list[attr[3].toString()]={"id" : attr[0], 
       "alfa2" : attr[2],
       "name" : attr[1]};
    };
  })
  console.log(JSON.stringify(list));
});
