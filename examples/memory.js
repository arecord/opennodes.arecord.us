var os = require('os');
var mem = {
  free: os.freemem(), 
  total: os.totalmem(),
  usage: os.freemem()/os.totalmem()
}
console.log(mem);
