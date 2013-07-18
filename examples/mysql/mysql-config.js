var mysql = require('mysql')
/**
 * 連線的參數設定，包含host, port, username, password, database name等
 */
var db_options = {
    host: 'nko-demo.my.micloud.tw',
    port: 3306,
    user: 'nko',
    password: 'nko2012',
    database: 'nko2012'
};

/**
 * 執行連線動作
 */
var mysql = new require('mysql'), db = null;
if(mysql.createConnection) { //2.0.x
  console.log('using createConnection......');
  db = mysql.createConnection(db_options);
} else if(mysql.createClient) { //0.9.x
  console.log('using createClient......');
  db = mysql.createClient(db_options);
} else { //more older...
  console.log('using mysql.Client....');
  db = new mysql.Client(db_options);
  db.connect(function(err) {
      if(err) {
          console.error('connect db ' + db.host + ' error: ' + err);
          process.exit();
      }
  });
}

/**
 * 將資料庫物件發佈
 * PS: 一般可以直接發佈connection物件，這邊沒這樣做...
 * 原因是因為希望後續引用此物件者也可以執行關閉資料庫的動作
 * 通常在standalone程式會需要執行官必的動作，以避免connection將process卡住
 */
exports.db = db;

