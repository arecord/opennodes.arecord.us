var fs = require('fs');
/**
 * 透過unlinkSync的方式可以刪除一個檔案
 */
fs.unlinkSync('/tmp/hello')
console.log('successfully deleted /tmp/hello');
