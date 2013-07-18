console.log('-->' + process.argv[2]);
/**
 * 判斷指令列接入參數為何，輸出對應字串
 */
switch ( process.argv[2] ) {
 case '1':
  console.log('==>1');
  break;
 case '10':
  console.log('==>10');
  break;
 default:
  console.log('default...');
 break;
}
