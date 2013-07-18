var request = require('request');

var queue = [
  'http://www.google.com',
  'http://micloud.tw',
  'http://tw.yahoo.com'
];

function main(){
  if(queue.length > 0) {
    fn(queue.pop(), function(){
      main();
    });
  }

  function fn(_this, callback){
    var t0 = new Date().getTime();
    request({
      url: _this,
      method: 'GET'
      }, function(e, r, d){
      if(e) console.log(e);
      var t1 = new Date().getTime();
      console.log('[%s][%s]%s', _this, t1-t0, d.substring(0,50));
      callback();
    });
  }

}

main();
