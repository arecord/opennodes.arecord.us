riak-js
====

## 套件資訊

<div class="pkginfo" data-module-name="riak-js" data-show="version,dependencies"></div>

## 先介紹安裝Riak...

原始碼安裝方式：自Basho下載Riak套件原始碼，然後解壓縮進行make，如果正確make之後，則會在資料匣內產生rel檔案匣，裡面會有riak資料匣，此為編譯後之位置所在。

```
curl -O http://downloads.basho.com/riak/riak-1.0.2/riak-1.0.2.tar.gz
tar zxvf riak-1.0.2.tar.gz
cd riak-1.0.2
make rel
```

啓動Riak服務：安裝好的riak可透過$RIAK_HOME/bin/riak來作啓動與關閉

```
riak start
```

檢視riak server狀態

```
riak ping
>pong
```

連線進入riak console

```
riak console
(OR riak attach)
```

測試安裝好的Riak：預設安裝好的

```
curl -v http://127.0.0.1:8098/riak/test
```

## 安裝Riak.js
```
npm install riak-js -g
```

## Sample
第一個Riak.js程式

<pre class="code" data-js="riak-js/sample01.js"></pre>

執行與顯示
```
#node /tmp/test.js 
[ { meta: 
     { bucket: 'airlines',
       key: 'KLM',
       vclock: 'a85hYGBgzGDKBVIcypz/fvoLt6/MYEpkzmNlOKbecYIvCwA=' },
    data: { fleet: 111, country: 'NL' } },
  { meta: 
     { bucket: 'airlines',
       key: 'KLM2',
       vclock: 'a85hYGBgzGDKBVIcypz/fvoLt6/KYEpkzGNl+KzecYIvCwA=' },
    data: { fleet: 111, country: 'NL' } } ]
```