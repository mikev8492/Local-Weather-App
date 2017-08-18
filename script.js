
$(document).ready(function() {
  $("#weather").hide();
  navigator.geolocation.getCurrentPosition(function(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    console.log(position.coords.latitude, position.coords.longitude);
  });
  var api = "https://api.darksky.net/forecast/";
  var key = "541d3847a8c50356549eeae2a0a9798b";
  var lat, lon;
  var celsiusRequest = "units=metric";
  var farenheitRequest = "units=imperial";

  $(".btn").on("click", function() {
    $("#weather").show();
    $(".btn").hide();
    console.log("hello");

    var url = api + key + "/" + lat + "," + lon;
    console.log(url);
    $.getJSON(url).done(function(data) {
      $("#city").text(data.timezone);
    });
  });
});
