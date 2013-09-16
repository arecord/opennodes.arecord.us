Connect
===

Connect模組是由senchalabs所研發的node.js套件，是封裝原生http模組的一個常用的web framework，幾套有名的web framework都是使用connect來建置的！Connect提供基本的http功能封裝，並且有許多的middleware(或稱為plugin)來支持許多不同用途的操作，讓使用者可以針對需要的部份來進行載入與使用。

## 套件資訊

<div class="pkginfo" data-module-name="connect" data-show="version,dependencies"></div>

## 官網

http://www.senchalabs.org/connect/

## Installation

```
npm install connect
```

## 範例

簡單的操作connect啟動http server，並且回應簡單的文字。另外，可以透過body parser來作body的解析，讓取得http傳輸參數更方便。

<pre class="code" data-js="connect/sample01.js"></pre>

除了body parser，還有許多好用的middleware，都可以透過app.use的方式來載入使用。

<pre class="code" data-js="connect/sample02.js"></pre>

