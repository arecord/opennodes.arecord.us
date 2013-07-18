socket.io
====

socket.io是實作HTML5 WebSocket的套件

## 套件資訊

<div class="pkginfo" data-module-name="socket.io" data-show="version,dependencies"></div>

## Installation

```
npm install socket.io
```

## Sample Usage

下面是參考HINA網路上的Socket IO文件：http://blog.hinablue.me/entry/nodejs-first-look-socket-io 改寫呈現時間變化的頁面。

Server端實作：
<pre class="code" data-js="socket.io/server01.js"></pre>

上面程式碼中啟動了兩個server，一個為8080的socket.io server，另一個為8088的http server，而http server僅是為了提供socket.io的client連線的目的，下面是client的範例程式...(其中socket.io server不僅提供server的功用，我們還可以直接從client code中include socket.io.js，實際位置為：http://localhost:8080/socket.io/socket.io.js)

Client端實作：
<pre class="code" data-html="socket.io/client01.html"></pre>

Socket.io的應用相當多，而眾多的高手也都漫漫看到Node.js在Network上的實力，希望之後有更多的Socket.io相關應用跟大家分享！