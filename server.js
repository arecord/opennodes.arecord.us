var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , util = require('util')
  , fs = require('fs')
  , marked = require('marked')
  , partials = require('express-partials')
  , nu = require('nodeutil')
  , log = nu.logger.getInstance('server')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(partials());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/examples', express.static(path.join(__dirname, 'examples')));
app.use('/mdfiles', express.static(path.join(__dirname, 'mdfiles')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res){
  var path = 'README.md';
  var txt = fs.readFileSync(path, 'utf-8');
  log.info('Got md: ' + path);
  res.render('index', {md: mkup(txt)});
});


app.get('/md/:file', function(req, res){
  var path = 'mdfiles/' + req.params.file;
  var txt = fs.readFileSync(path, 'utf-8');
  log.info('Got md: ' + path);
  res.render('index', {md: mkup(txt)});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/**
 * Translate markdown text to html
 */
function mkup(txt) {
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (lang === 'js') {
        return highlighter.javascript(code);
      }
      return code;
    }
  });
  return marked(txt);
}