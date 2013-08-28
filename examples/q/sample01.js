var Q = require('q')
  , request = require('request')
  , queue = ['http://www.google.com','http://micloud.tw','http://tw.yahoo.com'];

var fn = function(url) {
  var deferred = Q.defer();
  request.get(url, function(e,r,d){
    if(e) console.log(e);
    console.log('[%s] word count:%s', url, d.length);
    deferred.resolve();
  });
  return deferred.promise;
};

//透過allResolved，將傳入的function執行完成後，才會進入.then()
Q.allResolved([ fn(queue[0]), fn(queue[1]), fn(queue[2]) ])
  .then(function(){
    console.log('end...')
  })
  .done();

