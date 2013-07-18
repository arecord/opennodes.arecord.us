var fs = require('fs')
/**
 * readdirSync function提供同步的資料夾列表，回傳值為一個file的陣列
 */
var files = fs.readdirSync('.');
for ( i in files ) {
  console.log(files[i]);
}
