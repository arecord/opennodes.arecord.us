var marked = require('marked')
  , fs = require('fs')

/**
 * Translate markdown text to html
 */
function mkup(txt) {
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    langPrefix: 'language-',
    highlight: function(code, lang) {
      if (lang === 'js') {
        return highlighter.javascript(code);
      }
      return code;
    }
  });
  return marked(txt);
}
exports.md2html = mkup;

/**
 * Get the menu html
 */
exports.getMenu = function(){
  var menu = fs.readFileSync(__dirname + '/../mdfiles/Menu.json', 'UTF-8');
  var arr = JSON.parse(menu);

  var html = '';

  for(var i = 0 ; i < arr.length ; i++ ) {
    var _this = arr[i];
    if(_this.type = 'folder') {
      html += '<p>'+_this.name+'<br/>';
      for(var j = 0 ; j < _this.nodes.length ; j++ ) {
        var _nodes = _this.nodes[j];
        html += '<small>['+_nodes.name+'](/md/'+_nodes.link+')</small>, ';
      }
      html += '<br/></p>\n\n';
    }
  }
  return mkup(html);
}
