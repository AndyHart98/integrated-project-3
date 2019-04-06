var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('mapLayout'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3),
            mapTypeId: 'terrain'
        });
        google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
        });
    }

    $(document).ready(function () {

        $('#day').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
        $('#daySig').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; 
                $.each(data.features, function (key, val) {
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker;
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
        $('#hour').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });  
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
        $('#hourSig').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });  
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
        $('#week').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
        $('#weekSig').click(function () {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3),
                mapTypeId: 'terrain'
            });
            $.ajax({
                url:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
            
              success: function (data) {
                  
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                  
                $.each(data.features, function(key, val)
                 {
                var coords = val.geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1], coords[0]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    label: val.properties.mag.toString()
                });
                    
                var infowindow = new google.maps.InfoWindow({
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>More Info</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
        
    });