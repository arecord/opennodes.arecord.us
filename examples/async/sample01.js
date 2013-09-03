var async = require('async')
  , request = require('request')

var Q = [
  "http://www.google.com",
  "http://micloud.tw",
  "http://tw.yahoo.com"];

//測試function，傳入一個參數，一個function
function test(a,fn) {
  //中間的log訊息與callback function接收無關，純Debug用
  console.log(a);
  //最終只有function內容會出現在result中
  fn(null, 'xyz', a + '>>');
}

//同步的執行test function，在此會將Q內容循序傳入，並整合的接收結果到result
async.map(Q, test, function(e,result) {
  if(e) console.log(e);
  console.log(result);
});
