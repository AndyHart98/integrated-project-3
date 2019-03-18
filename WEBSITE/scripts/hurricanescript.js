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
			paragraph += "<li>" + results[i].title + "</li>";
			paragraph += "<li>" + results[i].start + "</li>";
			paragraph += "<li>" + results[i].timezone + "</li>";
			paragraph += '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBCtAqEPKCwtioxmtQeR5tac5DYAdSpTJM&center='+location[1]+','+location[0]+'&zoom=11" allowfullscreen> </iframe>'
		
		};
		paragraph += "</ul>"
		$("#tornados").append(paragraph);
	},
	error: function(error){console.log(error)}
	});
});