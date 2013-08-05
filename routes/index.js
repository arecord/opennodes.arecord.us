var marked = require('marked')
  , fs = require('fs')

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mdfiles = function(req, res){
  res.render('index', { title: 'Express' });
};

// exports.getMenu = function(req, res){
//   var menu = fs.readFileSync(__dirname + '/../mdfiles/Menu.json', 'UTF-8');
//   var arr = JSON.parse(menu);

//   var html = '';

//   for(var i = 0 ; i < arr.length ; i++ ) {
//     var _this = arr[i];
//     if(_this.type = 'folder') {
//       html += '<p>'+_this.name+'<br/>';
//       for(var j = 0 ; j < _this.nodes.length ; j++ ) {
//         var _nodes = _this.nodes[j];
//         html += '<small>['+_nodes.name+'](/md/'+_nodes.link+')</small>, ';
//       }
//       html += '<br/></p>\n\n';
//     }
//   }
//   return html;
// }
