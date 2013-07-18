解決Cross Site JavaScript問題
===

在JS的世界裡，Ajax的頭號天敵就是為了避免不安全，Browser所設限的coss site not allow的限制，為了避免cross site javascript的問題，傳統作法是透過script tag來嵌入非同個網站的資源，或是使用jsonp來做site to site的呼叫，但是... 

* script tag內文必須要是script，否則無法順利讀取，甚至會弄壞網頁中的js...
* jsonp已經被chrome排擠... firefox可以正常使用

有了Node.js的request套件後，我們大可以一行解決... 讓遠方資源變成我發資源：

```
request.get('http://mysite.com/doodle.png').pipe(resp)
```

上面可以讓原本需要透過http://mysite.com/doodle.png 來呼叫的資源，透過你制定的鏈結呼叫該資源...

而，根本的解決方式可以使用Header中加入Access-Control-Allow-Origin參數來設定你的js，允許讓其他網站來呼叫...

Server端實作：
<pre class="code" data-js="basic/http/cross-site-server.js"></pre>

上面設定資源可以讓site:http://10-20-0-31.my.micloud.tw 下面的網頁來呼叫，如果想要讓所有網站都可以呼叫，可以使用"*"來讓所有網站可以呼叫...

Client端實作：
<pre class="code" data-html="basic/http/cross-site.html"></pre>

如果您使用的是Express，可以參考： [Express](index.html?page=express.md)