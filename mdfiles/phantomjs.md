phantomjs
===

phantomjs是與zomebie功能相仿的一個模擬瀏覽器操控套件，比較不一樣的地方是，phantomjs提供一些指令(CLI)操作的方式，比較詳細的說明可以參考[phantomjs官網](http://phantomjs.org)。

## 套件資訊

<div class="pkginfo" data-module-name="phantomjs" data-show="version,dependencies"></div>

## Installation

```
npm install phantomjs
```

## CLI help page

```
phantomjs -h

Usage: phantomjs [options] script.[js|coffee] [script argument [script argument ...]]

Options:

  --cookies-file=/path/to/cookies.txt    Sets the file name to store the persistent cookies
  --config=/path/to/config               Specifies path to a JSON-formatted config file
  --disk-cache=[yes|no]                  Enables disk cache (at desktop services cache storage location, default is 'no')
  --ignore-ssl-errors=[yes|no]           Ignores SSL errors (i.e. expired or self-signed certificate errors)
  --load-images=[yes|no]                 Loads all inlined images (default is 'yes')
  --load-plugins=[yes|no]                Loads all plugins (i.e. 'Flash', 'Silverlight', ...) (default is 'no')
  --local-to-remote-url-access=[yes|no]  Local content can access remote URL (default is 'no')
  --max-disk-cache-size=size             Limits the size of disk cache (in KB)
  --output-encoding                      Sets the encoding used for terminal output (default is 'utf8')
  --remote-debugger-port=port            Starts the script in a debug harness and listens on the desired port.
  --remote-debugger-autorun=[yes|no]     Whether to run the script in the debugger immediately, or wait for the user to type __run() in the console. (default is 'no')
  --proxy=address:port                   Sets the network proxy (e.g. "--proxy=192.168.1.42:8080")
  --proxy-auth=username:password         Sets authentication details for the proxy (basic auth)
  --proxy-type=[http|socks5]             Sets the proxy type, either "http" (default) or "socks5"
  --script-encoding                      Sets the encoding used for the starting script (default is 'utf8')
  --web-security=[yes|no]                Enable web security (default is 'yes')
  -v, --version                          Prints out PhantomJS version
  -h, --help                             Shows this message and quits

NOTE: Without any argument, PhantomJS will launch in interactive mode (REPL).

Documentation can be found at http://code.google.com/p/phantomjs/wiki/PhantomJS
```

## Sample Usage

```
console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://www.phantomjs.org/';
page.open(url, function (status) {
    //Page is loaded!
    phantom.exit();
});
```

上面程式的執行方式不同於一般node.js執行的方式，而是要透過phantomjs這個指令來執行...

另外，展示個透過phantomjs來做網頁快照的方式：

<pre class="code" data-js="phantomjs/sample01.js"></pre>

執行方式與結果如下：

```
$ phantomjs examples/phantomjs/sample01.js
Loading a web page

$ ls -l phantomjs.png
-rw-r--r--  1 simonsu  staff  162493  8 21 11:52 phantomjs.png
```

phantomjs有許多其他的應用，喜歡phantomjs的朋友可以參考[官網](http://phantomjs.org)或是[phantomjs的github](https://github.com/Obvious/phantomjs)上的教學與範例喔!


