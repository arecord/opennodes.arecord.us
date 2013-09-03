var async = require('async')
  , request = require('request')

var Q = [
  "http://www.google.com",
  "http://micloud.tw",
  "http://tw.yahoo.com"];

async.map(Q, request.get, function(e,result) {
  if(e) console.log(e);
  console.log(result);
});
