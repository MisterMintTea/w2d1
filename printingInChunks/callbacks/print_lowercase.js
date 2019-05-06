var getHTML = require('./http-functions');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
  };
  
  function printLowerCase (html) {
      console.log(html.toLowerCase());
  }

  
  getHTML.getHTML(options,printLowerCase)
  
  