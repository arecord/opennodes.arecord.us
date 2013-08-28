var Promise = require('promise');

// var promise = new Promise(function (resolve, reject) {
//   console.log('test...');
//   get('http://www.google.com', function (err, res) {
//     if (err) reject(err);
//     else resolve(res);
//   });
//   console.log('end...');
// });

module.exports = Promise.nodeify(awesomeAPI)
function awesomeAPI(a, b) {
  return download(a, b)
}

this.awesomeAPI(1111,222);