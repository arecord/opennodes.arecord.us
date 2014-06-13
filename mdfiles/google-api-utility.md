google-api-utility module
====

google-api-utility是改寫googleapis中access token使用方式的Oauth認證套件，該套件使用Service Account以JWT方式作為基本操作。


## 套件資訊

<div class="pkginfo" data-module-name="google-api-utility" data-show="version,dependencies"></div>

## Installation

```
npm install google-api-utility 
```

## 申請Oauth2 (同googleapis)

需要到Google Cloud Console中申請，進入：http://cloud.google.com/console 後，點選進入您您的專案後，進入 APIs & auth > Credentials 申請。

## Service Account Auth Sample Usage

<pre class="code" data-js="google-api-utility/sample01.js"></pre>
