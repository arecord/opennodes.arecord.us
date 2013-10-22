var readline = require('readline');
var rl = readline("/etc/hosts");
rl.on("line", function (line){
  console.log('this line is:' + line);
});
rl.on('error', function (e){
  //something went wrong
  console.log(e);
});

