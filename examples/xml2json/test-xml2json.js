var xml2json = require('nodeutil').xml2json
  , fs = require('fs')
  , os = require('os');

fs.readFile('./sample.xml', 'utf-8', function(err, data){
  var json = xml2json.toJson(data/*, 
    {
      sanitize:false, 
      coerce: false,
      object:true,
      trim:true
    }*/); //returns a string containing the JSON structure by default

  console.log(JSON.stringify(json));
});
