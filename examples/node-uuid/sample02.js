var uuid = require('node-uuid');

/**
 * 設定產生uuid的亂數變數
 * 相關資訊請參考：RFC4122 v1 
 */
var v1 = uuid.v1({
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date().getTime(),
  nsecs: 5678
}); 

console.log(v1);
