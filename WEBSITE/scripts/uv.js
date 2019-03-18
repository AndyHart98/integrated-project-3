$(document).ready(function(){
	
	$('#submitUV').click(function(){
	
    var lat = $("#lat").val();
	var lon = $("#lon").val();
        
	if(lat !='' && lon !=''){

	$.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/uvi?appid=2730b5f7f1b2a5c8426a822aca53fed1&lat=' + lat + '&lon=' + lon,
		type: "GET",
		dataType: "json",
		success: function(data){
			var widget = show(data);
			
			$("#show").html(widget);
            
            $("#lat").val('');
            $("#lon").val('');
		}
	});
	
	}else{
		$("#error").html('Either field cannot be empty');
	}
	});
});



function show(data){
    
return "<h3 text-align:center;><u><strong>Current UV Index of </strong>" + data.lat + "&deg;, " + data.lon + "&deg;</u></h3>" + "<h1>" + data.value + "</h1>"
	
}


