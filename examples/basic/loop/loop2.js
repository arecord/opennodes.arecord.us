var request = require('request');

var queue = [
  'http://www.google.com',
  'http://micloud.tw/ch/',
  'http://tw.yahoo.com'
];


queue.forEach(function(v){
  var t0 = new Date().getTime();
  request({
    url: v,
    method: 'GET'
  }, function(e,r,d) {
    var t1 = new Date().getTime();
    if(e) console.log(e);
    console.log('[%s][%s]%s', v, t1-t0, d.substring(0,50));
  });
});

