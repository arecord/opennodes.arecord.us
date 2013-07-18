var fs = require('fs');
var dir = '.';

/**
 * 使用皆入參數的方式(process.argv)來動態帶入dir的位置
 */
if ( process.argv[2] ) dir = process.argv[2];

var files = fs.readdirSync(dir);
for (i in files) {
  console.log(files[i]);
}
