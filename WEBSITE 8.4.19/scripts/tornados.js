var map;

    function initMap() {
        map = new
        google.maps.Map(document.getElementById('mapLayout'),
            {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3),
            mapTypeId: 'terrain'
        });
        google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center); 
        });
    }

    var thelocation;
    var titleName;

    $(document).ready(function () {
        $.ajax({

        url:"https://api.predicthq.com/v1/events/?label=tornado",
        type: "get",
        headers: {
        "Authorization":"Bearer nMsG3CSh2ihhnsuK8nAqilssvebkBi"
        },
            
            success: function(data) {
                var i=0;
                console.log(data);
                $('#nextT').click(function () {
                    var list = document.getElementById("tornados");
                    while (list.hasChildNodes()) {   
                      list.removeChild(list.firstChild);
                    }
                    paragraph = "<ul>";
                    var results = data.results;
                    var location = results[i].location;
                    console.log(results[i].location);
                    paragraph += "<li>" + "Name: " + results[i].title + "</li>";
                    paragraph += "<li>" + "Start time: " + results[i].start + "</li>";
                    paragraph += "<li>" + "Location: " + results[i].timezone + "</li>";
                    paragraph += "<li>" + "Co-ordinates on map" + "</li>";
                    paragraph += '<div class="map-responsive"> <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q='+location[1] +','+location[0]+'&amp;key=AIzaSyBCtAqEPKCwtioxmtQeR5tac5DYAdSpTJM&zoom=11" allowfullscreen></iframe> </div>'
					paragraph += "</ul>"
		            $("#tornados").append(paragraph);
                    i++;
                });

                $('#backT').click(function () {
                    i--;
                    i--;
                    var list = document.getElementById("tornados");
                    while (list.hasChildNodes()) {   
                      list.removeChild(list.firstChild);
                    }
                    paragraph = "<ul>";
                    var results = data.results;
                    var location = results[i].location;
                    console.log(results[i].location);
                    paragraph += "<li>" + "Name: " + results[i].title + "</li>";
                    paragraph += "<li>" + "Start time: " + results[i].start + "</li>";
                    paragraph += "<li>" + "Location: " + results[i].timezone + "</li>";
                    paragraph += "<li>" + "Co-ordinates on map" + "</li>";
                    paragraph += '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q='+location[1] +','+location[0]+'&amp;key=AIzaSyBCtAqEPKCwtioxmtQeR5tac5DYAdSpTJM&zoom=11" allowfullscreen></iframe>'
                    paragraph += "</ul>"
		            $("#tornados").append(paragraph);
                });
    
            }
    
    });
    })