if ("geolocation" in navigator) {
    
    navigator.geolocation.getCurrentPosition(function(position) {
        show_map(position.coords.latitude, position.coords.longitude);
      });
}else {
    let browser_error = document.querySelector('.browser_error');
    browser_error.classList.toggle('show_message');
}

function show_map(lat , long) {

    var mymap = L.map('mapid').setView([lat , long], 13);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);
    
     L.marker([lat , long]).addTo(mymap).bindPopup("<b>Dear Lambda Student.<br><br/>This is approximately where you are located right now. </br>Unfortunately, neither Mapquest or LeafLet are able to provide your exact location. Use the search to pull your<br> location from the US Census Bureau API.").openPopup();
     var popup = L.popup();
    
}

