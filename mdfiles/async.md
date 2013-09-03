async
====

async是一套Node.js中解決同步問題的好用工具，內容的使用功能有點像[q](/md/q.md)或是[node-promise](/md/node-promise.md)。

## 套件資訊

<div class="pkginfo" data-module-name="async" data-show="version,dependencies"></div>

## Installation

```
npm install async 
```

## Sample Usage

下面是一個自寫一個測試function來做async的範例，範例中可以了解async.map中接入第一個參數為array，並且將array逐步傳入第二個參數的function(callback)中，最後async將結果彙整成兩個結果值回傳，第一個值為error，第二個為對應callback中的第二個參數彙整...

<pre class="code" data-js="async/sample01.js"></pre>

如果實際上使用[request module](/md/request.md)的話，可以這樣操作...

<pre class="code" data-js="async/sample02.js"></pre>


