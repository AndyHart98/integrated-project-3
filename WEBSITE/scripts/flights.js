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
         var theurl = window.location.toString();
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
			
			$.ajax({
                url:"https://aviation-edge.com/v2/public/flights?key=4f1ee1-6d9b51",
				
				"type": "get",
				"dataType": "json",
                
                error: function () {
                $('#error').html('<p>Error<p>');
            },
			
			
			success: function (data) {
                
                
				
				$.each(data.geography, function(key, data) {

					var latLng = new google.maps.LatLng(data.latitude, data.longitude);

					var marker = new google.maps.Marker({
					  position: latLng,
					  map: map,
					  icon: {url: 'plane.png', scaledSize: new google.maps.Size(25, 25)},

					});
					
				 });  
				 
            }
			
          });
		  
        });	
		
	});
	
			
			

