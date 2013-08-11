exec
====

進階的程式寫作，常會遇到需要針對系統下指令的狀況，在Node.js中，是透過child_process中的exec function來帶入指令給底層環境做執行的動作，下面為使用Node對系統下指令的方式：

```
// http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').exec;
var child;

// executes `pwd`
child = exec("pwd", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
```

操作上，也可以把callback抽離，可以reuse在更多地方

```
// or more concisely
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ls -la", puts);
```

Node.js中執行指令有一些需要注意的地方：

* 環境變數需要帖別指定：就像cron job一樣，新的command執行程序並沒有太多的環境變數可以用，使用上需要注意是否指令在環境變數之中。
* 跳脫字元：因為帶入的部份為文字，因此要注意單引號、雙引號以及斷行符號等跳脫字元。
* command程序的執行生命週期將等於或短於Node.js執行程式的生命週期：也就是說如果希望透過自身程式去重新啟動自身程式時候，通常stop之後，就無法執行start方法。