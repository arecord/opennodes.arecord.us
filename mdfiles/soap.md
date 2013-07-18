soap
====

這個套件是Node.js提供來連接SOAP Web Service的

## 套件資訊

<div class="pkginfo" data-module-name="soap" data-show="version,dependencies"></div>

## Installation

```
npm install request
```

## Sample Usage


<pre class="code" data-js="soap/sample01.js"></pre>

下面為ITRI提供的TTS服務連線實作(PS:以下範例只到第一層連線)
<pre class="code" data-js="soap/sample02.js"></pre>

Result:
```
# node examples/soap/sample02.js
{ Result: '0&success&338658' }
```