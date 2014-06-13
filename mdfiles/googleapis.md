googleapis module
====

googleapis維Google所提供的一套Node.js的Google API操作工具，透過羽量級的Node.js SDK套件，可以輕易的操作Google各種API服務，使用前記得搭配Google API Explore做測試，會有意想不到的效果！

## 套件資訊

<div class="pkginfo" data-module-name="googleapis" data-show="version,dependencies"></div>

## Installation

```
npm install googleapis 
```

## 申請Oauth2

Google Oauth2的Account有包含Web Account, Service Account, Device Account等，下面會稍微提到一下Web Account與Service Account的認證方式... 而申請，需要到Google Cloud Console中申請，進入：http://cloud.google.com/console 後，點選進入您您的專案後，進入 APIs & auth > Credentials 申請。

## Web Application Auth Sample Usage

Web Application Account主要是透貴使用者親自操作認證動作，並將服務授權給Web的一種認證授權方式，帳號申請後，需要透過設定Redirect Url來接收Oauth2 Service將授與授權的Access Token，讓服務可以使用此Token來操作API...，下面是官方Github所提供的執行範例：

<pre class="code" data-js="googleapis/sample-web-acc.js"></pre>

## Service Account Auth Sample Usage

Service Account則是不需要透過使用者角色認證的Oauth方式，透過Google所給予的一組P12金鑰與帳號，使用JWT方式加密傳輸的Access Token來存取API服務...

<pre class="code" data-js="googleapis/sample-srv-acc.js"></pre>
