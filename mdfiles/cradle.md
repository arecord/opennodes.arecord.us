cradle
===

cradle是一套Apache準備給CouchDB的Node.js套件，透過該套件可以直接完全的存取CouchDB上的資源。

## 套件資訊

<div class="pkginfo" data-module-name="cradle" data-show="version,dependencies"></div>

## Installation

```
npm install cradle
```

## Sample Usage

<pre class="code" data-js="cradle/dbmanager.js"></pre>

使用dbmanager來進行實際執行動作

<pre class="code" data-js="cradle/test.js"></pre>

執行範例：

執行test code的方法如下，注意：參數部分直接輸入test.js中script的key值即可(代表取出該值代表的function做執行的動作)

```
# node examples/cradle/test.js c1
```