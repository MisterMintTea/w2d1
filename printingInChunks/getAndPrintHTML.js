var https = require('https');                               

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

var storage = "";

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    storage += data
    console.log('Chunk Received. Length:', data.length);
    console.log(data + '\n');
  });

  response.on('end', function() {
    console.log(storage)
    console.log('Response stream complete.');
  });

});