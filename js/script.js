function initMap(){
var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(53.17461, 27.94227);
	var mapOptions = {
		center: myLocation,
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.roadmap,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

  var myMap = new google.maps.Map(el, mapOptions);

}

google.maps.event.addDomListener(window, 'load', initMap);
