Process Standard I/O with Pipe
====

Node.js中，也實作操作pipe的方式，讓我們可以把標準輸入的內容直接輸入到Node.js中，而在Node.js的程式中，可以使用Process.stdin.on('data')來接所傳進的資料... 下面是操作的範例：

<pre class="code" data-js="basic/process/pipe.js"></pre>

以上面的程式碼，可以使用下面的方式來操作：

```
cat xxx | node pipe.js
```

在常用的套件中，jsontool就是使用此方式進行處理所輸入的文字....




