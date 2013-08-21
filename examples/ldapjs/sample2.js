var ldapHost = 'ldaps://211.78.254.229';

//var ldapHost = 'ldaps://OWNERCO-KBNSZ8K.mitactest.com';
var username = 'user1';
var oldPassword = 'test@sso123';
var newPassword = 'test@sso1234';

var ldap = require('ldapjs');
var client = ldap.createClient({
    url: ldapHost
});

var siteDN = 'CN=Users,DC=mitactest,DC=com';
var userDN = 'CN=user1,CN=Users,DC=mitactest,DC=com';

client.bind('Administrator@mitactest.com', 'Mitac@test123', function(err) {
    client.search(siteDN, {
//        filter: '(cn=' + username + ')',
        filter: '(objectclass=*)',
        attributes: 'dn',
        scope: 'sub'
    }, function(err2, res) {
        if(err2) console.log(err2);
        console.log('<<<<<<<');
        console.log(res);
        console.log('<<<<<<<');
        
        res.on('searchEntry', function(entry) {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            console.log(entry);
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            
            var userDN = entry.object.dn;
            client.bind(siteDN, oldPassword, function(err) {

                client.modify(userDN, [
                    new ldap.Change({
                        operation: 'delete',
                        modification: {
                            unicodePwd: encodePassword(oldPassword)
                        }
                    }),
                    new ldap.Change({
                        operation: 'add',
                        modification: {
                            unicodePwd: encodePassword(newPassword)
                        }
                    })
                ], function(err) {
                    if (err) {
                        console.log(err.code);
                        console.log(err.name);
                        console.log(err.message);
                        client.unbind();
                    }
                    else {
                        console.log('Password changed!');
                    }
                });
            });
        });
    });
});

function encodePassword(password) {
    var newPassword = '';
    password = "\"" + password + "\"";
    for(var i = 0; i < password.length; i++){
        newPassword += String.fromCharCode( password.charCodeAt(i) & 0xFF,(password.charCodeAt(i) >>> 8) & 0xFF);
    }
    return newPassword;
}
