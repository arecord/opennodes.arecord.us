var marked = require('marked')
  , fs = require('fs')

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mdfiles = function(req, res){
  res.render('index', { title: 'Express' });
};
