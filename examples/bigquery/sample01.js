var bq = require('bigquery')
  , fs = require('fs')
	, prjId = 'your-bigquery-project-id'; //you need to modify this

	bq.init({
			client_secret: '/path-to-client_secret.json',
			key_pem: '/path-to-key.pem'
	});

var data = [
 {
   "insertId": "201403221228", //option
   "json": {
     "name": "simon",
     "sex": "M",
     "age": 35
   }
 }
];

var test = {
	load: function() {
		bq.job.load(prjId, 'test', 'testtb1', data, function(e,r,d){
			if(e) console.log(e);
			console.log(JSON.stringify(d));
		})
	},
	dscreate: function() {
		bq.dataset.create(prjId, 'dataset_name', function(e,r,d){
			if(e) console.log(e);
			console.log(d);
		});
	}, 
	tbcreate: function() {
		var schema = {
			"fields": [
			 {
				"name": "field1",
				"type": "string",
				"description": "test"
			 },
			 {
				"name": "field2",
				"type": "integer",
				"description": "test for int"
			 }
			]
		 };
		bq.table.create(prjId, 'dataset_name', 'table_name', schema, function(e,r,d){
			if(e) console.log(e);
			console.log(d);
		});
	},
	list: function() {
		bq.dataset.list(prjId, function(e,r,d) {
			if(e) console.log(e)
			console.log(d);
		});
	}
}

test.list()
