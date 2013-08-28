var Promise = require("node-promise").Promise
  , request = require('request')

var defered = require("node-promise").defer();

var p = new Promise();

function step1(){
  request({
    url : "http://www.google.com",
    method : "GET"
  },
  function(e,r,d){
    console.log('>>1');
    defered.resolve(d);
  });
}

step1();
defered.then(function(result){
    console.log('>>2');
    console.log('word count:%s', result.length);
  },
  function(err){
    console.log(err);
  }
)
