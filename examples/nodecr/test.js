var nodecr = require('nodecr');

// Recognise text of any language in any format
nodecr.process(__dirname + '/path/to/image.jpg',function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});
