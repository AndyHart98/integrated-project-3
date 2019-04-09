
	
	
$(document).ready(function(){
	
	$('#Floods').click(function(){
		
		$("#show").html("");
		
		
		$.ajax({
			
			url: "https://environment.data.gov.uk/flood-monitoring/id/floods",
			type: "GET",
			dataType: "json",
			success: function(FloodData){
				
			
				if(FloodData.items === undefined || FloodData.items.length == 0) {
					error()
					
					var errorCall = error;
					$("#error").html(errorCall);
				} else {
					
				
				var widget = show(FloodData);
				$("#show").html(widget);
				
				
				}
			}
		});
		
		
		
		
		
		
	});
	
	$('#FloodsGraph').click(function(){
		
		
		$("#showGraph").html("");
		
		$.ajax({
			
			url: "https://environment.data.gov.uk/flood-monitoring/id/floods",
			type: "GET",
			dataType: "json",
			success: function(FloodData){
				
				
				
				
					if(FloodData.items === undefined || FloodData.items.length == 0) {
					error()
					
					var errorCall = error;
					$("#error").html(errorCall);
				} else {
				
				var widget = showGraph(FloodData);
				$("#showGraph").html(widget);
				
				}
				
			}
		});
	});		
	
	

	
	
	
	
});


function error() {
	return "<h3>There are currently no floods in England to report.</h3>"
}

function show(FloodData){
	
	
		
		
		
		for (i = 0; i < FloodData.items.length; i++) {
		var obj = FloodData.items[i];
		console.log(obj);

		
		
		console.log(i);
        console.log(FloodData.items.length);

            
        var p = document.createElement("p");
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
        
        
            
            
        p.appendChild(node);
        p.appendChild(node2);
		p.appendChild(br);
        p.appendChild(node3);
        p.appendChild(node4);
		p.appendChild(br.cloneNode());
        p.appendChild(node5);
        p.appendChild(node6);
		p.appendChild(br.cloneNode());
        p.appendChild(node7);
        p.appendChild(node8);
		p.appendChild(br.cloneNode());
        p.appendChild(node9);
        p.appendChild(node10);
        var element = document.getElementById("show");

        element.appendChild(p);  
		}
	}
	
	

	
		
	
function showGraph(FloodData){
		var GraphData = [];
	
	function getOccurrence(array, value){
        return array.filter((v) => (v === value)).length;
		}
		
	
		for (i = 0; i < FloodData.items.length; i++) {
		GraphData.push(FloodData.items[i].severityLevel);
		
		console.log(GraphData);
	
		}
		
		
		var Occurrence1 = getOccurrence(GraphData, 1);
		var Occurrence2 = getOccurrence(GraphData, 2);
		var Occurrence3 = getOccurrence(GraphData, 3);
		var Occurrence4 = getOccurrence(GraphData, 4);
		
		var GraphDataReal = [
		{x:"Severity Level 1", value: Occurrence1},
		{x:"Severity Level 2", value: Occurrence2},
		{x:"Severity Level 3", value: Occurrence3},
		{x:"Severity Level 4", value: Occurrence4}
		];
		
		console.log(GraphDataReal);
		
		var chart = anychart.pie();
		
		chart.title("Number of Floods in England based of Severity level: Rated 1 to 4.");
		
		chart.data(GraphDataReal);
		
		chart.container('showGraph');
		
		chart.draw();

		
}