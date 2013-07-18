tty.js
====

tty.js是一個讓你可以用簡單的幾個指令或是幾行code就可以架構起一個Web版本的SSH終端的一套工具，服務背後透過SocketIO建構，具備Terminal的大部分屬性可以操作，相當不錯用喔！


## 套件資訊

<div class="pkginfo" data-module-name="tty.js" data-show="version,dependencies"></div>

## Installation

```
npm install tty.js
```
如果您需要使用到tty.js提供的指令列工具，擇需要把tty.js安裝到global
```
npm install tty.js -g
```

## CLI usage
tty.js提供簡單的指令來開起服務，下面展示如何透過指定port的方式來做登入的動作：
```
# tty.js --port 8080
```

輸入上面指令之後，就可以直接打開瀏覽器瀏覽：http://you.ip.address:8080 來檢視，顯示的網頁大概如下：

<img src="/images/ttyjs.png"/>

## Sample Usage

tty.js也提供了客製的功能，只要透過下面幾行程式碼定義，就可以提供一個具備SSL的Web連線(SSL Key要自己準備拉...)

<pre class="code" data-js="ttyjs/sample01.js"></pre>