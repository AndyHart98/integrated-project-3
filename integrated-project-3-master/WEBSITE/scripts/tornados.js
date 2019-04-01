var paragraph;
$(document).ready(function() {
	$.ajax({

	url:"https://api.predicthq.com/v1/events/?label=tornado",
	type: "get",
	headers: {
	"Authorization":"Bearer nMsG3CSh2ihhnsuK8nAqilssvebkBi"
	},
	success: function(data) {
		paragraph = "<ul>";
		console.log(data);
		var results = data.results;
		for (var i=0; i< results.length; i++) {
			var location = results[i].location;
			console.log(location);
			console.log(location[0]);
			paragraph += "<li>" + "Name: " + results[i].title + "</li>";
			paragraph += "<li>" + "Start time: " + results[i].start + "</li>";
			paragraph += "<li>" + "Location: " + results[i].timezone + "</li>";
			paragraph += "<li>" + "Co-ordinates on map" + "</li>";
			paragraph += '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q='+location[1] +','+location[0]+'&amp;key=AIzaSyBCtAqEPKCwtioxmtQeR5tac5DYAdSpTJM&zoom=11" allowfullscreen></iframe>'
		};
		paragraph += "</ul>"
		$("#tornados").append(paragraph);
	},
	error: function(error){console.log(error)}
	});
})