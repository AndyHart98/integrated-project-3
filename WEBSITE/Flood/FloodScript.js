
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
		//document.write("<h2>County = " + FloodData.items[i].floodArea.county + "</h2>" +
		              // "<h3>Description = " + FloodData.items[i].message + "</h3>" +
					 //  "<h3>Severity level = " + FloodData.items[i].severity + "</h3>" +
				// "<h3>Is the area tidal? = " + FloodData.items[i].isTidal + "</h3>" +
					 //  "<h3>Severity Level Number = " + FloodData.items[i].severityLevel + "</h3>")
		
		
		
		console.log(i);
        console.log(FloodData.items.length);
		/*return "<h2>County = " + FloodData.items[i].floodArea.county + "</h2>" +
		       "<h3>Description = " + FloodData.items[i].message + "</h3>" +
			  "<h3>Severity level = " + FloodData.items[i].severity + "</h3>" +
			   "<h3>Is the area tidal? = " + FloodData.items[i].isTidal + "</h3>" */
            
        var h2 = document.createElement("h2");
        var h3 = document.createElement("h3");
        var br = document.createElement("br");
        var node = document.createTextNode("County = ");
        var node2 = document.createTextNode(FloodData.items[i].floodArea.county);
        var node3 = document.createTextNode("Description = " );
        var node4 = document.createTextNode(FloodData.items[i].message);
        var node5 = document.createTextNode("Severity Level = " );
        var node6 = document.createTextNode(FloodData.items[i].severity);
        var node7 = document.createTextNode("Is the area tidal? = " );
        var node8 = document.createTextNode(FloodData.items[i].isTidal);
        var node9 = document.createTextNode("Severity Level Number = " );
        var node10 = document.createTextNode(FloodData.items[i].severityLevel);
        
        
            
            
        h2.appendChild(node);
        h2.appendChild(node2);
        h3.appendChild(node3);
        h3.appendChild(node4);
        
        h3.appendChild(node5);
        h3.appendChild(node6);
            
        h3.appendChild(node7);
        h3.appendChild(node8);
            
        h3.appendChild(node9);
        h3.appendChild(node10);
        var element = document.getElementById("test");
        element.appendChild(h2);
        element.appendChild(h3);  
        
		}
	}