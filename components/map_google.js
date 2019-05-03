//WHEN USER VISIT "SEARCH" PAGE FOR FIRST TIME
if ("geolocation" in navigator) {
    
    navigator.geolocation.getCurrentPosition(function(position) {
        show_map(position.coords.latitude, position.coords.longitude);
      });

      
}else {
    let browser_error = document.querySelector('.browser_error');
    browser_error.classList.toggle('show_message');

}


function show_map(lat , long) {
    var my_home;
    var my_lat_long = {lat: lat, lng: long};
    console.log(my_lat_long)
    my_home = new google.maps.Map(document.getElementById('mapid'), {
        center: my_lat_long,
        zoom: 13,
      });
      
      var marker = new google.maps.Marker({
          position: my_lat_long,
          map: my_home,
          title: 'Hello World!',
          //tittle: 'Dear Lambda Student, I could not finish the search functionality on the side but You can hopefully see where you are right know'
      });
}




