i = 5;
/**
 * while迴圈，中斷於條件i < process.argv[2]成立時
 */
while(i < process.argv[2]){
  console.log('-->' + i);
  i++;
}
