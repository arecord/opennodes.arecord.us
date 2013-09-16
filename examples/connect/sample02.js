var connect = require('connect')
  , http = require('http');

var app = connect()
  // enable favicon
  .use(connect.favicon())
  // enable logger
  .use(connect.logger('dev'))
  // enable static content
  .use(connect.static('public'))
  .use(connect.directory('public'))
  // enable body parser
  .use(connect.bodyParser())
  // enable cookie parser
  .use(connect.cookieParser())
  // enable session
  .use(connect.session({ secret: 'my secret here' }))
  .use(function(req, res){
    res.end('Hello from Connect!\n' + JSON.stringify(req.body));
  });

http.createServer(app).listen(3000);
