跟IO有關的官方套件
====

## fs套件

fs套件提供讀取檔案系統的一些操作方式，而官方針對操作大多實作了有帶Sync跟沒帶Sync的兩個版本，其中有Sync的function都是屬於同步的操作方式，可以直接回傳值回來，而沒有Sync的function則是會有callback，在callback中接入回傳值，同時也帶入error訊息供判斷。

<pre class="code" data-js="basic/001-readdir.js"></pre>

<pre class="code" data-js="basic/002-readdir.js"></pre>

<pre class="code" data-js="basic/002-readFile.js"></pre>

<pre class="code" data-js="basic/002-deleteFile.js"></pre>

如果是使用沒帶Sync的function，則需要實作callback function來達到操作回傳的內容物件，範例如下：

<pre class="code" data-js="basic/002-readFile2.js"></pre>

另一個好用的function是stat，可以用來檢測某個路徑的檔案或是資料匣的狀態

<pre class="code" data-js="basic/002-testFileExist.js"></pre>
