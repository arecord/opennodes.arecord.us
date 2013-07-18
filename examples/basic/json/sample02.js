var _ = require('underscore');

var arr = [
  {"aaa": [1,2,3]},
  {
    "bbb": 
    {
      a: 111,
      b: 222
    }
  }
];

console.log('Before...');
console.log(arr);

arr = _.reject(arr, function(v){
  if(v.aaa) return true;
  return false;
});

console.log('After...');
console.log(arr);