/**
 * Example:
 * wg-sitemap -m ../micloud.github.com/mdfiles/ -o ../micloud.github.com/site-map.xml
 */
var fs = require('fs')
  , nu = require('nodeutil')
  , util = require('util')
  , _ = require('underscore')
  , logger = require('../lib/logger')

var mdfilepath = __dirname + '/../mdfiles';

// Site map template layout
var tpl = '<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> %s </urlset>'; 
  //fs.readFileSync(tplpath, 'utf8');
// Site map subset layout
var map = '<url><loc>%s</loc></url>';

// Start to convert site map
//wikitpage.toSiteMap(mdfilepath, sitemappath, tpl, map);

/**
 * Convert mdfiles to site map format
 */
exports.toSiteMap = function(cb){
  var maps = '';
  fs.readdir(mdfilepath, function(e, files) {
    files.forEach(function(file, i) {
      console.log('Processing of %s (md file: %s)', file, file.endsWith('.md'));
      if(file.endsWith('.md')) {
        //maps += util.format(map, 'http://doc.micloud.tw/index.html?page='+file);
        maps += util.format(map, 'http://doc.micloud.tw/html/'+file.replace(/\.md/g, '.html'));
      }
    });

    var out = util.format(tpl, maps);
    cb(out);
  });
}
