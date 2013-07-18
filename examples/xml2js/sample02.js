
var fs = require('fs')
  , xml2js = require('xml2js')

/* 讀取xml檔案(位置在同目錄底下) */
var xml = fs.readFileSync(__dirname + '/foo.xml', 'utf-8');
console.log('Source XML:');
console.log(xml);

xml2js.parseString(xml, 
  //定義option內容，可參考：https://github.com/Leonidas-from-XIV/node-xml2js#options
  {trim: true}, 
  function (err, result) {
    console.log('Parsed Json:');
    console.dir(result.foo.bar);
});