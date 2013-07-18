log4js module
====

log4js是一套好用的log模組，提供使用者在log上做分等級、分類、顏色等等，更可以設定log append的策略或是log append的方式等等，相信寫過java或.Net的朋友應該用過相似的套件！

這邊有篇之前寫過的文章，可以針對log的等級說明一下：http://nodejs-in-example.blogspot.tw/search?q=log4js

## 套件資訊

<div class="pkginfo" data-module-name="log4js" data-show="version,dependencies"></div>

## Installation

```
npm install log4js
```

## Sample Usage

下面是一個簡單的使用範例，讓使用console log也可以分類、分顏色...

<pre class="code" data-js="log4js/sample01.js"></pre>

如果要在自己的專案中建立更有彈性的log，可以參考下面範例，不僅可以同時有兩個以上的log appender，更可以針對log size, log catelog...等等做分類！

<pre class="code" data-js="log4js/logger.js"></pre>

承上，使用上面的module可以這樣用...

<pre class="code" data-js="log4js/sample02.js"></pre>

