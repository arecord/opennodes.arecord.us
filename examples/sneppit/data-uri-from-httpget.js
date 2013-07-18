var http = require('http');
var url = 'https://211.78.254.54:9090/apps/zxtm/';
url += 'zxtmstat.fcgi?w=600&period=5&h=400&axistype=linear&title=Current%20Activity&oids=.1.5.0%4000d840%09.1.7.0%409a41d8&type=image&i=62';
var opt = {
  host: "nodejs.org"
 ,port: 80
 ,method: "GET"
 ,path: "/logo.png"
};

var request = http.request(opt);

request.end();
request.on('response', function (response)
{
    var type = response.headers["content-type"],
        prefix = "data:" + type + ";base64,",
        body = "";

    response.setEncoding('binary');
    response.on('end', function () {
        var base64 = new Buffer(body, 'binary').toString('base64'),
            data = prefix + base64;
        console.log(data);
    });
    response.on('data', function (chunk) {
        if (response.statusCode == 200) body += chunk;
    });
});
