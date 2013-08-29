var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

//增加req.headers.auth認證
function authfilter(req, res, next){
  if(req.headers.auth == 'demo') 
    next(); //next代表通過此filter
  else
    res.send(401, 'Auth Error!'); //認證錯誤，則回傳statusCode與錯誤訊息
}

//則在routing中可以安插在真正執行route之前
app.get('/users', authfilter, user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
