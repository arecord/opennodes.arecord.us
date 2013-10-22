gapitoken
====

gapitoken是使用Node.js實作Oauth2認證的一個模組，透過API console中申請一個service account，並使用api console產生的p12 key所轉換的pem key，就可以快速的與API進行認證。此種(service account)與API認證的方式適用於提供查詢服務的應用程式，不需要與user的Auth做互動，與API的互動完全是透過應用程式owner所申請的service account之全縣。

## 套件資訊

<div class="pkginfo" data-module-name="gapitoken" data-show="version,dependencies"></div>

## Installation

```
npm install gapitoken
```

## 準備API pem key

從API console下載的key為副檔名p12的key，需要透過openssl轉換為pem key

```
$ openssl pkcs12 -in privatekey.p12 -out privatekey.pem -nocerts
$ openssl rsa -in privatekey.pem -out key.pem
```

## 使用說明

準備連線需要的資訊

```
var opts = {
    iss: '860835...6s1@developer.gserviceaccount.com',
    scope: 'https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform',
    keyFile: __dirname + '/key.pem'
};
```

透過GAPI物件，進行Auth連線動作，實際token可以gapi.getToken()的callback中取得...

```
var gapi = new GAPI(opts, function(err) {
  if (err) return console.log(err);
  gapi.getToken(function(err, token) {
    if (err)  return console.log(err);
    //這邊已經取到token了
    console.log(token);
  });
});
```

呼叫API，這邊透過request模組做API的呼叫，其中auth token需要放在header的Authorization中...

```
var bqurl = 'https://www.googleapis.com/bigquery/v2/projects/%s/queries';
request({
  url: util.format(bqurl,project),
  method: 'POST',
  headers: {
    "Authorization": "Bearer " + token
  },
  json: {
    query: 'select * from cp300.GetAnimals'
  }
}, function(e,r,d){
  if(e) console.log(e);
  //Print the query result
  console.log(JSON.stringify(d));
});
```


## 使用範例 - 連線BigQuery

<pre class="code" data-js="gapitoken/bq-sample.js"></pre>
