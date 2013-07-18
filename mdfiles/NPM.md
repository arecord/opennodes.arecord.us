NPM使用
===

## 最初的學習 - Help Page

想了解NPM的第一個步驟...看看協助頁面，可以直接打"npm --help"來顯示可以協助的部份
```
npm --help

Usage: npm <command>

where <command> is one of:
    add-user, adduser, apihelp, author, bin, bugs, c, cache,
    completion, config, ddp, dedupe, deprecate, docs, edit,
    explore, faq, find, find-dupes, get, help, help-search,
    home, i, info, init, install, isntall, la, link, list, ll,
    ln, login, ls, outdated, owner, pack, prefix, prune,
    publish, r, rb, rebuild, remove, restart, rm, root,
    run-script, s, se, search, set, show, shrinkwrap, star,
    start, stop, submodule, tag, test, tst, un, uninstall,
    unlink, unpublish, unstar, up, update, version, view,
    whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm faq          commonly asked questions
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    /Users/simonsu/.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@1.1.65 /usr/local/lib/node_modules/npm
```

## 套件的搜尋

NPM提供指令方式的關鍵字搜尋功能，可以透過在指令列模式透過npm search來達到搜尋套件的目的：

```
# npm search noder
npm http GET https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1368448152633
npm http 200 https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1368448152633
NAME           DESCRIPTION                                                   AUTHOR           DATE              KEYWORDS
geonoder       A NodeJS client for geocoding/reverse address lookup with plug-in services. =dexterp37 2013-05-13 17:09  geocoder geocoding cach
noder          Node.js Simple Web Utility                                    =peihsinsu       2013-05-13 15:37  http server web
noderelict     Instrumentation for node                                      =blindsey        2011-08-28 20:53  node instrumentation performanc
noderest       Noderest a restify-mongo framework                            =jaisonjustus    2012-11-29 19:51  api rest framework
noderiaktools  Backup and restore for node json documents                    =stevewillcock   2013-02-14 21:17  riak
noderpc        A framework for building distributed services with NodeJS     =brstgt =lociii  2011-05-18 09:54  rpc rmi service distributed
noderpt        Node.js Report Utility                                        =peihsinsu       2013-03-29 01:26  report
```

## 檢視套件詳細設定(package.json)

使用npm show可以列出該套件的詳細資訊，大部分資訊記錄於套件底下的package.json，另外有包含程式上版的資訊喔！下面是執行範例，其中time欄位就是個版本publish的時間：

```
# npm show noder
npm http GET https://registry.npmjs.org/noder
npm http 304 https://registry.npmjs.org/noder

{ name: 'noder',
  description: 'Node.js Simple Web Utility',
  'dist-tags': { latest: '0.0.6' },
  versions:
   [ '0.0.1',
     '0.0.2',
     '0.0.3',
     '0.0.4',
     '0.0.5',
     '0.0.6' ],
  maintainers: 'peihsinsu <simonsu.mail@gmail.com>',
  time:
   { '0.0.1': '2013-03-29T02:13:21.133Z',
     '0.0.2': '2013-04-07T18:28:47.124Z',
     '0.0.3': '2013-05-04T11:06:21.644Z',
     '0.0.4': '2013-05-04T11:24:01.389Z',
     '0.0.5': '2013-05-13T13:54:20.591Z',
     '0.0.6': '2013-05-13T15:37:19.113Z' },
  author: 'Simon Su <simonsu.mail@gmail.com>',
  repository:
   { type: 'git',
     url: 'https://github.com/peihsinsu/noder' },
  version: '0.0.6',
  contributors: 'Simon Su <simonsu.mail@gmail.com>',
  dependencies:
   { underscore: '*',
     log4js: '*',
     commander: '*' },
  keywords: [ 'http', 'server', 'web' ],
  main: 'index',
  engines: { node: '>= 0.8.0' },
  directories: { bin: './bin', lib: './lib' },
  optionalDependencies: {},
  bin: { nhelp: 'bin/nhelp', noder: 'bin/noder' },
  readmeFilename: 'README.md',
  dist:
   { shasum: '1b7df135f2ac6a3ff1253105dab66fd634bf5cc0',
     tarball: 'http://registry.npmjs.org/noder/-/noder-0.0.6.tgz' } }
```

## Npm進階操作-套件描述檔

Npm全名Node Package Management，是一個Node專屬的套件管理工具，每個package都有自己的套件描述檔，該檔案是以json方式編輯，您可以用node view <package name>來檢是該套件的描述檔案，該檔案實際位置是位於套件中根目錄的package.json中，而package.json的由來是由CommonJS Package/1.0的規格書(specification)中開始定義的。下面展示一些取得套件描述的使用方式：

