var map;

    function initMap() {
        map = new
        google.maps.Map(document.getElementById('mapLayout'),
            {
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