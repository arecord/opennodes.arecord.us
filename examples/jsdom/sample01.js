var jsdom = require("jsdom")
  , nu = require('nodeutil')

jsdom.env(
  //這個是欲抓取網頁的位置
  "http://nodejs.org/dist/",
  //這個是欲載入使用的js模組
  ["http://code.jquery.com/jquery.js"],
  //Callback function中處理request回來的資訊
  function (errors, window) {
    //使用window物件來操作jQuery的語法，下免範例是取得頁面中所有鏈結數量
    console.log(
      "there have been %s nodejs releases!", 
      window.$("a").length);
  }
);
