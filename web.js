//#!/usr/bin/env node
var fs = require('fs')
  , http = require('http')
  , util = require('util')
  , p = require('commander')
  , _ = require('underscore')
  , pkginfo = JSON.parse(fs.readFileSync(__dirname + '/package.json'))
  , ver = pkginfo.version
  , logger = require('./lib/logger')
  , map = require('./lib/mapping')
  , log = logger.logger;

p.version(ver)
  .option('-i, --host address <ip>', 'Specific host, like 192.168.1.1, default is all ip listened')
  .option('-p, --port <port>', 'Specific port, like 80,3000,8080, default is 1337')
  .option('-l, --loglevel <loglevel>', 'Specific log level, generally like: FATAL, ERROR, WARN, INFO, DEBUG, TRACE')
  .option('-a, --allow <allow file type>', 'Specific the allowed file types that seprate by ",", default is all', list)
  .option('-d, --deny <deny file type>', 'Specific the denied file types that seprate by ",", default is none', list)
  .parse(process.argv);

function list(val) {
  return val.split(',');
}

var port = p.port || 3000 
  , host = null
//  , host = p.host || '0.0.0.0'
  , allow = p.allow || ''
  , deny = p.deny || ''
  , loglevel = p.loglevel||process.env['LOG_LEVEL']||'INFO';

/* setup log level */
log.setLevel(loglevel);

/* Server configures */
var server = http.createServer(function (req, res) {
  var path = req.url;
  //to prevent chinese path problem
  log.debug('Path ori: %s', path);
  path = decodeURI(path);
  log.debug('Path after: %s', path);
  path = path.split('?')[0];
  log.trace('Got request path: %s', path);
  //Reformat file location
  log.trace('path = %s, endsWith test = %s', path, path.endsWith('/'));
  if (path.endsWith('/')) {
    var oripath = path;
    path += 'index.html';
    log.trace('Reformat path from %s to %s', oripath, path);
    res.writeHead(302, { 'Location': path });
    res.end();
  }

  //Get content
  if(isAllowedFile(path)) {
    path = '.' + path;
    var type = path.split('.')[path.split('.').length -1];
    try{ 
      log.trace('Reading file from %s', '.' + path);
      var f = fs.readFileSync(path);
      logger.record(req, res);
      var mime = map.getMime(type);
      log.trace('path=%s, type=%s, mime=%s', path, type,  mime);
      if(mime)
        res.writeHead('200', {'Content-Type': mime});
      res.end(f);
    } catch(e) {
      if(path.endsWith('.ico')) {
        log.trace('ico not found, use default...');
        var f = fs.readFileSync(__dirname + '/noder.png');
        logger.record(req, res);
        res.end(f);
      } else if(e.code == 'EISDIR') { 
        var stat = fs.statSync(path);
        if(stat.isDirectory()) {
          log.trace('path:%s is a dir, look for index page...', path);
          path = path + (path.endsWith('/') ? '':'/') + 'index.html';
          res.writeHead(302, { 'Location': path });
          res.end();
        }
      } else { 
        res.statusCode = 404;
        logger.record(req, res);
        log.trace(e);
        log.error('Error %s the path:%s, error code:%s', e.syscall, e.path, e.code);
        res.end(
          mergeTemplate(
            __dirname+'/pages/error.html', 
            '<h1>404 Page Not Found</h1><p>'+e+'</p>')
        );
      }
    }
  } else {
    logger.record(req, res);
    res.statusCode = 301;
    res.end('NOT-ALLOWED-FORMAT');
  }
});

function mergeTemplate(tpl, msg){
  var out = util.format(fs.readFileSync(tpl, 'utf-8'), msg);
  return out;
}

function isAllowedFile(path){
  if(path.indexOf('/..') == 0){
    log.error('Cannot cross folder query...');
    return false;
  }
  var arr = path.split('.');
  var fileType = arr[arr.length-1];
  log.trace('Got fileType:%s', fileType);
  if( allow ){
    if( _.indexOf(allow, fileType) >=0 ) {
      log.trace('By pass by allow rule.');
      return true;
    } else {
      return false;
    }
  }  

  if( deny ) {
    if(  _.indexOf(deny, fileType) >=0 ) {
      log.trace('Filtered by deny rule.');
      return false;
    } else {
      return true;
    }
  }  
  
  return true;
}

if(host)
  server.listen(port, host);
else
  server.listen(port);

/* Noder default startup messages */
log.info('Noder version: %s', ver);
//permission messages 
if(allow) log.trace('Got allowed setting:%s', allow);
if(deny) log.trace('Got denied setting:%s', deny);
log.info('Server running at http://%s:%s/', host, port);
log.info('Using log level: %s (If you want to change, try "export LOG_LEVEL=INFO" in linux or "set LOG_LEVEL=INFO" in windows)', loglevel);

//TODO: intefrage into nodeutil
String.prototype.endsWith = function (s) {
  return this.length >= s.length && this.substr(this.length - s.length) == s;
}


