request module
====

request是一套實作http/https模組的http(s) client module，透過該套件可以快速的進行

## 套件資訊

<div class="pkginfo" data-module-name="request" data-show="version,dependencies"></div>

## Installation

```
npm install request
```

## Sample Usage

request最吸引人的地方莫過於使用pipe的function串接http資源，下面有兩個範例：

1. 這個是透過request來串接resp(response)，讓

```
app.get('/getpic/doodle.png', function(req, res) {
  request.get('http://mysite.com/doodle.png').pipe(res);
});
```

2. 或者是串連fs.createWriteStream來下載檔案

```
request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'));
```

除了一些基本功能外，request針對header, body, form, queryString等都有不錯的處理，可以參考下面範例：

<pre class="code" data-js="request/sample01.js"></pre>

<pre class="code" data-js="request/sample02.js"></pre>

<pre class="code" data-js="request/sample03.js"></pre>
