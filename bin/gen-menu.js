var nu = require('nodeutil')
  , util = require('util')
  , fs = require('fs');

var cfg = __dirname + '/../mdfiles/Menu.json';
var path = __dirname + '/../mdfiles/Menu.md';

console.log('Will read file from %s', cfg);
var arr = nu.cfgutil.readJsonCfg(cfg);

var html = '* [GitHub](https://github.com/peihsinsu/opennodes)\n';
html += '* [Node.js](http://nodejs.org)\n';
html += '* [About Me](http://about.me/peihsinsu)\n';
html += '---\n\n';

for(var i = 0 ; i < arr.length ; i++ ) {
  var _this = arr[i];
  if(_this.type = 'folder') {
    html += util.format('<p>%s<br/>',_this.name);
    for(var j = 0 ; j < _this.nodes.length ; j++ ) {
      var _nodes = _this.nodes[j];
      html += util.format('<small>[%s](index.html?page=%s)</small>,', _nodes.name, _nodes.link);
    }
    html += '<br/></p>\n\n';
  }
}

console.log(html);
console.log('Will write file to %s', path);
fs.writeFile(path, html, 'utf-8');
