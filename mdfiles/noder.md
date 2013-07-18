noder
====

noder是一套簡易的HTTP Server，透過指令列啟動該服務後，執行之資料夾以下的檔案則可以透過HTTP的方式存取，可以當做測試HTML, CSS時使用。


## 套件資訊

<div class="pkginfo" data-module-name="noder" data-show="version,dependencies"></div>

## Installation

```
npm install noder -g
```

noder提供了下面操作：

```
# noder --help

  Usage: noder [options]

  Options:

    -h, --help                     output usage information
    -V, --version                  output the version number
    -i, --host address <ip>        Specific host, like 192.168.1.1, default is all ip listened
    -p, --port <port>              Specific port, like 80,3000,8080, default is 1337
    -l, --loglevel <loglevel>      Specific log level, generally like: FATAL, ERROR, WARN, INFO, DEBUG, TRACE
    -a, --allow <allow file type>  Specific the allowed file types that seprate by ",", default is all
    -d, --deny <deny file type>    Specific the denied file types that seprate by ",", default is none
```

## Sample Usage

```
 SimonAIR in ~/project/opennodes
± |gh-pages ✗| → noder
[2013-05-22 18:34:09.639] [INFO] [default] - Noder version: 0.0.7
[2013-05-22 18:34:09.641] [INFO] [default] - Server running at http://127.0.0.1:1337/
[2013-05-22 18:34:09.642] [INFO] [default] - Using log level: INFO (If you want to change, try "export LOV_LEVEL=INFO" in linux or "set LOG_LEVEL=INFO" in windows)

```