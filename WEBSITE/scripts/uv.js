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
     
   
    var lat = data2.results[0].geometry.lat;
    var lon = data2.results[0].geometry.lng;
    
    	$.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/uvi?appid=2730b5f7f1b2a5c8426a822aca53fed1&lat=' + lat + '&lon=' + lon,
		type: "GET",
		dataType: "json",
		success: function(data){
			var widget = show(data);
			
			$("#show").html(widget);
    
}
        

        });
}
               

function show(data){
    
return "<h3 text-align:center;><u><strong>Current UV Index</strong></u></h3>" + "<h1>" + data.value + "</h1><br><br>"
	
}



$(document).ready(function(){
	
	$('#submitUVF').click(function(){
        
    var place = $("#place").val();
	var country = $("#country").val();
        
	if(place !='' && country !=''){

	$.ajax({
		
		url: 'https://api.opencagedata.com/geocode/v1/json?q=' + place + "+" + country + '%201DE&key=6eb49be0724d4e918acd96d7c4a7eb94',
		type: "GET",
		dataType: "json",
		success: function(forecastdata){
			var widget = show3(forecastdata);
			
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



function show3(forecastdata){
    
    var lat = forecastdata.results[0].geometry.lat;
    var lon = forecastdata.results[0].geometry.lng;
    
        $.ajax({
		
		url: 'http://api.openweathermap.org/data/2.5/uvi/forecast?appid=2730b5f7f1b2a5c8426a822aca53fed1&lat=' + lat + '&lon=' + lon + '&cnt=6',
		type: "GET",
		dataType: "json",
		success: function(data4){
			var widget = show4(data4);
			
			$("#show4").html(widget);
    
}
        
        });
    
}


function show4(data4){ 
    
    
        var array1 = [];
             
            for(var i=0; i<data4.length; i++) {
            array1.push(data4[i].value);
        }
    
    console.log(array1);
    
             
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'UV Index',
            data: array1,
            backgroundColor: [
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)"
            ],
            borderColor: [
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)",
                "rgba(255,99,132,1)"
                
            ],
            borderWidth: 1
            
        }]
    },
    options: {
        title: {
            display: true,
            text:  '7-Day Forecast'
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    max: 20,
                    beginAtZero: true
                }
            }],
            xAxes: [{

            }]
        }
    }
});

    
}