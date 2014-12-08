/* @ Stephen O'Connor */
(function() {
   
$.getJSON('data.json', function(data) {   
   // console.log(data); // test data loaded
   var output = '<ul class="searchresults">';
   $.each(data, function(key, val) {
      output += '<li>';
      output += '<h2>'+ val.name +'</h2>';
      output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ 
              val.name +'" />';
      output += '<p>' + val.bio + '</p>';
      output += '</li>';        
   });
   output += '</ul>';
   $('#update').html(output);
}); // get JSON

}());