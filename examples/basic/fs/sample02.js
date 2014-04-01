var fs =require('fs');

fs.readFile('/etc/hosts', function(e,d){
	if(e) console.log(e);
	fs.writeFile('/tmp/hosts.txt', d, function(e2){
		if(e2) console.log(e2);
	});
});
