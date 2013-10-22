var GAPI = require('gapitoken')
  , request = require('request')
  , fs = require('fs')
  , util = require('util')

//From admin console, create a service account, save the client_secrets.json and it's key
var client_secrets = JSON.parse(fs.readFileSync(__dirname + '/client_secrets.json','utf8'))

//Project setting
var iss = client_secrets.web.client_email;
var bq_scope = 'https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform';
var project = 'mitac-cp300';

var opts = {
    iss: iss,
    scope: bq_scope, 
    keyFile: __dirname + '/key.pem'
};

/**
 * Translate p12 to pem
 * $ openssl pkcs12 -in privatekey.p12 -out privatekey.pem -nocerts
 * $ openssl rsa -in privatekey.pem -out key.pem
 */
var _token = '';
var gapi = new GAPI(opts, function(err) {
  if (err) return console.log(err); 
  gapi.getToken(function(err, token) {
    if (err)  return console.log(err); 
    _token = token;
    var bqurl = 'https://www.googleapis.com/bigquery/v2/projects/%s/queries';
    request({
      url: util.format(bqurl,project),
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + _token
      },
      json: {
        query: 'select * from cp300.GetAnimals'
      }
    }, function(e,r,d){
      if(e) console.log(e);
      //Print the query result
      console.log(JSON.stringify(d));
    });
  });     
});

