OPENNODES 
=========

## Open your way to Node.js
我們想蒐集常使用的一些Node.js基本使用、觀念、NPM套件等資訊於此，一則方便程式寫作時查詢使用，一則也給想要著手Node.js的人有機會可以了解使用Node.js。

## Node.js是啥
Node.js對我來說，他就如C, Java, .Net一樣(當然還有許多程式語言啦，PHP, Python, Ruby...)，都是程式語言，早期的程式語言屬於提供一些邏輯運算功能，透過制定出來的許多協定，如FTP, Socket, DNS, HTTP...，而靜態HTML網頁不能滿足需求後，動帶Web的需求增多。在C的世界，使用CGI方式來提供Web端動態呼叫; Java的世界，使用Servlet建置Web動態程式...而Node.js則是設計基於快速IO的特性，並且實作許多底層協定的操作，尤其以HTTP(S)與Socket服務上實作最為亮眼。再加上基本語法相近於眾所皆知的JavaScript(ECMA實作品)，因此對於熟悉Web開發的工程師都相當容易入手，唯一差別的就是...怎麼去熟悉與使用Library...，我想這是所有語言入門的痛...而Node.js是依據於社群傳播出去的一套語言，基於分享與公開程式碼而強大，更透過NPM(Node Package Management)散播與成整，加入Node.js的開發者不會寂寞，只需要開發者多付出一點點耐心搜尋與品味～

## NPM是啥
NPM - Node Package Management系統，類似於yum, apt-get或Ruby的gem系統，透過此系統，使用者可以快速取用或分享Node.js套件，NPM有幾個我們常用的指令，例如：npm search, npm install, npm update, npm show...，詳細的操作資訊可以參考：[NPM操作說明](index.html?page=NPM.md)，當然，官網也是相當好的參考資源：http://npmjs.org。

## JSON是啥
此部份提到json並非不切題，而是json本身在Node.js或JavaScript的世界中扮演著相當重要的角色，一個Java或C等的物件導向語言很難想像的一個特性...也就是純文字的重要性! 

在物件導向語言中，資料結構多以物件方式存在，而要邏輯中無中生有產生一個物件，則需要透過再更底層的程式來達到，例如Java的Class類別，或是再實作compile source code的方式...然後再載入執行，聽起來就不是個輕鬆的工作。

在這邊我們先記得JSON = JavaScript Object Notation，是一個以純文字來表示物件的一個方式。想想，SOAP中要達到兩種程式語言之間資料交換需要定義多少型別，而json反其道而行，使用基本型別作為結構，以純文字方式架構其結構本身，因此所有語言可以通用，只要再發展基於json的操作方式就無往不利了！

我把我常用的JSON操作記錄於:[JSON操作](index.html?page=JsonOperate.md)，給有興趣的朋友參考。