/* @ Stephen O'Connor */
  (function() {
     
     /*
      * XMLHttpRequest API available to web browser scripting languages such as JavaScript. 
      * It is used to send HTTP or HTTPS requests to a web server and load
      * the server response data back into the script
      * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
      */
      
     // open connect and acces the data
     // change open method remove false 
     // add event handler
     // more compatible with older browsers
     var request;
     if(window.XMLHttpRequest) {
        request = new XMLHttpRequest();
     } else {
        request = new ActiveXObject("Mircosoft.XMLHTTP");
     }     
     request.open('GET', 'data.txt');
     request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status===200)) {
           console.log(request);
           document.writeln(request.responseText);
        }
     };
     request.send();     

  }());