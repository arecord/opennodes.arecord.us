ffoo();

fbar();

function ffoo(){
  log('Start foo...');
  setTimeout(function(){
    log("foo...");
  }, 1000);
  log('End foo...');
}

function fbar(){
  log('Start bar...');
  log('bar...');
  log('End bar...');
}

function log(msg) {
  console.log("["+new Date()+"]"+msg);
}
