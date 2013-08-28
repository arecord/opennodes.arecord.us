q
====

q模組是實作[Promises/A+ Spec](http://promises-aplus.github.io/promises-spec/)規範的一個模組，主要目的是透過豐富的流程語意來定義非同步的流程操作。其他實作promises套件有：[q](/md/q.md), [when.js](https://github.com/cujojs/when)...等，可參考：http://wiki.commonjs.org/wiki/Promises/A。

## 套件資訊

<div class="pkginfo" data-module-name="q" data-show="version,dependencies"></div>

## Installation

```
npm install q
```

## Sample Usage

下面範例展示基本的q操作方式：

<pre class="code" data-js="q/sample01.js"></pre>

範例結果：

```
$ node sample01
[http://www.google.com] word count:44919
[http://tw.yahoo.com] word count:301355
[http://micloud.tw] word count:37213
end...
```

<pre class="code" data-js="q/sample02.js"></pre>

範例結果：

```
$ node sample02
[http://www.google.com] word count:44919
[http://tw.yahoo.com] word count:302985
[http://micloud.tw] word count:37213
x:37213, y:44919, z:302985
end...
```

<pre class="code" data-js="q/sample03.js"></pre>

範例結果：

```
$ node sample03
1A Starting
1B Starting
1B Finished
1A Finished
OneA: 1ATime: 1500, OneB: 1BTime: 1000
2 Starting and Finishing, so 3A and 3B should start
3A Starting
3B Starting
3A Finished
3B Finished
Four is now done
```