#!/usr/bin/env node
/** 
 * 上面這段是Lunix/Unix環境中宣告本檔案要使用node這個執行檔來執行
 * 而執行檔的位置是參考env這個環境變數所定義 
 */

var program = require('commander');

/**
 * 宣告版本資訊、指令列可帶入的參數及其HELP說明
 */
program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
/**
 * 宣告過的指令可以透過program.[變數名稱]的方式來取值
 */
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineappe');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);