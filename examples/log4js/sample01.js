var log4js = require('log4js')
  //建立log實體
  , log = log4js.getLogger('TEST');
//設定log type
log4js.loadAppender('console');

//執行log
log.info('HELLO....');

log.info('Test print object %o', {aaa:123});
