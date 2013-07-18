var _ = require('underscore');
var a = [1,2,3,4,5,6]
//將2與3刪除
var result = _.difference(a, [2,3]);
console.log(result);