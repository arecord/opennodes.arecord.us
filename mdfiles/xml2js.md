xml2js
===


## Github Repository

<div class="pkginfo" data-module-name="xml2js" data-show="version,dependencies"></div>


## Installation

```
npm install xml2js
```

## Sample Usage

<pre class="code" data-js="xml2js/sample01.js"></pre>

執行結果：

```
# node examples/xml2js/sample01.js
Source XML:
<foo>
  <bar>Hello World!  </bar>
</foo>
Parsed Json:
[ 'Hello World!  ' ]
```

進階使用： 加入額外參數設定，下面範例是針對解攜出來的文字做trim的處理，有哪些option可以參考：https://github.com/Leonidas-from-XIV/node-xml2js#options

<pre class="code" data-js="xml2js/sample02.js"></pre>

執行結果：

```
Source XML:
<foo>
  <bar>Hello World!  </bar>
</foo>
Parsed Json:
[ 'Hello World!' ]
```

注意看上面的執行結果會發現，Parsed Json後面的空白已經消失啦～