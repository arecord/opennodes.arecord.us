Read-Eval-Print-Loop (REPL)
====

REPL，全稱：Read-Eval-Print-Loop，關於Node.js的REPL進階應用部份，借用官方網站Documents內的一段程式碼來說明。
REPL是一個直譯式互動執行的介面，透過這個介面，您可以打入任何Node.js的程式碼，視窗將在按下Enter時候回覆執行結果。許多腳本語言都有提供類似介面供開發人員測試或執行簡單的程式碼。
在此範例中，將會啓動一個Unix的Socket服務端口、一個TCP Socket的服務端口，並在執行視窗也開啓一個stdin的服務窗口，從這三個地方執行的Node程式片斷，都會反應在原執行視窗上...

```
var net = require("net"),
    repl = require("repl");

connections = 0;

repl.start("node via stdin> ");

net.createServer(function (socket) {
  connections += 1;
  repl.start("node via Unix socket> ", socket);
}).listen("/tmp/node-repl-sock");

net.createServer(function (socket) {
  connections += 1;
  repl.start("node via TCP socket> ", socket);
}).listen(5001);
```

執行此Node程式後，可以telnet該服務位置的5001 port來連接服務，執行如下：
原執行視窗/Server:

```
$ node test.js 
node via stdin> 
```
Client from Local using TCP socket:

```
$ telnet localhost 5001
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
node via TCP socket> console.log('hello');
undefined
node via TCP socket> 
```

Client from Local using Unix socket:

```
$ telnet /tmp/node-repl-sock 
Trying /tmp/node-repl-sock...
Connected to (null).
Escape character is '^]'.
node via Unix socket> console.log('hello')
undefined
node via Unix socket> 
```

原執行視窗(Server)的回應:

```
$ node test.js 
node via stdin> hello
```


