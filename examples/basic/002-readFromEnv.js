/**
 * 讀取還境變數中名為PATH的便數值
 */
console.log(process.env['PATH']);

/**
 * 設定環境便數值
 */
process.env['NODE_ENV'] = '/opt/node';

//重新讀取
console.log(process.env['NODE_ENV']);