/**
 * 包裝於nodeutil的使用方式
 */
var nu = require('nodeutil');
var mailer = nu.mailutil;

mailer.init(
  {"smtpOptions":{"service":"Gmail", 
    "auth": {"user": "your-account","pass": "your-password"}}, 
    "sender": "NO-REPLY <no-reply@your.domain>"}
);

mailer.sendTemplateMail({
  sender:"Simon Su <simonsu@ooo.xxx.tw>",
  receivers:["receiver@ooo.xxxx.tw"],
  subject:"Test template mail",
  contentTemplate:__dirname + "/test-nmail.tpl",
  contentValues:{
    USER:"Simon",
    DATE:new Date().toString()
  }
}, function(res){
  console.log(res);
});
