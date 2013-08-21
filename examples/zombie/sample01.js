var Browser = require("zombie");

// Load the page from localhost
browser = new Browser()
browser.visit("http://www.google.com/", function () {
  //透過browser.html()可以取回當下瀏覽器的內容
  console.log(browser.html());
  console.log('======================================');
  //執行form submit的動作
  browser.
    fill("q", "zombie"). //在q的輸入欄位中輸入zombie這個單字
    pressButton("搜尋", //點選"搜尋"這個按鈕，送出查詢
    function() {
      //列出查詢後的結果
      console.log(browser.html());
    })
});