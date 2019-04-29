if ("geolocation" in navigator) {
    
    navigator.geolocation.getCurrentPosition(function(position) {
        show_map(position.coords.latitude, position.coords.longitude);
      });
}else {
    let browser_error = document.querySelector('.browser_error');
    browser_error.classList.toggle('show_message');
}

function show_map(lat , long) {
    var map;
     map = new google.maps.Map(document.getElementById('mapid'), {
        center: {lat: lat, lng: long},
        zoom: 13
      });    
}

