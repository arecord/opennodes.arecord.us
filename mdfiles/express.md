Express
====

Express是一套Node.js的Web Framework，以EJS或Jade(或其他)為View Engine將Node.js的MVC做一個完整的封裝，學Node.js的朋友不能錯過！

## 套件資訊

<div class="pkginfo" data-module-name="express" data-show="version,dependencies"></div>

## Installation

一般安裝Express時，我們會需要使用到其下的CLI工具來產生專案，所以需要帶入-g的參數來安裝到環境中。

```
npm install express -g
```

## Sample Usage

使用express來產生專案

```
express [專案名稱] && cd [專案名稱] && npm install
```

上面指令使用&&是Linux來串接指令的方式，原則上上面有三個指令

* express [專案名稱]: 使用express指令來產生某個專案
* cd [專案名稱]: 切換到該專案資料夾下
* npm install: 特該專案將相依的package進行安裝

### 以下為實際執行範例

```
$ express ExpressPrj
create : ExpressPrj
create : ExpressPrj/package.json
create : ExpressPrj/app.js
create : ExpressPrj/views
create : ExpressPrj/views/layout.jade
create : ExpressPrj/views/index.jade
create : ExpressPrj/routes
create : ExpressPrj/routes/index.js
create : ExpressPrj/public
create : ExpressPrj/public/stylesheets
create : ExpressPrj/public/stylesheets/style.css
create : ExpressPrj/public/javascripts
create : ExpressPrj/public/images
dont forget to install dependencies:
$ cd ExpressPrj && npm install
```

上面指令完成後，會產生一個以剛剛給定的名稱的資料匣，express預設以jade作為view engine，在此需要修改一些設定方可使用express之ejs作為view engine，目前專案的檔案結構說明如下：

* app.js: 實際主程式進入點
* package.json: 專案定義檔，含一些版本資訊
* public: 置放靜態檔案處，如javascript, css, image, html檔案等資料
* view: view engine主要讀取資料匣，包含jade的頁面程式，簡單說就是node.js的server端程式位置
* routes: 預設放置專案中router之位置，並且透過export提供給專案載入使用

修改app.js檔案，增加使用ejs的定義

* 首先修改configure區段：

express模組預設產出的template並沒有emable session功能，可透過下面的設定把session的功能打開(PS: session的實作滿多的，也有透過nosql做session的persistance，讓session可以共用在一台以上的主機中)：

```
app.use(express.cookieParser());
app.use(express.session({secret: 'keyboard cat'}));
```

完整設定如下：

```
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboard cat" }));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.set("view options", {layout : true});
});
```

* 如果希望讓ejs用其他的副檔名，則可以參考下面設定：

```
app.set("view engine", "html");
app.set("views", __dirname + '/views');
app.register("html", ejs);
```

* 然後移除：app.get('/', routes.index);
* 增加app.get()如下：

```
app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});
```

* 在view之下新增layout.ejs檔案(express預設會找尋view下的layout.ejs作為樣板render頁面)

<pre class="code" data-js="express/index.html"></pre>


* 如欲使用其他樣板，可在router處增加額外樣板資訊 ：

```
app.get('/', function(req, res){
  res.render('index', {
    layout:'layout2',
    title: 'Express'
  });
});
```

* 在view下新增index.ejs檔案：

```html
<h1><%= title %></h1> 
<p>Welcome to <%= title %></p>
```

* 啓動server：
(首先開啓終端機，進入專案資料匣...)

```
# node app.js
```

* 檢視執行狀況： http://localhost:3000

# 其他

## 設定Basic Authentication

Express套件支援簡單的[Basic Authentication](http://en.wikipedia.org/wiki/Basic_access_authentication)，設定可參考下面範例：

```
app.use(express.basicAuth(username, password));
```

## Express掛載其他靜態資源，並指定起始路徑

一般express專案在建立之初都會給定一個靜態資源folder "/public"，但如果需要給定其他靜態資源資料夾時，則可以再透過express.static指定一個...

```
app.use('/images', express.static(__dirname + '/images'));
```

上面透過express.static多指定了一個images的目錄，並掛載在"/images"位置上，因此假設專案目錄下有個images目錄，裡面有個logo.png圖片，則透過http://localhost:3000/images/logo.png就可以存取該資源。

## View template module - express-partials

新版的express已經將template系統改寫，原本使用在res.render('...', {layout:'somelayout'})需要另外載入[express-partials](https://github.com/publicclass/express-partials)模組方能使用，載入方式如下：

```
var express = require('express')
  , partials = require('express-partials')
  , app = express();

app.use(partials());
```

partial使用上預設是使用layout.ejs作為預設template，因此在未指定時，系統將抓$project/views/layout.ejs檔案作為樣板，而需要指定特別樣板時可以在route中這樣使用：

```
app.get('/test', function(req, res) {
  ...
  res.render('page_name', {layout: 'your_layout', obj: 'your objects...'});
});
```

### 設定CORS(Allow Cross Domain JavaScript)

CORS的設定是為了讓JavaScript可以跨網域被呼叫而設立的方式，作法是在Server Response Header加上Access-Control-Allow-Origin等參數，詳細的說明可以參考：[解決Cross Site JavaScript問題](index.html?page=CrossSiteSolv.md)

```
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

//Apply configure
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'cool beans' }));
    app.use(express.methodOverride());
    app.use(allowCrossDomain); //在app.configure處帶入CORS設定
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});
```

## 設定SSL
下面展示使用micloud smartos建立node.js之ssl web server，smartos在建立起來時候，會自動產生一組selfsigned.pem的key，可以省去建立openssl的時間...。
設定node.js https時候，可以直接將key與cert都指定在selfsigned.pem上，透過該key提供ssl需要的認證金鑰...
PS: 如果需要手動產生ssl憑證，可以參考：http://peihsinsu.blogspot.tw/2012/12/smartosself-gen-ssl.html

Step 1: 產生Express專案(如果已經有專案，可以忽略這個設定)

```
# express ssltest && cd ssltest && npm install
```

Step 2: 修改app.js這隻程式(主要是由這隻程式再做createServer的動作)，修改內容如下：

```
# vi app.js

var express = require('express')
  , routes = require('./routes')
  , https = require('https') //使用node.js https模組
  , fs = require("fs")
  , path = require('path');

//設定https需要使用的options參數
var key = '/opt/local/etc/openssl/private/selfsigned.pem';
var crt = key; 
var privateKey = fs.readFileSync(key);
var certificate = fs.readFileSync(crt);
var options = {
    key: privateKey,
    cert: certificate,
};

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 1330);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index); //express default root

//建立一個測試route
app.get('/test', function(req, res){
  res.writeHead(200);
  res.end('TEST...');
});

//使用https來建立server, 建立過程中帶入options參數
https.createServer(options, app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
```

Step 3 - 測試：啟動與測試

```
# node app.js
```

打開Browser連線：https://your.ip.address:1330/test
