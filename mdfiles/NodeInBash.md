Node.js in Bash
===

一般使用Node.js寫CLI或是使用Bash寫Server端腳本，都是單獨使用，頂多把JS包成完整的指令來使用...但是，其實您可以透過node -e的方式來動態將Bash的參數輸入Node.js...下面這段程式只是demo怎麼把Bash中的參數傳入Node.js中做執行，而且，不用再另外開一個JS檔案...

<pre class="code" data-js="basic/test.sh"></pre>

執行：
```
# bash test.sh
```

以上，簡單的程式可以混用Bash與Node.js，讓Bash可以協助流程控制，並且讓Node.js可以處理更多其他運算的語法(例如文字處理、網頁處理、資料庫處理...等)！