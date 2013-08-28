promise module
====

promise模組是Node.js使用來達成循序操縱的一個方式，該套件是實作[Promises/A+ Spec](http://promises-aplus.github.io/promises-spec/)的一個模組，主要目的是透過豐富的流程語意來定義非同步的流程操作。 類似的套件有像：[q](/md/q.md), [when.js](https://github.com/cujojs/when)...等。

## 套件資訊

<div class="pkginfo" data-module-name="node-promise" data-show="version,dependencies"></div>

## Installation

```
npm install node-promise
```

## Sample Usage

<pre class="code" data-js="node-promise/test-promise.js"></pre>

範例中透過p.then可以取出p.resolve的傳入值，因此，只要將傳入部分定義在非同步function中的callback中，就可以有效的擷取非同步function執行結束的行為。

Result:
```
>>1
>>2
word count:44887
```

另外，node-promise也接受defer的操作：

<pre class="code" data-js="node-promise/test-promise2.js"></pre>

Result:
```
>>1
>>2
word count:44959
```

如果有連續操作的需要，為了要避免resolve重複被操作，可以透過下面的方式讓promise的scope限制在一個function中...

<pre class="code" data-js="node-promise/test-promise4.js"></pre>