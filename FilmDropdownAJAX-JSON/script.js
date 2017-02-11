/* @ Stephen O'Connor */
(function () {
   getFilmTitle = function () {
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
            var output = '<form>';
            output+='<select id="film_select" onchange="filmSelect()" >';
            for (var i = 0; i < films.length; i++) {
               output += '<option value="'+i+'">' + films[i].title + '</option>';
            }
            output += '</select>';
            output += '</form>';
            document.getElementById("film_title").innerHTML = output;
         }
      };
      xmlhttp.open("GET", "films.json", true);
      xmlhttp.send();
   };
   
   window.onload = getFilmTitle;

   filmSelect = function(){
      var selectBox = document.getElementById('film_select');
      var filmIndex = selectBox.options[selectBox.selectedIndex].value;
      getFilmInfo(filmIndex);
   };

   getFilmInfo = function(index) {
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
            var output = '';
            output+='<li>Year: '+films[index].year+'</li>';
            output+='<li>Genre: '+films[index].genre+'</li>';
            output+='<li>Director: '+films[index].director+'</li>';           
       
            document.getElementById("film_info").innerHTML = output;
         }
      };
      xmlhttp.open("GET", "films.json", true);
      xmlhttp.send();
   };
   
   
}());