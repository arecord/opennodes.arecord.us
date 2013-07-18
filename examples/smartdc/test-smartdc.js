var fs = require('fs');
var smartdc = require('smartdc');

/**
 * Read in the SSH private key
 */
var home = process.env.HOME;
var key = fs.readFileSync(home + '/.ssh/id_rsa', 'ascii');

var client = smartdc.createClient({
  url: 'https://api.micloud.tw',
  key: key,
  keyId: '/MyName/keys/MyKey'
});

/**
 * List machine sample
 */
client.listMachines(function(err, machines) {
  if (err) {
    console.log('Unable to list machines: ' + err);
    return;
  }

  machines.forEach(function(m) {
    console.log('Machine: ' + JSON.stringify(m));
  });
});

/**
 * Get machine by uuid smaple
 */
var uuid = '3a32da60-1234-xxxx-oooo-2707b3240217';
client.getMachine({id:uuid}, function(err, m){
  if(err) {
    console.log('Error....');
    console.log(err);
  }
  console.log('Output:');
  console.log(m);
});
