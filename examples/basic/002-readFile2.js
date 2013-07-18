var fs = require('fs');
var fileName='/etc/hosts';
/**
 * readFile function提供一個同步讀取檔案的操作，回傳值為該檔案的內文
 */
fs.readFile(fileName, "utf8", function(err, data){
  if(err) console.log(err);
  console.log(data);
});

