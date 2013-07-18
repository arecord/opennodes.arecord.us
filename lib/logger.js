var log4js = require('log4js');
var logger = log4js.getLogger();
var cfg = {
  appenders: [
    { type: 'console' }
  ]
}

log4js.configure(cfg);

exports.logger = logger;

var Logger = {
  CLF: '"%h %l %u %t \"%r\" %>s %b"',
  SharedCombined: '%{Host}i %h %l %u %t "%r" %s %b "%{Referer}i" "%{User-Agent}i"',
  NcsaCombined: '%h %l %u %t "%r" %s %b "%{Referer}i" "%{User-agent}i"'
};

exports.record = function(req, res) {
  var userAgent = req.headers['user-agent'] || '-'
    , host = req.headers['host'] || '-'
    , now = new Date().toString() 
    , path = decodeURI(req.url.split('?')[0]) || '-'
    , q = req.url.split('?')[1] || '-'
    , access_ip = req.connection.remoteAddress || '-'
    , method = req.method || '-'
    , status_code = res.statusCode || '-'

  console.log('%s - - [%s] "%s %s HTTP/1.1" %s'+
    ' %s %s "%s"', 
    access_ip, now, method, path, status_code,
    host, q, userAgent);
}
