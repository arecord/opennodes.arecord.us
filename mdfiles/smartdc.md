smartdc module
====

smartdc是一套Joyent原廠提供連線Joyent Cloud Platform - SmartDataCenter的套件，裡面提供CLI與node.js的操作方法，可以直接與cloudapi進行溝通，並且達到管理cloud machine相關的動作。

## 套件資訊

<div class="pkginfo" data-module-name="smartdc" data-show="version,dependencies"></div>

## Installation

安裝上，因為要預設把CLI也安裝到環境變數，所以加上"-g"參數，讓npm將CLI tools發佈在環境變數上。

```
npm install smartdc -g
```

安裝完後，你將會得到下面的指令：

```
sdc-addmachinetags            sdc-getdataset                sdc-listmachines
sdc-createinstrumentation     sdc-getinstrumentation        sdc-listmachinesnapshots
sdc-createkey                 sdc-getkey                    sdc-listmachinetags
sdc-createmachine             sdc-getmachine                sdc-listpackages
sdc-createmachinesnapshot     sdc-getmachinemetadata        sdc-rebootmachine
sdc-deleteinstrumentation     sdc-getmachinesnapshot        sdc-resizemachine
sdc-deletekey                 sdc-getmachinetag             sdc-setup
sdc-deletemachine             sdc-getpackage                sdc-startmachine
sdc-deletemachinemetadata     sdc-listdatacenters           sdc-startmachinefromsnapshot
sdc-deletemachinesnapshot     sdc-listdatasets              sdc-stopmachine
sdc-deletemachinetag          sdc-listinstrumentations      sdc-updatemachinemetadata
sdc-describeanalytics         sdc-listkeys
```

關於smartdc官方的文件，請參考：http://sdcdoc.joyent.com/sdcdoc/display/sdc/API+Documentation

## Sample Usage

<pre class="code" data-js="smartdc/test-smartdc.js"></pre>
