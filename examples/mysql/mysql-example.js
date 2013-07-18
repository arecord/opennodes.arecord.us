/**
 * 這邊直接引用上面mysql-config所發佈的設定
 */
var config = require('./mysql-config')
  , db = config.db;

/**
 * 使用query function來執行select的動作範例
 */
exports.doit = function() {
db.query('select count(*) as cnt from tb_post', function(err, rows, fiels) {
  if(err) return console.log(JSON.stringify(err));
  console.log(rows);
});
}

/**
 * 執行doit function
 */
this.doit();

/**
 * 執行完畢直接關閉db，以離開程序
 */
db.end();
