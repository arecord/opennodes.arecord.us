var tty = require('tty.js');

var app = tty.createServer({
  shell: 'bash',
  users: {
    foo: 'bar'
  },
  "https": {
    "key": "/opt/local/etc/openssl/private/selfsigned.pem",
    "cert": "/opt/local/etc/openssl/private/selfsigned.pem"
  },
  port: 10000
});

app.listen();