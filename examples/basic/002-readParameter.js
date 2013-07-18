#!/usr/bin/env node
var param = '';
/**
 * 關於指令列的接入參數，可以透過process.argv這個變數來讀取
 * 而process.argv[0] = node這個指令, process.argv[1] = 要執行的node.js程式檔名
 * 從argv[2]之後的才開始是讀入的參數
 */
if ( process.argv[2] ) param = process.argv[2];
if(param != '')
  console.log(param);
else
  console.log('No input param');
