var crypto=require("crypto");
var sys=require("sys");
var fs=require("fs");
var hs = require('http-signature');
var ENCODE= 'UTF-8';
var alg = "RSA-SHA256";
var n = new Date().toUTCString();

//public key
var pubKey = fs.readFileSync("/root/.ssh/id_rsa.pub", ENCODE);
//private key
var privKey = fs.readFileSync("/root/.ssh/id_rsa", ENCODE);

var signer = crypto.createSign(alg);
signer.update(n);
var secrit = signer.sign(privKey, 'base64');

console.log('SSH key singed...............................................');
console.log(secrit);


console.log('Compute SSH key to PEM.......................................');
var pem = hs.sshKeyToPEM(pubKey);
console.log(pem);

console.log('Start to verify..............................................');
var ver = crypto.createVerify(alg);
ver.update(n);
var v = ver.verify(pem, secrit, 'base64');
console.log(v);



//console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//console.log(verify);
