/* @ Stephen O'Connor */
  (function() {
     
     /*
      * XMLHttpRequest API available to web browser scripting languages such as JavaScript. 
      * It is used to send HTTP or HTTPS requests to a web server and load
      * the server response data back into the script
      */
      
     // open connect and acces the data
     var request = new XMLHttpRequest();
     request.open('GET', 'data.txt', false);
     request.send();
     
     // check request and write to page
     if(request.status===200) {
     console.log(request); 
     document.writeln(request.responseText);
  }
  }());