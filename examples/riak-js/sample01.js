//載入必要資源
var db = require('riak-js').getClient()
var db = require('/root/local/lib/node_modules/riak-js/lib').getClient()
var db = require('riak-js').getClient({host: "127.0.0.1", port: "8098" });
//儲存一筆資料
db.save('airlines', 'KLM', {fleet: 111, country: 'NL'}, { links:
      [{ bucket: 'flights', key: 'KLM-8098', tag: 'cargo' },
         { bucket: 'flights', key: 'KLM-1196', tag: 'passenger' }]
         })
//儲存第二筆資料
db.save('airlines', 'KLM2', {fleet: 111, country: 'NL'}, { links:
      [{ bucket: 'flights', key: 'KLM-8098', tag: 'cargo' },
         { bucket: 'flights', key: 'KLM-1196', tag: 'passenger' }]
         })
//查詢某個bucket之資料
db.getAll('airlines')
