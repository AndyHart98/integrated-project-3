
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
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center); 
				});
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
					createMarker(i);
									 
                    var coords1 = data[i].geography.latitude;
                    var coords2 = data[i].geography.longitude;  
					var coords3 = data[i].geography.direction; 
                    console.log(coords1, coords2, coords3);
                
                var myLatLng = new google.maps.LatLng(coords1, coords2);
				//var myDegree = new google.maps.Point(coords3);
				
                function createMarker(i) {
					
				var marker = new google.maps.Marker({
						position: myLatLng,
						//rotation: myDegree,
						map: map,
						icon: "images/plane.png",
					});
	
                            var infowindow = new google.maps.InfoWindow({
                                content: "<h4>Altitude: " + data[i].geography.altitude + " ft </h4><h4>Departure: " + data[i].departure.iataCode + "</h4> <h4>Arrival: " + data[i].arrival.iataCode + "</h4>"
                            });	
							
							marker.addListener('click', function (data) {
								infowindow.open(map, marker);
							});
				}
				
				}
				
				
   
				});  	 
			}
          });
        });	
	});