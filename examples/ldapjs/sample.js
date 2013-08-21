var ldap = require('ldapjs')
  , nu = require('nodeutil')
  , log = nu.logger.getInstance()

ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;

var siteDN = 
  // 'CN=USER1,CN=Users,DC=mitactest,DC=com';
    'CN=Users,DC=mitactest,DC=com';
var userDN = 'CN=USER1,CN=Users,DC=mitactest,DC=com';
var client = ldap.createClient({
  // url: 'ldap://211.78.254.229/CN=Users,DC=mitactest,DC=com'
  url: 'ldap://211.78.254.229/' + siteDN
});
var sslclient = ldap.createClient({
  // url: 'ldap://211.78.254.229/CN=Users,DC=mitactest,DC=com'
  url: 'ldaps://211.78.254.229:3268/' + siteDN
});

function conn(cb) {
  client.bind('Administrator@mitactest.com', 'Mitac@test123', cb);
}

function sslconn(cb) {
  sslclient.bind('Administrator@mitactest.com', 'Mitac@test123', cb);
}

var test = {
  get: 
    function(){
      var opts = {
        filter: '(objectclass=*)',
        scope: 'sub'
        // attributes: ['objectGUID']
      };

      conn(function (err) {
        //client.search(siteDN, opts, function (err, res) {
        client.search(userDN, opts, function (err, res) {
          if(err) console.log(err);
          res.on('searchEntry', function (entry) {
            var user = entry.object;
            // console.log(user.objectGUID);
            console.log(entry.object)
          });

          res.on('end', function (entry) {
            console.log('end...');
            process.exit(0);
          });
        });
      });
    },
  update: 
    function(){
      var change = new ldap.Change({
        operation: 'add',
        modification: {
          unicodePwd: encodePassword('test123') 
        }
      });

      sslconn(function (err) {
        client.modify(userDN, change, function(err) {
          if(err) log.error(err);
          process.exit(0);
        });
      })
    },
  test:
    function(){
      sslconn(function(err) {
        client.modify(userDN, [
            new ldap.Change({
                operation: 'delete',
                modification: {
                    unicodePwd: encodePassword("test@sso123")
                }
            }),
            new ldap.Change({
                operation: 'add',
                modification: {
                    unicodePwd: encodePassword("test@sso1234")
                }
            })
        ], function(err) {
            if (err) {
                // console.log(err.dn);
                // console.log(err.code);
                // console.log(err.name);
                // console.log(err.message);
                log.error(err);
                client.unbind();
            } else {
                console.log('Password changed!');
            }
        });
      });
    }
  }

// function encodePassword(password) {
//     // var newPassword = '';
//     // password = '"' + password + '"';
//     // for (var i = 0; i < password.length; i++) {
//     //     newPassword += password[i] + "\000";
//     // }
//     // return new Buffer(newPassword).toString('base64');

//     return new Buffer(password).toString('base64');
// }

function encodePassword(password) {
    var newPassword = '';
    password = "\"" + password + "\"";
    for(var i = 0; i < password.length; i++){
        newPassword += String.fromCharCode( password.charCodeAt(i) & 0xFF,(password.charCodeAt(i) >>> 8) & 0xFF);
    }
    return newPassword;
}

test[process.argv[2]]();