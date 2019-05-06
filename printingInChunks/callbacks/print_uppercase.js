var getHTML = require('./http-functions');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6.html'
  };
  
  function printUpperCase (html) {
      console.log(html.toUpperCase());
  }

  
  getHTML.getHTML(options,printUpperCase)
  
  