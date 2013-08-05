var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , util = require('util')
  , fs = require('fs')
  , marked = require('marked')
  , partials = require('express-partials')
  , nu = require('nodeutil')
  , log = nu.logger.getInstance('server')
  , mdutil = require('./lib/mdutil')
  , genrss = require('./bin/gen-rss')
  , gensitemap = require('./lib/gen-sitemap')

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

app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/examples', express.static(path.join(__dirname, 'examples')));
app.use('/mdfiles', express.static(path.join(__dirname, 'mdfiles')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

function getMenu(req, res, next){
  if(req.session.menu) {
    log.info('Get menu from session...');
  } else {
    log.info('Reload the menu...');
    req.session.menu = mdutil.getMenu();
  }
  next();
}

app.get('/', getMenu,
  function(req, res){
    var path = 'README.md';
    var txt = fs.readFileSync(path, 'utf-8');
    log.info('Got md: ' + path);
    res.render('index', {
      md: mdutil.md2html(txt)
    });
});

var cache = {};
app.get('/md/:file', getMenu, function(req, res){
  var path = 'mdfiles/' + req.params.file;
  if(!cache[path]) {
    var txt = fs.readFileSync(path, 'utf-8');
    cache[path] = txt;
    log.info('Got md: ' + path);
    res.render('index', {
      md: mdutil.md2html(txt)
    });
  } else {
    log.info('Got md from cache: ' + path);
    res.render('index', {
      md: mdutil.md2html(cache[path])
    });
  }
});

app.post('/flush', getMenu, function(req, res){
  log.warn('Got flush request...');
  cache = {};
  log.info('Done flush...');
  res.render('index', {
    md: 'Flush all cached md files... done.'
  });
});

app.post('/flush/:file', getMenu, function(req, res){
  log.warn('Got flush request of %s', req.params.file);
  delete cache[req.params.file];
  log.info('Done flush %s', req.params.file);
  res.render('index', {md: 'Flush all cached md files... done.'});
});

//TODO: cache it
app.get('/rss', function(req, res) {
  res.end(genrss.toRss());
});

app.get('/sitemap', function(req, res) {
  gensitemap.toSiteMap(function(r){
    res.end(r);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
