var cheerio = require('cheerio'),
    request = require('request');
request.get('http://www.google.com', function(err,res,data){
  $ = cheerio.load(data);
  console.log($('a').text());
});
