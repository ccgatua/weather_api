$.ajax( {
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {"zip": "02908,us", "appid": "a806a6b5e2943ee6f6d7e4a1d752ffbb"},
    success: function(response) {
        console.log(response);
    }
})
$.ajax( {
    type: "POST",
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {"zip": "02908,us", "appid": "a806a6b5e2943ee6f6d7e4a1d752ffbb"},
    success: function(response) {
        console.log(response);
    }
})