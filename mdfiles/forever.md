forever
====

forever是一套啟動Node.js的協助工具，可以讓Node.js的程式執行狀態持續的被監控著，如果程序有異常crash的狀態時候，系統將會自動將服務重新啟動。

## 套件資訊

<div class="pkginfo" data-module-name="forever" data-show="version,dependencies"></div>

## Installation

一般安裝forever時，我們會需要使用到其下的CLI工具來產生專案，所以需要帶入-g的參數來安裝到環境中。

```
npm install forever -g
```

## Sample Usage

啟動某個Node.js應用程式

```
forever start [path to executable js]
```
顯示目前啟動的服務與狀態

```
forever list
```

關閉第i個服務(i為forever list中列出的順序值)

```
forever stop [i]
```

重新啟動第i個服務(i為forever list中列出的順序值)

```
forever restart [i]
```

