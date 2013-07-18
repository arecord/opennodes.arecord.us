var log4js = require('log4js')
  //log的位置，使用環境變數LOGPATH或是預設放在/tmp/node.log
  , logFile = process.env.LOGPATH ? process.env.LOGPATH : '/tmp/node.log'
  //log分類，使用環境變數LOGCATG或是normal
  , logCategory = process.env.LOGCATG ? process.env.LOGCATG : 'normal'
  //log顯示等級，使用環境變數LOGLEVEL或是預設DEBUG
  , logLevel = process.env.LOGLEVEL ? process.env.LOGLEVEL : 'DEBUG'
  //log預設最大size，可作為大log切割使用，使用環境變數LOG_MAX_SIZE或是20480
  , logMaxSize = process.env.LOG_MAX_SIZE ? process.env.LOG_MAX_SIZE : 20480
  //log預設保留份樹，使用環境變數LOG_BACKUP或是7份
  , logBackup = process.env.LOG_BACKUP ? process.env.LOG_BACKUP : 7;

/**
 * 設定你的log屬性
 */
log4js.configure(
{
  "appenders": [
    { type: 'console' }, //使用console log
    { //另外附加一個file log
      "type": "file",
      "filename": logFile,
      "maxLogSize": logMaxSize,
      "backups": logBackup,
      "category": logCategory
    }
  ]
}
);

/**
 * 建立log物件，帶入分類
 */
var logger = log4js.getLogger(logCategory);

/**
 * 設定log等級
 */
logger.setLevel(logLevel);

/**
 * 建立log實體，供外部使用
 */
exports.getInstance = function() {
  return logger;
}
