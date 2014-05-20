// Test by: cat /etc/hosts | node pipe.js
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(d) {
	  console.log(d);
});
