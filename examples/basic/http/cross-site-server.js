var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,{"Access-Control-Allow-Origin": "http://10-20-0-31.my.micloud.tw"});
  res.end(JSON.stringify({result:'yes'}));
}).listen(8080);
console.log('Server running at port 8080');