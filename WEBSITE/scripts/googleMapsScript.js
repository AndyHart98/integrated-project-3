var map;

    function initMap() {
        map = new
        google.maps.Map(document.getElementById('mapLayout'),
            {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3),
            mapTypeId: 'terrain'
        });
    }

    var thelocation;
    var titleName;
    $(document).ready(function () {

        $('#earthquakes').click(function () {
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
                    content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                });
                    
                marker.addListener('click', function (data) {
                    infowindow.open(map, marker);
                });
                    
                });  
            }
          });
        });
    });