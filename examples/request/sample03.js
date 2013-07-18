/**
 * 透過Request做Reverse Proxy
 */
var http = require('http')
  , request = require('request');

//google site url
var url = 'https://sites.google.com/site/';
//google site domain (change to yours)
url += 'simonsumail';

http.createServer(function (req, resp) {
  console.log(req.url);
  if (req.method === 'PUT') {
    req.pipe(request.put(url + req.url))
  } else if (req.method === 'GET' || req.method === 'HEAD') {
    request.get(url + req.url).pipe(resp);
  }
}).listen(80); //ipaddress that the node server host