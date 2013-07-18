var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var fs = require('fs');

var opt = { flags: 'r',
  encoding: 'base64',
  fd: null,
  mode: 0666,
  bufferSize: 64 * 1024
};

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){
    var readStream = fs.createReadStream('/root/mrtg/data/211.78.255.68/cpu-day.png', opt);
    console.log('>>>>' + JSON.stringify(readStream));
    readStream.on('open', function () {
      // This just pipes the read stream to the response object (which goes to the client)
      readStream.pipe(res);
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function(err) {
      res.end(err);
    });
});

app.listen(300, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});