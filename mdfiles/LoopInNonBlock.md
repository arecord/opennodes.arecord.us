Loop in Non-Block
====

在Node.js的Non-Block機制在操作上常常困擾開發者，很多循序的操作，在No-Block中變得不循序而變得無法去控制... 這邊介紹幾種常用的Loop操作流程的方式... 在這之前，另一篇提到的[迴圈](http://opennodes.arecord.us/md/BasicOperation.md)可以先複習一下

## 傳統for loop處理

如果只是用loop處理一個批次的需求，當loop中有使用到callback function之類的模組，而此模組的回傳值會影響到服務(ex: 如果整個loop是在抓一個網站的資源，那很有可能導致網站crash或是被防火牆當做是攻擊)時候，則操作上就不適合只是一般的for loop操作。

<pre class="code" data-js="basic/loop/loop2.js"></pre>

## 循序的loop

將loop的概念稍加變形之後，自己操作loop裡面下一個動作，可以讓程序乖乖一個接著一個執行，針對許多需要循序處理的需求，可以採用此方法。 概念很簡單：

1. 透過array蒐集執行資源
2. 讓function帶入資源執行，完成後，再去呼叫執行自己
3. 然後取出下一個資源做處理

<pre class="code" data-js="basic/loop/loop1.js"></pre>

## 其他
其他循序的處理方式還包含使用process.nextTick() + callee與caller來操作流程，簡介一下callee與caller...

* callee為function arguments的一個操作，用來代表function本身
* caller為function呼叫者，若為最上層呼叫

下面是簡單的操作，將callee與caller的值列印出來：

由fn2操作fn1，最上層呼叫直接呼叫fn2

```
function fn1(){
  console.log('>>fn1');
  console.log('my callee:'+arguments.callee);
  console.log('my caller:'+fn1.caller);
}
function fn2(){
  console.log('>>fn2');
  fn1();
}
fn2();
```

執行結果：

```
# node test 
>>fn2
>>fn1
my callee:function fn1(){
  console.log('>>fn1');
  console.log('my callee:'+arguments.callee);
  console.log('my caller:'+fn1.caller);
}
my caller:function fn2(){
  console.log('>>fn2');
  fn1();
}
```

如果想要測試最上層直接呼叫fn1的狀況，修改程式碼如下：

```
function fn1(){
  console.log('>>fn1');
  console.log('my callee:'+arguments.callee);
  console.log('my caller:'+fn1.caller);
}
fn1();
```

則結果為：

```
# node test
>>fn1
my callee:function fn1(){
  console.log('>>fn1');
  console.log('my callee:'+arguments.callee);
  console.log('my caller:'+fn1.caller);
}
my caller:function (exports, require, module, __filename, __dirname) { function fn1(){
  console.log('>>fn1');
  console.log('my callee:'+arguments.callee);
  console.log('my caller:'+fn1.caller);
}
fn1();

}
```

其中callee的應用，可以用在loop的程式中，強迫程式同步進行...
ex:

```
var count = 5;
process.nextTick(function fn1(){
  count --;
  console.log('>>fn1, ts=%s, count=%s', new Date().getTime(), count);
  if(count > 0) process.nextTick(arguments.callee);
});
```

執行結果:

```
# node test 
>>fn1, ts=1356282477274, count=4
>>fn1, ts=1356282477280, count=3
>>fn1, ts=1356282477281, count=2
>>fn1, ts=1356282477281, count=1
>>fn1, ts=1356282477281, count=0
```

這邊的output就可以看得出來function fn1會依序被執行，如果有非同步動作，則可以在callback中使用同樣手法讓程序變成循序執行的...

另外，caller的應用，直覺想到的是debug...
寫個簡單的log程式如下，希望可以記錄錯誤是由哪個function發出來的：

```
var log = {
  info: function fn(msg){
    console.log("Call from [%s]: %s", fn.caller.name , msg);
  }
}
function doSomething() {
  log.info('test');
}
doSomething();
```

執行結果：

```
# node test
Call from [doSomething]: test
```