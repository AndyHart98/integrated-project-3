$(document).ready(function(){
	
	$('#submitWeather').click(function(){
	
	var city = $("#city").val();
	
	if(city !=''){

	$.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=0d5adfc3ac326556c4021c8e60b3345e",
		type: "GET",
		dataType: "jsonp",
		success: function(data){
			var widget = show(data);
			
			$("#show").html(widget);
			
			$("#city").val('');
		}
	});
	
	}else{
		$("#error").html('Field cannot be empty');
	}
	});
});

function show(data){
	return "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> " +
		   "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>" +
		   "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
		   "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
		   "<h3><strong>Temperature</strong>: "+data.main.temp + "&deg;C</h3>" +
		   "<h3><strong>Pressure</strong>: "+data.main.pressure + "hPa</h3>" +
		   "<h3><strong>Humidity</strong>: "+data.main.humidity + "%</h3>" +
		   "<h3><strong>Minimum Temperature</strong>: "+data.main.temp_min + "&deg;C</h3>" +
		   "<h3><strong>Maximum Temperature</strong>: "+data.main.temp_max + "&deg;C</h3>"


}
