var rc = require('rest-client');

rc.send({
    //假設連線一個不存在的網址，迫使操作出現error
    url: 'http://odf.my.micloud.twX/odf/datasets',
    method: 'GET'
  }, function (r, body) {
    //非error的操作，只會到達這個callback
    console.log('response>>' + r.body);
  })
  //實作builder pattern，讓動作可以透過串連的方式連續操作
  .error(function (err) {
    //有error的部份，將會落在這個callback
    console.log('error>>');
    console.log(err);
});

