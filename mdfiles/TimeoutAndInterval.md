setTimeout & setInterval
====

Node.js中操作暫停的兩個簡單且常用的function：setTimeout(), setInterval()...

# setTimeout

setTimeout()的操作為暫停第二個欄位的毫秒數之後，再執行第一個欄位的function內容:

```
setTimeout(function(){
  console.log('Hello');
}, 1000);
```

# setInterval

而setInterval則是以區間的方式，每隔第二個欄位的毫秒數之後，再執行第一個欄位的function內容：

```
var i = 0;
setInterval(function(){
  console.log('count: %s', i);
  i++;
}, 1000);
```

上面看起來，程式並沒有中斷與離開的時間，因此很適合當做是daemon與排程器的實作使用，而如果要有程式的結束動作，則可以使用process.exit()來強制程式中斷，但要注意，exit()則會導致整個程式close喔！

```
var i = 0;
setInterval(function(){
  if(i >= 5) process.exit(); //程式將會離開
  console.log('count: %s', i);
  i++;
}, 1000);
```

另外，Interval與Timeout都有提供clear的實作，他透過執行setInterval或是setTimeout時候回傳的id值，可以協助離開某個interval或是timeout的block狀態...

<pre class="code" data-js="basic/loop/loop3.js"></pre>