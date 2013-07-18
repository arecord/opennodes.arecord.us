var util = require('util')                                                                                                                                
  , cradle = require('cradle')
  , dbusername = 'username' // 填入你的姓名
  , dbpassword = 'password' // 填入你的密碼
  , databasename = 'datatable' // 填入你的資料表名稱
  , db_address = 'db.server.ip.address' //填入你的DB Server位置
  , db_port = 5984 // 如果不是使用預設port，需要修改
  , db = new(cradle.Connection)('http://' + db_address, db_port, {
    auth: { username: dbusername, password: dbpassword },
    cache: false,
    raw: false
  }).database(databasename);


exports.queryExample = function(id, callback) {
  console.log('Query of %s', id);
  db.get( id, function (err, doc) {
    if(err) console.log(err);
    callback(err, doc);
  });
}
/*
ex: sample data: {_id:"simon","_rev":"3-f84647507bd3e29a6deae7c377a74dc","first_name":"simon","last_name":"su"}
this.queryExample('simon',function(err, doc){
  ...
})
*/

//ex: http://123.123.123.123:5984/db/_design/DESIGN/_view/datatable
exports.queryViewExample = function(id, callback) {
  console.log('Query of %s', id);
  db.view( 'domain/userDomain',{key: userid}, function (err, doc) {
    if(err) console.log(err);
    callback(err, doc);
  });
}
/*
ex: sample data: [{key:"simon", value:{....}},{key:"jelly", value:{....}},{key:"kimi", value:{....}}...]
this.queryViewExample('simon',function(err, doc){
  ...
})
*/

exports.createExample = function(id, doc, callback) {
  db.save(id, doc, function(err, res){
    if(err) console.log(err);
    callback(err, res);
    //db.compact();
  });
}
/*
ex: sample input doc={name:"simon",phone:"0953609275"}
this.createExample(id, doc, function(err, res){
  ...
});
*/

exports.updateExample = function(id, doc, callback) {
  db.merge(id, doc, function (err, res) {
    if(err) console.log(err);
    callback(err, res);
  });
}
/*
ex: sample update data id=key_of_row, doc={...}
this.updateExample(id, doc, function(err, res){
  ...
});
*/

exports.deleteExample = function(id, rev, callback) {
  db.remove(id, rev, function(err, res){
    if(err) console.log(err);
    callback(err, res);
  })
}

/** others

//Create Database:
var db = c.database('database_name');
db.create();

//Delete Database
db.destroy(callback);



**/

