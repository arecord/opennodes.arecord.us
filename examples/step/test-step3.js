var request = require('request');
var queue = ['http://www.google.com','http://micloud.tw','http://tw.yahoo.com'];
var Step = require('step');
Step(
  function step1() {
    console.log('Step1...');
    getUrl(queue[0], this);
  },
  function step2() {
    console.log('Step2...');
    getUrl(queue[1], this);
  },
  function step3() {
    console.log('Step3...');
    getUrl(queue[2], this);
  }
);

function getUrl(url, callback) {
  //console.log('Processing url:%s...', url);
  request.get(url, function(e,r,d){
    if(e) console.log(e);
    console.log('[%s] word count:%s', url, d.length);
    callback(e,d.length);
  })
}