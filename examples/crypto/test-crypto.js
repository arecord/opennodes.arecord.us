var fs = require('fs')
  , request = require('request')
  , sprintf = require('util').format
  , crypto = require('crypto')
  , id_rsa = fs.readFileSync('/root/.ssh/id_rsa', 'utf8')
  , now = new Date().toUTCString()
  , keyId= '/TS_72_SIMON/keys/SimonDevServer01'
  , key = id_rsa
  , SIGNATURE = 'Signature keyId="%s",algorithm="%s" %s'
  , alg = / DSA /.test(key) ? 'DSA-SHA1' : 'RSA-SHA256'
  , signer = crypto.createSign(alg);

signer.update(now);

var auth = sprintf(SIGNATURE,
                              keyId,
                              alg.toLowerCase(),
                              signer.sign(key, 'base64'));
console.log(auth);

var opt = {
  uri:'https://211.78.254.5/TS_72_SIMON/datasets',
  method:'GET',
  headers: {
    'x-api-version':'~6.5',
    Date: now,
    Authorization: auth
  }
}

console.log(opt);

request(opt, function(e,r,d){
  if(e) console.log(e);
  console.log(d);
});

