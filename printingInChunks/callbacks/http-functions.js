var https = require('https');  // Module that is defined within node.js                    

// function getHTML(options, callback) {
//     var storage = "";
//     https.get(options, function (response) {

//         response.setEncoding('utf8');
      
//         response.on('data', function (data) {
//           storage += data
//           console.log('Chunk Received. Length:', data.length);
//           console.log(data + '\n');
//         });
      
//         response.on('end', function() {
//           console.log(storage)
//           console.log('Response stream complete.');
//           callback(storage);
//         });
      
//       });
      
// }

// var options = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step4.html'
// };

// getHTML(options, printHTML)

module.exports = {
    getHTML: function (options, callback) {
    var storage = "";
    https.get(options, function (response) {

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
}

// getAndPrintHTML(requestOptions);
// getAndPrintHTML({
//     host: 'sytantris.github.io',
//     path: '/http-examples/step1.html'
// });