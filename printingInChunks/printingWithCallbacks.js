var https = require('https');  // Module that is defined within node.js                    

function getHTML(requestOptions, callback) {
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
          callback(storage);
        });
      
      });
      
}

function printHTML (html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)
// getAndPrintHTML(requestOptions);
// getAndPrintHTML({
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
// });