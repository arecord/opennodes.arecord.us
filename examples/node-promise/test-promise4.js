var Promise = require("node-promise").Promise
  , request = require('request')
  , util = require('util')
var url = 'http://odf.micloud.tw/odf/datasets'
var url_detail = 'http://odf.micloud.tw/odf/%s/field';

function step1(url){
  var p = new Promise();
  request({
    url : url,
    method : "GET"
  },
  function(e,r,d){
    if(e) console.log(e);
    p.resolve(JSON.parse(d));
  });
  // 因為p具備可遞延的特性，透過return p可以讓function進行.then()的連續操作
  return p;
}

step1(url)
.then(function(d){
  console.log('Got d:');
  console.log(d);
  for(var i = 0 ; i< d.length ; i++){
    step1(util.format(url_detail, d[i]))
      .then(function(d){
        console.log(d);
      });
  }
})
