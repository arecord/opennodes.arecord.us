/**
 * 使用restify模組載入http server
 */
var server = require('restify').createServer();

/**
 * 建立一個http get的模組，路由設定為"/hello/:name"
 * 其中:name代表server在req.params中將帶入一個參數叫做name的
 * 
 * callback function的三個參數分別代表：
 * req: http request物件，封裝有http server接收request相關的資訊
 * res: http response物件，封裝有http server要回應request的相關資訊
 * next: http server的流程控制物件，當呼叫next時候，
 * http server將會往下找下一個callback function
 */
server.get('/hello/:name', 
  function (req, res, next) {
    res.send({msg: 'hello ' + req.params.name});
    //res.send()所帶入的參數需要為json格式，否則會出現下面錯誤：
    //{"code":"InternalError","message":"Object.keys called on non-object"}
});

/**
 * 建立一個http head的function，如果您使用curl，可以這樣呼叫：
 * curl -is http://localhost:8080/hello/mark -X HEAD -H 'connection: close'
 */
server.head('/hello/:name', 
  function (req, res, next) {
    res.send({msg: 'hello ' + req.params.name});
});

/**
 * 實際上啟動server，listen在8080 port的動作
 */
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});