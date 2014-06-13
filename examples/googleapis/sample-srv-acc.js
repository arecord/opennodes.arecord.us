var googleapis = require('googleapis');

var jwt = new googleapis.auth.JWT(
    '429*****3-qeadsfgg*****************qkp3dj685pucmtl@developer.gserviceaccount.com',
    __dirname + '/3b4d3*************8063853-privatekey.pem',
    null,
    [
      'https://www.googleapis.com/auth/bigquery', 'https://www.googleapis.com/auth/cloud-platform'
    ]);

jwt.authorize(function(err, tokens) {
  if(err) {
    console.log(err);
    return;
  }
  var param= {projectId: 'gcp-project'}
  googleapis.discover('bigquery', 'v2').execute(function(e,client) {
    if(e)
      console.log(e);
    else
      client.bigquery.datasets.list(param).withAuthClient(jwt).execute(function(err, response) {
        if(err) console.log(err);
        console.log(JSON.stringify(response));
      });
  });
});
