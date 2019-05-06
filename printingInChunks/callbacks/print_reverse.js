var getHTML = require('./http-functions');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
  };
  
  function printReverse (html) {
      var splitString = html.split("");
      var reverseArray = splitString.reverse();
      var joinArray = reverseArray.join("");
      console.log(joinArray);
  }

  
  getHTML.getHTML(options,printReverse)
  
  