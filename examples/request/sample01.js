/**
 * 單純的HTTP GET呼叫，其中get的callback，e=error, r=request, d=data
 * error: 封裝錯誤內容
 * request: 封裝呼叫的協定與相關資訊
 * data: 回傳值
 */
var request = require('request');
var url = 'http://micloud.tw';

request.get(url, function(e, r, d){
  if(e) console.log(e);
  console.log(d);
});
