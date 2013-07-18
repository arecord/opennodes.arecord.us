var dbmanager = require('./dbmanager')
  , fs = require('fs');

var id = 'test';
var script = {
  "c1":
  function(){
    dbmanager.createExample(id, 
      {
        "form-type":"html",  //or json
        "form-action":"https://micloud.tw/login",
        "form-body":fs.readFileSync('form.html', 'utf-8'),
        "error-url":"https://www.aaa.com/error",
        "redirect-url":"https://www.aaa.com/success",
        "form-method":"POST"
      }, function(err, res){
      if(err) console.log(JSON.stringify(err));
      console.log(JSON.stringify(res));
    })
  },
  "c2":
  function(){
    dbmanager.createExample(id, 
      {
        "form-type":"json",  //or json
        "form-action":"https://micloud.tw/login",
        "form-body":fs.readFileSync('form.html', 'utf-8'),
        "error-url":"https://www.aaa.com/error",
        "redirect-url":"https://www.aaa.com/success",
        "form-method":"POST"
      }, function(err, res){
      if(err) console.log(JSON.stringify(err));
      console.log(JSON.stringify(res));
    })
  },
  "r":
  function(){
    dbmanager.queryExample(id, function(err, doc){
      if(err) console.log(JSON.stringify(err));
      console.log(JSON.stringify(doc));
    })
  },
  "u":
  function(){
    dbmanager.updateExample(id, {sex:"MX"}, function(err, res){
      if(err) console.log(JSON.stringify(err));
      console.log(JSON.stringify(res));
    })
  },
  "d":
  function(){
    dbmanager.queryExample(id, function(err, doc){
      if(doc)
      dbmanager.deleteExample(id, (doc._rev?doc._rev:null)  , function(err, res){
        if(err) console.log(JSON.stringify(err));
        console.log(JSON.stringify(res));
      })
    })
  }
}

console.log('Do-----------------> %s', process.argv[2]);
script[process.argv[2]]();

