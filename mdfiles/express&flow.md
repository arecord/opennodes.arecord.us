Express流程控制
===

透過ExpressJS routing中的next()來做流程控制

前置動作：產生express project

```
$ express testweb && cd testweb && npm install
```

<pre class="code" data-js="express/testweb/app.js"></pre>

執行結果

```
$ curl http://localhost:3000/users
Auth Error!

$ curl http://localhost:3000/users -H 'auth:demo'
respond with a resource
```