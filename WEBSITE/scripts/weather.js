//example code taken from:
//https://developers.google.com/maps/documentation/javascript/examples/marker-simple
//https://developers.google.com/maps/documentation/javascript/examples/event-simple

var map;

    function initMap() {
        map = new
        google.maps.Map(document.getElementById('mapLayout'),
            {
            zoom: 2,
            center: new google.maps.LatLng(32.4084873,16.1851318),
            mapTypeId: 'terrain'
        });
    }

    var thelocation;
    var titleName;

$(document).ready(function(){
	
	$('#submitWeather').click(function(){
		
	var city = $("#city").val();
	
	if(city !=''){

	$.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=0d5adfc3ac326556c4021c8e60b3345e",
		type: "GET",
		dataType: "json",
		
		success: function(data){
			var widget = show(data);
					
			$("#show").html(widget);
			
			$("#city").val('');
			
			var myLatLng = {lat: data.coord.lat, lng: data.coord.lon};
	
	map = new google.maps.Map(document.getElementById('mapLayout'), {
                zoom: 5,
                center: myLatLng,
                mapTypeId: 'terrain'
            });
			
		var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: data.name
        });
		map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
      }
	});
	
	}else{
		$("#error").html('Field cannot be empty');
	}
	});
});

function show(data){
	return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" + "<h2><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'></h2>" +
		   "<h3><strong>Weather: "+ data.weather[0].main +"</h3>" +
		   "<h3>Description: " + data.weather[0].description.charAt(0).toUpperCase() +  data.weather[0].description.slice(1) + "</h3>" +
		   "<h3>Temperature: "+data.main.temp + "&deg;C</h3>" +
		   "<h3>Minimum Temperature: "+data.main.temp_min + "&deg;C</h3>" +
		   "<h3>Maximum Temperature: "+data.main.temp_max + "&deg;C</h3>" +
		   "<h3>Pressure: "+data.main.pressure + "hPa</h3>" +
		   "<h3>Humidity: "+data.main.humidity + "%</h3>" +
		   "<h3>Wind Speed: "+data.wind.speed + "m/s</h3>" +
		   "<h3>Wind Direction: "+data.wind.deg + "&deg;</h3>" +
		   "<h3>Cloudiness: "+data.clouds.all + "%</h3>"        
	}
