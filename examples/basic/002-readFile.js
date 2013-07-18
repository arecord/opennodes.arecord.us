var fs = require('fs');
var fileName='/etc/hosts';
/**
 * readFileSync function提供一個同步讀取檔案的操作，回傳值為該檔案的內文
 */
var text = fs.readFileSync(fileName, "utf8");
console.log(text);
