connect-couchdb
====

connect-couchdb是一套Express的CouchDB session store，可以讓Express web server的session persistance在CouchDB中

## 套件資訊

<div class="pkginfo" data-module-name="connect-couchdb" data-show="version,dependencies"></div>

## Installation

```
npm install connect-couchdb
```

## 設定與使用

### 設定CouchDB Session Store

```
var connect = require('connect')
  //step1. enable couchdb store
  , ConnectCouchDB = require('connect-couchdb')(connect)
  //step2. connection setting to couchdb
  , store = new ConnectCouchDB({
    name: 'session',
    host: "db_server_ip_address",
    port: 5984,
    username: 'username',
    password: 'password',
    ssl: false
  });

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
//step3. setup session to specific store
app.use(connect.cookieParser());
app.use(connect.session({secret: 'YourSecretKey', store: store }));
//step4. end of session setting
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
```

### 使用session

使用session的部份，原則上與其他persistance的使用方式相同，都是針對req.session這個物件做操作..

```
//Sample of get session
app.get('/session/:key', function(req, res){
  console.log(req.session);
  res.end(util.format('key:%s --> value:%s', req.params.key, req.session[req.params.key]));
});

//Sample of set session
app.get('/session/:key/:value', function(req, res){
  req.session[req.params.key] = req.params.value;
  res.end('OK');
});
```


