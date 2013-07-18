/**
 * Pipe的用法
 */
var request = require('request')
  , http = require('http')
  , url = 'http://micloud.tw'
  , resource = 'https://portal.micloud.tw/images/logo.png';

var server = http.createServer(function (req, resp) {
  if (req.url === '/logo.png') {
    if (req.method === 'PUT') {
      req.pipe(request.put(resource))
    } else if (req.method === 'GET' || req.method === 'HEAD') {
      request.get(resource).pipe(resp)
    } 
  }
}).listen(8000);

