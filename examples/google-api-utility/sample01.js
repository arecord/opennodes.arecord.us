var auth = require('google-api-utility')
  , request = auth.request
	, util = require('util')
	, project = 'your-project-id';

	auth.init({
		scope: 'https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform',
		client_secret: '/path-to-client_secret.json',
		key_pem: '/path-to-key.pem',
		timeout: 1200
	});

var bqurl = 'https://www.googleapis.com/bigquery/v2/projects/%s/datasets';
request({
	url: util.format(bqurl, project),
	method: 'GET'
}, function(err, req, doc){
	if(err) console.log(err);
		console.log(doc);  
});
