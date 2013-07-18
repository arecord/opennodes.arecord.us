#!/usr/bin/env node
# Usage: echo HELLO | ./test-pipe.js
var buffer = '';
var stdin = process.openStdin();
stdin.setEncoding('utf8');
stdin.on('data', function (chunk) {
  buffer += chunk;
});

stdin.on('end', function () {
  //TODO: add your operation here...
  console.log(buffer);
});
