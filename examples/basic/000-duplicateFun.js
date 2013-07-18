/**
 * Node.js裡面遇到相同名稱function時候
 * 只有後面的那個會被執行(同意於先寫的會被後寫的覆蓋掉)
 */
function foo(x) {
    console.log('Now call X!! x=' + x);
}
function foo(x,y) {
    console.log('Now call XY!! x=' + x);
}
foo('a');

