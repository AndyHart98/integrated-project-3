
$(document).ready(function(){
	
	$('#Floods').click(function(){
		
		$.ajax({
			
			url: "http://environment.data.gov.uk/flood-monitoring/id/floods/105409",
			type: "GET",
			dataType: "json",
			success: function(FloodData){
				var widget = show(FloodData);
				$("#show").html(widget);
			}
		});
		
		
	});
});


function show(FloodData){
		
		return "<h2>County = " + FloodData.items.floodArea.county + "</h2>" +
		       "<h3>Description = " + FloodData.items.message + "</h3>" +
			   "<h3>Severity level = " + FloodData.items.severity + "</h3>" +
			   "<h3>Is the area tidal? = " + FloodData.items.isTidal + "</h3>"  
	}