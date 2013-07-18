var Promise = require("node-promise").Promise
  , request = require('request')

var p = new Promise();

function step1(fn){
  request({
    url : "http://www.google.com",
    method : "GET"
  },
  function(e,r,d){
    console.log('>>1');
    p.resolve(d);
  });
}

step1();
p.then(function(d){
    console.log('>>2');
//    console.log(arguments);
    console.log(d.substring(0,50));
  },
  function(err){
    console.log(err);
  }
)
