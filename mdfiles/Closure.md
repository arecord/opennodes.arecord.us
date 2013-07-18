Closure
====

引用良葛葛的一段Closure定義：

所謂的Closure，是指一個函式物件（或函式值）在建立時，綁定了當時作用範圍（Scope）下有效的自由變數（Free variable）。所 以支援Closure的語言，必須有支援一級函式（First-class function），建立函式物件並不等於建立Closure，建立函式物件時同時綁定了某個（些）自由變數，該函式物件才稱之為Closure。

下面一個簡單的範例：

```
var f = function(x,y){
  return x + y;
}

function foo(callback) {
  var a = 1;
  var b = 2;
  callback(a,b);
}

foo(f);
```

其中function foo()中可以接受一個變數callback，此callback並非一般數值變數，而是可以帶入另一個function的變數，而透過foo中呼叫callback並帶入參數a,b，則可以執行此callback中的內容，此種做法，就是讓javascript的non-block事件得以循序進行？
而 f function 則是指派給 f 變數的一個function，在此就可以作為foo function的input，這樣的寫作方式可以讓f作為可reuse的function，但在方便下，也可以這樣寫：

```
function foo(callback) {
    var a = 1;
    var b = 2;
    callback(a,b);
}

foo(function(x,y){
    return x+y;
});
```

我們把它改寫成Node.js，讓數值在console可以print出來看結果：

```
/*file: test.js*/
function foo(callback) {
    var a = 1;
    var b = 2;
    var result = callback(a,b);
    console.log('Result:'+result);
}

foo(function(x,y){
    return x+y;
});
```

列印結果：

```
$node test.js
Result:3
```
