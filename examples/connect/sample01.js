var connect = require('connect')
  , http = require('http');

var app = connect();
//使用bodyParser之後，則可以從req中取到body
app.use(connect.bodyParser())
app.use(function(req, res){
  if(req.url == '/hello')
    res.end('Hello from Connect!\n' + JSON.stringify(req.body) || '');
  else
    res.end('Other from Connect!\n');
});

http.createServer(app).listen(3000);
