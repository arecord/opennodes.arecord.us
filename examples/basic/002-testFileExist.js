var fs = require('fs');
var path='/etc/hosts';

/**
 * 建立stat物件
 */
var s = fs.statSync(path);
//另一種建立方式：process.binding('fs').stat(path);

/**
 * 檢視stat物件內容
 */
console.log(s);
