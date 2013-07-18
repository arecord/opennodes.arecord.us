var fs = require('fs')
  , xml2js = require('xml2js')

/* 讀取xml檔案(位置在同目錄底下) */
var xml = fs.readFileSync(__dirname + '/foo.xml', 'utf-8');

console.log('Source XML:');
console.log(xml);

/* 解析xml string成json物件 */
xml2js.parseString(xml, function (err, result) {
  console.log('Parsed Json:');
  console.dir(result.foo.bar);
});