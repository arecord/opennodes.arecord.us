bigquery module
====

bigquery模組維Google BigQuery服務的SDK實作，使用restful api方式與BigQuery API服務串街，並透過google-api-utility提供認證部分實作。

## 套件資訊

<div class="pkginfo" data-module-name="bigquery" data-show="version,dependencies"></div>

## Installation

```
npm install bigquery 
```

## 申請Oauth2 (同google-api-utility)

Google Oauth2的Account有包含Web Account, Service Account, Device Account等，下面會稍微提到一下Web Account與Service Account的認證方式... 而申請，需要到Google Cloud Console中申請，進入：http://cloud.google.com/console 後，點選進入您您的專案後，進入 APIs & auth > Credentials 申請。

## Service Account Auth Sample Usage

初始化：

```
var bq = require('bigquery')
  , fs = require('fs')
	, prjId = 'your-bigquery-project-id'; //you need to modify this

	bq.init({
			client_secret: '/path-to-client_secret.json',
			key_pem: '/path-to-key.pem'
	});
```

查詢範例：

```
bq.job.query(prjId, 'select count(*) from publicdata:samples.wikipedia', function(e,r,d){
	  if(e) console.log(e);
		  console.log(JSON.stringify(d));
});
```

完整範例：

<pre class="code" data-js="bigquery/sample01.js"></pre>
