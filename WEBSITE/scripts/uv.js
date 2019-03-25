$(document).ready(function(){
	
	$('#submitCoords').click(function(){
	
    var place = $("#place").val();
	var country = $("#country").val();
        
	if(place !='' && country !=''){

	$.ajax({
		
		url: 'https://api.opencagedata.com/geocode/v1/json?q=' + place + "+" + country + '%201DE&key=6eb49be0724d4e918acd96d7c4a7eb94',
		type: "GET",
		dataType: "json",
		success: function(data2){
			var widget = show2(data2);
			
			$("#show2").html(widget);
            
            $("#place").val('');
            $("#country").val('');
		}
	});
	
	}else{
		$("#error").html('Either field cannot be empty');
	}
	});
});


function show2(data2){
     
   
    var lat = $("#lat").val(data2.results[0].geometry.lat);
    var lon = $("#lon").val(data2.results[0].geometry.lng);
    
}






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
    
return "<h3 text-align:center;><u><strong>Current UV Index</strong></u></h3>" + "<h1>" + data.value + "</h1>"
	
}





$(document).ready(function(){
	
	$('#submitUVF').click(function(){
	
    var lat = $("#lat").val();
	var lon = $("#lon").val();
        
	if(lat !='' && lon !=''){

	$.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/uvi/forecast?appid=2730b5f7f1b2a5c8426a822aca53fed1&lat=' + lat + '&lon=' + lon + '&cnt=6',
		type: "GET",
		dataType: "json",
		success: function(data3){
			var widget = show3(data3);
			
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



function show3(data3){
    
console.log(data3);
	
}