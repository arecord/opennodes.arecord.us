cheerio
====

cheerio是一套相較於jsdom更輕量級的html網頁分析工具，與jsdom不同的是，cheerio是針對html文件做處理，而不針對url去取回資料來處理。使用上，initial html之後，則與jQuery套件操作相仿，是處理html文件的好幫手！


## 套件資訊

<div class="pkginfo" data-module-name="cheerio" data-show="version,dependencies"></div>

## Installation

```
npm install cheerio
```

## Sample Usage

下面是一個簡單的操作範例，
```
var cheerio = require('cheerio')
  //使用cheerio載入html內文，指定給$可以讓操作更像是jquery喔～
  , $ = cheerio.load('<ul id="fruits">Hello Fruits</ul>');

console.log($('#fruits').text());
```

因為有時候還是需要取html內文自某個網址，這時候可以透過[request](/md/request.md)來幫忙

<pre class="code" data-js="cheerio/sample01.js"></pre>

有些像是each等的前端javascript的操作，在這邊也可以搭配著一起用喔！

<pre class="code" data-js="cheerio/sample02.js"></pre>

除此之外，另外像是jquery操作屬性的部份，類似$('#id').attr('class')這樣的操作方式，也可以在cheerio裡面輕易的操控喔！
