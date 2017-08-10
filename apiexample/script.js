var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/1c76987a439f31c6/conditions/q/CA/San_Francisco.json", false);
weather.send(null);

var r = JSON.parse()(weather.response);
var dis = "Current location:" + r.current_observation.display_location.full + "<br />";
var temp = r.current_observation.temperature_string + "<br />";
var wind = r.current_observation.wind_string + "<br />";
document.getElementById("weather");
