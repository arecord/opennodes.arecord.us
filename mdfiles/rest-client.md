rest-client
====

為了比較簡單的操作REST的服務，讓操作有一致性的作法，Rest Client將request模組包裝起來，重寫操作介面，讓整體使用更為方便。

## 套件資訊

<div class="pkginfo" data-module-name="rest-client" data-show="version,dependencies"></div>

## Installation

```
npm install rest-client
```

## 範例

一般操作範例：

<pre class="code" data-js="rest-client/sample01.js"></pre>

一般操作中，如果未指定method，則預設使用GET method來執行request，詳細的設定可以都寫在第一個參數內。

關於錯誤的處理，可以在send之後，直接在send回傳物件上操作.error，並在其中實作error handle

<pre class="code" data-js="rest-client/sample02.js"></pre>

