jsdom
====

jsdom是一個可以使用類似dom元件操作方式來操作html text的工具，透過載入js模組，更可以直接使用js模組的相關操作方式來操作文件，對於喜愛寫爬網頁軟體的開發者來說，相當方便！

## 套件資訊

<div class="pkginfo" data-module-name="jsdom" data-show="version,dependencies"></div>

## Installation

```
npm install jsdom
```

## Sample Usage

下面是簡單的使用範例，展示如何結合jQuery做頁面上文件的操控，抓出頁面上鏈結的總數量：

<pre class="code" data-js="jsdom/sample01.js"></pre>

另外，如果需要顯示鏈結的內容，也可以使用這樣的方式：

<pre class="code" data-js="jsdom/sample02.js"></pre>

上面範例，原則上透過windows物件之後所操作的function就跟使用jQuery的語法相似，相信大家比我還要熟悉！