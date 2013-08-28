var Q = require('q')
  , request = require('request')
  , queue = ['http://micloud.tw','http://www.google.com','http://tw.yahoo.com'];

var fn = function(url) {
  //在function中定義Q.defer()
  var deferred = Q.defer();
  //console.log('start of %s', url);
  request.get(url, function(e,r,d){
    if(e) console.log(e);
    console.log('[%s] word count:%s', url, d.length);
    //如果事件完成，則執行resolve()
    deferred.resolve(d.length);
  });
  return deferred.promise;
};

var out = function (x, y, z) {
  var d = Q.defer();
  console.log('x:%s, y:%s, z:%s', x, y, z);
  d.resolve();
  return d.promise;
};

//透過allResolved，將傳入的function執行完成後
//再使用spread()擷取回傳值，然後才會進入.then()
Q.allResolved([fn(queue[0]), fn(queue[1]), fn(queue[2])])
  .spread(out)
  .then(function(){
    console.log('end...');
  })
  .done();

