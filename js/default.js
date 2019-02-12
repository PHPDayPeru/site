// Default JavaScript Functions and Initiations

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Ubuntu:300,400,500,700', 'Montserrat:400,700']
  }
});

// Logo Animation
$svg = $('.logo > svg').drawsvg({
  duration: 500,
  callback: function() {
    $('.logo').addClass('active');
  }
});

function animateLogo() {
  $svg.drawsvg('animate');
}

animateLogo();


// Swipe Controls for Carousel
$('.carousel').swiperight(function() {
  $(this).carousel('prev');
});
$('.carousel').swipeleft(function() {
  $(this).carousel('next');
});

// Google Map
function googleMap() {
  var map = document.getElementById('google-map');

  var map_options = {
    center: new google.maps.LatLng(-12.1351432,-77.0221491),
    scrollwheel: false,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map, map_options)

  // Map Marker
  /*
var myLatlng = new google.maps.LatLng(-12.1953946,-76.9728274);
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  icon: 'img/location-pin.svg'
});
*/
}
google.maps.event.addDomListener(window, 'load', googleMap);