var fs = require('fs')
var files = fs.readdirSync('..');
for ( i in files ) {
  fs.readFile('../'+files[i], 'utf-8', function(e, d){
    if(e) console.log(e);
    console.log(d);
  });
}