```
$ npm view mail
npm http GET https://registry.npmjs.org/mail
npm http 200 https://registry.npmjs.org/mail

{ name: 'mail',
  description: 'This SMTP client library for Node.JS helps you send email safely and easily.',
  'dist-tags': { latest: '0.2.3' },
  versions: 
   [ '0.1.0',
     '0.1.1',
     '0.2.1',
     '0.2.2',
     '0.2.3' ],
  maintainers: 'weaver <ben@orangesoda.net>',
  author: 'Ben Weaver <ben@orangesoda.net>',
  time: 
   { '0.1.0': '2011-03-28T20:36:45.470Z',
     '0.1.1': '2011-03-28T20:36:45.470Z',
     '0.2.1': '2011-03-28T20:36:45.470Z',
     '0.2.2': '2011-03-28T21:40:23.031Z',
     '0.2.3': '2011-06-14T20:01:10.032Z' },
  version: '0.2.3',
  contributors: [],
  dependencies: { reparse: '>= 0.1.2' },
  keywords: 
   [ 'email',
     'mail',
     'message',
     'address',
     'smtp',
     'tls',
     'auth' ],
  directories: { lib: './lib' },
  main: './lib/index',
  scripts: {},
  bin: {},
  engines: { node: '>= 0.4.0' },
  dist: 
   { shasum: '1eddfe74bb38d7ebff6211aa903ba6beaf96ec24',
     tarball: 'http://registry.npmjs.org/mail/-/mail-0.2.3.tgz' },
  devDependencies: {},
  optionalDependencies: {} }
```  

如果想要單看某個屬性的值，可使用npm view <package name> [parameter key]來檢視該屬性值，例如mail套件中有dist的屬性，可以用下面指令取出該屬性之值：

```
$ npm view mail dist
npm http GET https://registry.npmjs.org/mail
npm http 304 https://registry.npmjs.org/mail

{ shasum: '1eddfe74bb38d7ebff6211aa903ba6beaf96ec24',
  tarball: 'http://registry.npmjs.org/mail/-/mail-0.2.3.tgz' }
```

而因為繼承了json得特性，npm中可以使用object.parameter的方式，更進階取得該物件中的參數值：

```
$ npm view mail dist.tarball
http://registry.npmjs.org/mail/-/mail-0.2.3.tgz
```

以上這些取值方式，可以很方便的在批次自動化的程式中提供幫助噢！

Npm套件描述檔相關說明文件可以使用npm help json來檢視：

```
$ npm help json

NPM-JSON(1)                                                        NPM-JSON(1)

NAME
       npm-json -- Specifics of npm's package.json handling

DESCRIPTION
       This  document  is  all  you need to know about what's required in your
       package.json file.  It must be  actual  JSON,  not  just  a  JavaScript
       object literal.

       A  lot  of  the  behavior described in this document is affected by the
       config settings described in npm help config.

DEFAULT VALUES
       npm will default some values based on package contents.

       o   "scripts": {"start": "node server.js"}

           If there is a server.js file in the root of your package, then  npm
           will default the start command to node server.js.

       o   "scripts":{"preinstall":  "node-waf clean || true; node-waf config-
           ure build"}
: ... (Skip)
```

其他npm package description中的參數也都有支援npm help文件，例如package.json中的bin描述文件如下：

```
$ npm help bin

NPM-BIN(1)                                                          NPM-BIN(1)

NAME
       npm-bin -- Display npm bin folder

SYNOPSIS
       npm bin

DESCRIPTION
       Print the folder where npm will install executables.

SEE ALSO
       o   npm help prefix

       o   npm help root

       o   npm help folders

       o   npm help config

                                  March 2012                        NPM-BIN(1)
(END) 
```

更多的npm help說明文件，可以使用npm help <key word>來檢視，例如您想要找跟script相關的文件，可以透過npm help script來尋找，右邊將會該key word的hits數，可供搜尋的參考：

```
$ npm help script
Top hits for "script"
————————————————————————————————————————————————————————————————————————————————
npm help scripts                      script:45
npm help json                         script:23
npm help config                       script:20
npm help developers                   script:9
npm help index                        script:7
npm help run-script                   script:7
npm help restart                      script:6
npm help semver                       script:1
...(Skip)
npm help completion                   script:1
npm help whoami                       script:1
————————————————————————————————————————————————————————————————————————————————
(run with -l or --long to see more context)
```

## Npm進階操作-Npm搜尋
Npm的另一個特異功能就是可以透過一些工具作搜尋，您不用怕在茫茫網海當中，找不到想要的套件...

Npm搜尋指令：npm search <key word>

```
$ npm search mail
npm http GET https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1333211345000
npm http 200 https://registry.npmjs.org/-/all/since?stale=update_after&startkey=1333211345000
NAME                  DESCRIPTION
amazon-ses            Simple Amazon SES Mailer
aws-lib               Extensible Node.js library for the Amazon Web Services API
baunsu                Library to parse and detect bounced emails
cloudmailin           cloudmailin testing service
...(Skip)
winston-mail2         A mail transport for winston
```

## Npm網站搜尋：http://search.npmjs.org

您如我有瀏覽器，可以使用Npm提供的網站搜尋工具，進入npm官方網站：http://npmjs.org/ 後，點選下面的Search for Packages鏈結，就可以打開Npm的搜尋頁面。或是直接鍵入搜尋頁面的網址，搜尋頁面的網址為：http://search.npmjs.org 。

當然，您也可以發佈Npm套件，相關的說明...容後再述，可先參考Npm Publish Docs：http://npmjs.org/doc/publish.html


