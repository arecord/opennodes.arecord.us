var request = require('request');
var queue = ['http://www.google.com','http://micloud.tw','http://tw.yahoo.com'];

process.nextTick(function fn1(){
  var url = queue.pop();
  console.log('Processing %s...', url);
  var _callee = arguments.callee;
  request.get(url, function(e,r,d){
    if(e) console.log(e);
    console.log('[%s] word count: %s', url, d.length);
    if(queue.length > 0) 
      process.nextTick(_callee); 
  });
}); 
