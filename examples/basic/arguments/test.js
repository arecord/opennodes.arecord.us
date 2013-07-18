
console.log('=============================================================>');
console.log(arguments);

console.log('=============================================================>');
function test(){
  console.log(arguments.callee)
}

test(1,2,3);
