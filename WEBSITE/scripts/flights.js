var map;
        // window.location.href;
        //var theurl = window.location.toString();
        //initMap() called when Google Maps API code is loaded - when web page is opened/refreshed 
        function initMap() {
            map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
                optimized: false,
				icon: {url: 'plane.png', scaledSize: new google.maps.Size(25, 25)},
				mapTypeId: 'terrain' // can be any valid type
            });
            google.maps.event.trigger(map, 'resize');
        }


    $(document).ready(function () {

        $('#flights').click(function () {
		
			map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
                optimized: false,
				icon: {url: 'plane.png', scaledSize: new google.maps.Size(25, 25)},
				mapTypeId: 'terrain' // can be any valid type
					});
				google.maps.event.trigger(map, 'resize');
			
			$.ajax({
                
				url:"https://aviation-edge.com/v2/public/flights?key=4f1ee1-6d9b51&limit=10",
				type: "GET",
				dataType: "json",
                error: function () {
                $('#error').html('<p>Error<p>');
            },
			
			success: function(data) {
				 
				$.each(data, function(index, val) {
				
                for (var i = 1; i <= 10; i++){
                    var coords1 = data[i].geography.latitude;
                    var coords2 = data[i].geography.longitude;    
                    console.log(coords1, coords2);
                
                var myLatLng = new google.maps.LatLng(coords1, coords2);
                //var coords = val.geometry.coordinates;
				//lat = coords[1]; // geojson uses (lng, lat) ordering so lat stored at coords[1]
                //lng = coords[0]; // lng stored at coords[0]
                
				//var myLatLng = new google.maps.LatLng(data.geography.latitude, data.geography.longitude);
				var marker = new google.maps.Marker({
						position: myLatLng,
						map: map,
						title: "hello",
						icon: "images/plane.png",
					});
                }
				the_href = val.properties.url + "\'" + ' target=\'_blank\'';
                            var infowindow = new google.maps.InfoWindow({
                                content: "We access some external data (in this case it is weather) when we click on a marker. We update the page with the weather information. This method is useful for any data API that can be searched using a lat,lon coordinate."
                            });	
                
				 });  	 
			}
          });
        });	
	});