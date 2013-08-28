var Promise = require("node-promise").Promise
  , request = require('request')
var queue = ["http://www.google.com", "http://micloud.tw", "http://tw.yahoo.com"];
var p;// = new Promise();

function step1(url){
  p = new Promise();
  request({
    url : url,
    method : "GET"
  },
  function(e,r,d){
    console.log('>>url:%s', url);
    p.resolve(d);
  });
}

step1(queue[0]);
step1(queue[1]);
// function a() {
//   return p.then(function(d){
//     console.log('word count:%s', d.length);
//   })
// }

// a();