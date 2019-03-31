/*$(document).ready(function() {
$.ajax({
"url": "https://aviation-edge.com/v2/public/flights?key=4f1ee1-6d9b51",
"type": "get",
"dataType": "json",

"success": function(data) {

	console.log(data);

		for (var i=0; i<data.length; i++) {
			
			
	 
			outputString= data[0].geography+' '+data[0].latitude+' '+data[0].longitude+' '+data[0].altitude+' '+data[0].direction;
			var paragraph = $("<p />", {
				text: outputString
			});
		
			$("#flightbody").append(paragraph);
 
		}
		
		
		},


	});

	
}); */





 /*Initialize and add the map
function initMap() {
  
  // Center the map
  var center = {lat: 2.8, lng: -187.3};
  
  // The map is centered
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 2, center: center});
  
  //The marker, positioned at center
  var marker = new google.maps.Marker({
	  position: center, 
	  map: map,
	  optimized: false,
      icon: {url: 'plane.png', scaledSize: new google.maps.Size(25, 25)},
	  
	  }); 

} */


var map;
        // window.location.href;
        //var theurl = window.location.toString();
        //initMap() called when Google Maps API code is loaded - when web page is opened/refreshed 
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
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
		
			map = new google.maps.Map(document.getElementById('map'), {
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
				
            console.log(data);    
			
				$.each(data, function(index, val) {
				
				var myLatLng = {lat: data.geography.latitude, lng: data.geography.longitude};
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
				the_href = val.properties.url + "\'" + ' target=\'_blank\'';
                            var infowindow = new google.maps.InfoWindow({
                                content: "We access some external data (in this case it is weather) when we click on a marker. We update the page with the weather information. This method is useful for any data API that can be searched using a lat,lon coordinate."
                            });	
				 });  	 
			}
          });
        });	
	});