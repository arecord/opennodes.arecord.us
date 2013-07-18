var fs = require('fs')
  , util = require('util')
  , marked = require('marked')
  , nu = require('nodeutil')
  , log = nu.logger.getInstance()
  , j2t = require('json2tree')
  , RSS = require('rss')
  , Author = 'Opennodes'
  , SITE = 'http://peihsinsu.github.io/opennodes'

var feedCfg = {
        title: 'Opennodes RSS',
        description:  'Feeds for opennodes',
        feed_url: SITE + '/feeds.xml',
        site_url: SITE,
        image_url: SITE + '/icon.png',
        author: 'Simon Su'
    };

var treeCfg = JSON.parse(fs.readFileSync(__dirname + '/../mdfiles/Menu.json'));
toRss(treeCfg, 
  __dirname + '/../feeds.xml',
  feedCfg,
  __dirname + '/../mdfiles',
  '/Users/simonsu/project/wikitpage-tools/tpls/template.html')

function toRss(treeCfg, feedsFilePath, feedCfg, mdfilefolder, tpl){
  var site = feedCfg.site_url;
  var feed = new RSS(feedCfg);
  var mdfiles = new Array();
  var links = '<h1 style="vertical-align:middle"><img src="images/wiki-logo.png" width="128px"/><a href="' + site + '">MiCloud Wiki Document</a></h1>';
  var body = '';

  var html_a = '<span style="width:100px"><a href="index.html?page=%s">%s</a></span> &nbsp;';
  var html_page_break = '<hr style="border-top: 1px dotted #f00;"/>';
  var html_body = '<p id="%s"><h1><img width="50px" src="images/book.png"/>%s</h1><br/>%s</p>' + html_page_break;
  
  // List treeCfg to convert page by sequence
  for(var i = 0 ; i < treeCfg.length ; i++) {
    var out = convertNode(treeCfg[i]);
    body += out;
  }

  function convertNode(node) {
    var html = '';
    if(node.type == 'folder') {
      for(var i = 0 ; i < node.nodes.length; i++) {
        html += convertNode(node.nodes[i]);
      }
    } else {
      console.log('>>' + node + '<<');

      var title = '頁面：<a href="html/' + node.link.replace(/\.md/g,'.html') + '">' + node.name + '</a>'+
        '&nbsp;<a href="index.html?page=' + node.link + '">('+node.link+')</a>' +
        '<a href="#' + node.link + '"></a>';
      if(!node.link.endsWith('.md')) {
        //By pass for not markdown files
      } else {
        var content = mkup(fs.readFileSync(mdfilefolder + '/' + node.link, 'utf8'));
        content = content.replace(/index\.html\?page=/g, site + '/html/');
        content = content.replace(/index\.html\?/g,site + '/html/');
        content = content.replace(/\.md\"/g, '.html"');
        content = content.replace(/\"images\//g, '"' + site + '/images/');
        content = content.replace(/\'images\//g, '\'' + site + '/images/');
        html += util.format(html_body, node.link, title, content);

        var filestat = fs.statSync(mdfilefolder + '/' + node.link);

        // Convert and append the data to feeds
        addRss(node.name, 
          content,
          site + '/wiki/index.html?page=' + node.link,
          filestat.mtime);
      }
    }
    return html;
  }

  function addRss(title, descript, url, filedate){
    feed.item({
      title:  title,
      description: descript,
      url: url, // link to the item
      guid: url, // optional - defaults to url
      author: Author || 'Simon Su', // optional - defaults to feed author property
      date: filedate || new Date() // any format that js Date can parse.
    });
  }

  /**
   * Write feeds content to file
   */
  //console.log(feed.xml());
  fs.writeFile(feedsFilePath, feed.xml(), 'utf8', function(err){
    if(err) 
      console.log(err);
    else {
      log.info('Write feeds to file: %s', feedsFilePath);
      log.info('Processing done without error...');
    }
  });
}


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
