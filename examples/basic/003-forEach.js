var aa = ['aa','bb','cc','dd','ee'];

/**
 * 使用forEach來列舉aa陣列物件
 * callback function的第一個參數是iterate出來的值
 * 第二個參數是count物件，從0開始
 */
aa.forEach(function(t,i){
  console.log('%s is %s', i, t);
})