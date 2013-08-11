ejs
===

EJS是Express顯示層的一個外掛，可以提供html編輯方式的語法，讓操作view部分的顯示更為方便與直覺。

## 套件資訊

<div class="pkginfo" data-module-name="ejs" data-show="version,dependencies"></div>

## Installation

```
npm install ejs
```

如果專案的初始化是使用express的話，可以透過下面方式直接載入ejs模組

```
express -e [專案名稱]
```

## Sample Usage

設定Express的view engine使用ejs模組

<pre class="code" data-js="ejs/app.js"></pre>

透過route的抽離，定義新的route叫做index.js，並透過res.render將參數與顯示頁面定義於route上

<pre class="code" data-js="ejs/routes/index.js"></pre>

頁面上的操作部分，可以透過<%=...%>, <%-...%>, <%...%>等嵌入Node.js的操作語法

```
<%= title %>
Welcome to <%= title %>
```

## View template module - express-partials

Github: https://github.com/publicclass/express-partials

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

## 進階操作 - Scope參數的操控

當app.js中做一個route希望能夠將值往前端(.ejs)帶，但是前端implement了express-partials的模組，希望把頁面用template的方式組織起來，並且在template page中會用到一部分的參數... 假設有時個route用到這個template，則每個route都必須把參數設定進去，否則後端會接收到"not defined"的錯誤訊息...

上面例子的片段程式碼如下：

[app.js]

```
app.get('/', function(req, res){
  res.render('index', { title: 'my express page' });
});
```

[index.ejs]

```
<% if(user) { %>
<%= user %>
<% } %>
```

執行時候會有Exception:

```
...(skip)
user is not defined
...(skip)
```

這部份的錯誤應該是Ejs在render page時候造成的，它直接throw Exception而會造成page終止render，在遍尋不著比較好的方法時，從某篇文章找到一些蛛絲馬跡...

原來Ejs使用"locals"這個物件來包裝頁面上會用到的所有參數，而經過ejs的scriptlet tag包裝起來的部分，可以直接使用locals裡面的參數，也就是說上面的app.js做page render時候：

```
res.render('index', { title: 'my express page' })
```

相當於把title這個參數與ejs頁面的locals變數做整合
亦即ejs頁面操作：

```
<%=title%>
```

與

```
<%=locals.title%>
```

是相等的，但是直接操作title屬性時候，會被ejs compile成runtime exception，這導致如果在ejs中執行下面判斷會出錯；

```
<% if(user) { .... %>
```

因為實際上locals.user不存在，且ejs compiler會將不存在的狀況throw exception...

解決方式，直接使用locals來判斷裡面是否有user這個變數...，因此改寫上面的判斷後：

```
<% if(locales['user']) { .... %>
```

應該就可以正常運作...

## 進階操作 - 與session的結合

在ExpressJS中，使用Ejs view engine時，發現session不能再ejs page中直接取用，所有參數都必須靠render時候傳遞過去...跟asp, jsp等scriptlet language操作上有明顯的不同...@@

為了達到可以在ejs中直接取用，這邊可以使用ejs page的locals變數，locals變數在route設定時候可以使用res.locals來取出，這時候只要將它與req.session做串連(res.locals.session = req.session)即可讓前端的ejs page直接透過<%=locals.session%>或是<%=session%>的方式來操作session...

而如果要在每一個route中設定res.locals.session，這樣也太麻煩... 我們可以透過app.use的方式來設定：

```
app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
});
```

這樣所有的route在執行的時候都會先跑過一次這個動作，所以在使用時候可以這樣：

[app.js]

```
app.get('/', function(req, res) {
  req.session.user = {name: 'simon'}
  ...(skip)
});
```

[view/index.ejs]

```
...(skip)
<%=session.user? 'got user: '+session.user.name : 'no user...'%>
...(skip)
```

這時候從ejs取用session的物件就單純多了 :D
