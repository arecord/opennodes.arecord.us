var cheerio = require('cheerio'),
    request = require('request');
request.get('http://opennodes.arecord.us/md/request.md', function(err,res,data){
  $ = cheerio.load(data);
  $('a').each(function(i,d){
    console.log($(this).text());
  });
});

