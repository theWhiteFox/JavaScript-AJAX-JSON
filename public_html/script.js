/* @ Stephen O'Connor */
(function() {
   
   var zx = document.getElementById("button");   
   zx.onclick = loadAJAX;
   
     function loadAJAX() {
      var request;
      if (window.XMLHttpRequest) {
         request = new XMLHttpRequest();
      } else {
         request = new ActiveXObject("Mircosoft.XMLHTTP");
      }
      request.open('GET', 'data.json');
      request.onreadystatechange = function () {
         if ((request.readyState === 4) &&
                 (request.status === 200)) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
            for (var key in items) {
               output += '<li>' + items[key].name + '</li>';
            }
            output += '</ul>';
            document.getElementById('update').innerHTML = output;
         }
      };
      request.send();

   }; // loadAJAX 

}());