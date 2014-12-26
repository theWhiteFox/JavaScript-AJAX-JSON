/* @ Stephen O'Connor */
(function () {
   getDataFromText = function () {
      var xmlhttp;
      if (window.XMLHttpRequest) {
         xmlhttp = new XMLHttpRequest();
      } else {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById('data').innerHTML = xmlhttp.responseText;
         }
      };
      xmlhttp.open("GET", "files/data.txt", true);
      xmlhttp.send();
   };
   getDataFromXml = function () {
      var xmlhttp;
      if (window.XMLHttpRequest) {
         xmlhttp = new XMLHttpRequest();
      } else {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            xmldata = xmlhttp.responseXML;
            var films = xmldata.getElementsByTagName("film");
            var output = '<ol>';
            // output += films[0].getElementsByTagName('title')[0].firstChild.nodeValue;
            for (var i = 0; i < films.length; i++) {
               output += '<li>' + films[i].getElementsByTagName('title')[0].firstChild.nodeValue + '</li>';
            }
            output += '</ol>';
            document.getElementById("data").innerHTML = output;
         }
      };
      xmlhttp.open("GET", "files/films.xml", true);
      xmlhttp.send();
   };
   getDataFromJson = function () {
      var xmlhttp;
      if (window.XMLHttpRequest) {
         xmlhttp = new XMLHttpRequest();
      } else {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var jsondata = JSON.parse(xmlhttp.responseText); // retrive result as 
            var films = jsondata.films;
            var output = '<ol>';
            for (var i = 0; i < films.length; i++) {
               output += '<li>' + films[i].title + '</li>';
            }
            output += '</ol>';
            document.getElementById("data").innerHTML = output;
         }
      };
      xmlhttp.open("GET", "files/films.json", true);
      xmlhttp.send();
   };
}());