var d = require('domain').create()
  , exec = require('child_process').exec;

d.run(
  function(){
    process.nextTick( function(){
      exec('nslookup micloud.tw 168.95.1.1', function(e,stdo,stde){
        if(e) console.log(e)
        if(stde) console.log(stde)
        console.log(stdo);
        setTimeout(function(){
          process.nextTick(arguments.callee);
        },3000);
      })
    });
  }
);

d.on('error', function(e){
  console.error('Caught error!', e);
})
