MySQL
===

## 簡介

非常常用的套件，也是簡單易懂... 連線＋查詢...解決

## 套件資訊

<div class="pkginfo" data-module-name="mysql" data-show="version,dependencies"></div>

## Installation

```
# npm install mysql
```

## Sample

這個是建立連線的例子，因為mysql套件曾經有幾個改版有影響到connection的建立方式，目前使用這樣的判斷可以比較安全的建立連線...
<pre class="code" data-js="mysql/mysql-config.js"></pre>

而任何的SQL在此套件內都是使用query這個function即可達成，作者封裝insert, update, delete, select甚至exec等指令到同一個function，讓操作相當簡單...
<pre class="code" data-js="mysql/mysql-example.js"></pre>