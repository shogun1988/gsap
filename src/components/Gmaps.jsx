var mainTL = new TimelineMax()
var tl = new TimelineMax()

var positions = [new google.maps.LatLng(55.950265, -3.2059933330),
                new google.maps.LatLng(55.95028333, -3.206043333)]

var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: {lat:  55.950265, lng:-3.205993333}
        });

for (i=0; i<positions.length; i++) {
  var marker = new google.maps.Marker({
            position: positions[i],
            // animation: google.maps.Animation.DROP,
            opacity: 1,
            id: 'p1',
            map: map
          })  