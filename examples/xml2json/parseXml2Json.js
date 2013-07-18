var parser = require('xml2json');

var xml = "<foo>bar</foo>";
var json = parser.toJson(xml); //returns a string containing the JSON structure by default
console.log(json);
