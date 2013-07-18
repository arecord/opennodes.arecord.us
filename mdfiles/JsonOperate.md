JSON的操作
===

## 基本語法與概念

JSON全名為JavaScript Object Notation，其原意是要使用純文字的方式來取代物件導向中的物件，整個JSON物件除基本型別之外分成兩種格式：物件、陣列，其中物件語法結構如下：

<img src="http://json.org/object.gif"/>

上面圖像表示JSON物件為使用"{"與"}"組成的文字，左右大括弧中間則是包含一個以上的"string:value"，我們稱為key-value pair，其中key必須為string格式，而value則可以為原生型別或是JSON物件(形成階層式的JSON物件)。

而陣列則可以包含著基本型別與JSON物件，其語法結構如下：

<img src="http://json.org/array.gif"/>

上面圖像表示JSON陣列為"["與"]"所組成的一串文字，左右中括弧間則是包含一個以上的value，此value可以試原生型別或是JSON物件甚至是JSON陣列。


## JavaScript中的JSON操作

在JavaScript中，新增一個空的JSON物件可以這樣做：

```
var json = {};
```

上面json則為一個空的JSON物件。而當需要在其中增加屬性與其對應的值，可以：

```
var json = { "key" : "value" };
```

或是

```
var json = {};
json.key = 'value';
```

或是

```
var json = {};
json['key'] = 'value';
```
由上面的例子可以看出，我們可以將JSON物件當做一個真實的物件，然後透過"."來操作其下的值，也可以使用json['key']的操縱陣列的方式來呼叫其下的值，而操作的定義則包含新增與修改。

```
var json = {};
//新增一個屬性
json.key1 = "value1";
//修改key1
json.key1 = "value2";
```

由此可見，JSON物件是一個可以動態增長的物件，並且可以透過簡單的方式直接操作。

附註：在JSON...嚴格說是JavaScript中，單引號('')與雙引號("")，代表的事同一件事情，就是隔絕一段文字，所以如果文字中有單引號或雙引號，除了使用跳脫字元，也可以交叉使用單引號或雙引號來代替。

## 減少一個node(屬性)

上面範例已經把新增屬性(我喜歡稱為node)跟更新的方式展示過，但是，如果要刪除一個屬性的話，可以透過delete這個指令動作：

```
var a = {"aaa":123, "bbb":223};
console.log(a); //顯示{ aaa: 123, bbb: 223 }

delete a.aaa;
console.log(a); //顯示{ bbb: 223 }
```

而如果你操作的是JSON陣列，則可以透過[underscorejs](index.html=page=underscore.md)這樣做：

<pre class="code" data-js="basic/json/sample01.js"></pre>

結果：

```
# node examples/basic/json/sample01.js
[ 1, 4, 5, 6 ]
```

如果複雜一點，當在操作包含JSON物件或不定值的JSON陣列時，可以這樣做：

<pre class="code" data-js="basic/json/sample02.js"></pre>

結果：

```
node examples/basic/json/sample02.js
Before...
[ { aaa: [ 1, 2, 3 ] }, { bbb: { a: 111, b: 222 } } ]
After...
[ { bbb: { a: 111, b: 222 } } ]
```

以上，感謝underscore的作者，太佛心來著的～！

## node可以是function，而且可以操作

我本身常用JSON來做另一件事情...整理測試code...，可以把一些測試function寫在一支json下面，然後最後透過指令列參數來動態帶入要執行的function是哪一個...

```
//整理測試範例
var dbo = {
  create : function(){
    //do create
  },
  query : function(){
    //do query
  },
  delete : function(){
    //do delete
  },
  update: function(){
    //do update
  }
}

//執行測試
dbo[process.argv[2]]();
```

而執行上面的程式只要：

```
# node test.js create 
```

想測試update的時候，可以把create換成update就好...

由上面的範例可知，如果希望組織您的code變成階層式的語意，例如在Java中的System.out.println這樣的一個function，則可以這樣寫：

```
var System = {
  out: {
    println: function(msg) {
      console.log(msg);
    }
  }
}

//則程式可以這樣呼叫
System.out.println('HELLO!');
```
語意的部份，見仁見智，一般好解讀的程式會更吸引開發者使用喔！


