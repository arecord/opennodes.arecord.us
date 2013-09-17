var rc = require('rest-client');

// default value is 'GET'
// Send by URL object
rc.send(
  {
    url: 'http://odf.my.micloud.tw/odf/datasets',
    method: 'GET'
  }, function (res) { //callback已經封裝error的告警，暫時可以不用處理error
    console.log(res.body);
});