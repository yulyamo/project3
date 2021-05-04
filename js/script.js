

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
  

  
  var marker = new google.maps.Marker({
      position: {lat: 53.98779, lng: 27.52468},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Minsk"
      
  });
  var mst = new google.maps.Marker({
      position: {lat: 54.02034, lng: 31.72170},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Mstislavl"
      
  });
   var osip = new google.maps.Marker({
      position: {lat: 53.33870, lng: 28.62058},
      map: myMap,
      animation: google.maps.Animation.DROP,
      title: "Osipovichi"
      
      
  });



}


google.maps.event.addDomListener(window, 'load', initMap);

$(document).ready(function(){
  $('.slider').bxSlider({
    captions: true
  });
});

