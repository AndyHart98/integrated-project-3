
$(document).ready(function(){
	
	$('#Floods').click(function(){
		
		$.ajax({
			
			url: "https://environment.data.gov.uk/flood-monitoring/id/floods",
			type: "GET",
			dataType: "json",
			success: function(FloodData){
				//for (j = 0; j < FloodData.items.length; j++) {
				var widget = show(FloodData);
				$("#show").html(widget);
				//}
			}
		});
		
	});
});


function show(FloodData){
		
		
		
		
		
		
		
		for (i = 0; i < FloodData.items.length; i++) {
		var obj = FloodData.items[i];
		console.log(obj);
		document.write("<h2>County = " + FloodData.items[i].floodArea.county + "</h2>" +
		               "<h3>Description = " + FloodData.items[i].message + "</h3>" +
					   "<h3>Severity level = " + FloodData.items[i].severity + "</h3>" +
					   "<h3>Is the area tidal? = " + FloodData.items[i].isTidal + "</h3>" +
					   "<h3>Severity Level Number = " + FloodData.items[i].severityLevel + "</h3>")
		
		
		
		
		
		//return "<h2>County = " + FloodData.items[i].floodArea.county + "</h2>" +
		       //"<h3>Description = " + FloodData.items[i].message + "</h3>" +
			  // "<h3>Severity level = " + FloodData.items[i].severity + "</h3>" +
			   //"<h3>Is the area tidal? = " + FloodData.items[i].isTidal + "</h3>"  
		}
	}