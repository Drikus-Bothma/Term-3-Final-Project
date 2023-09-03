$(document).ready(function (){


});

$.ajax({
    type:"GET",
    url:"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=cee0e8660c418672c6c697ae50bf4c79",
    success: function(data){
      temperature = data 
      console.log(temperature);
    }
  }).done(function(){
    $("#testingAPI").find(".currentTemp").text("OriginTemp: " + Math.round(temperature.main.temp- 273) + "°C");
  });


$(".logo-img").hover(function (){
  $(".nameF").show()
});

SubmitTrip = []

AddToCart = () => {

  SubmitTrip.push({
    heading: "Caribbean Dreams",
    location: "Caribbean",
    duration: "5 days",
    price: 10000,
    date: "3 November 2023",
    departure: "Durban Harbour"
  })

  alert("Trip Has Been Added To Your Cart")
}

AddToCart2 = () => {

  SubmitTrip.push({
    heading: "Norwegian Beaches",
    location: "Norway",
    duration: "7 days",
    price: 15500,
    date: "21 December 2023",
    departure: "Cape Town Harbour"
  })

  alert("Trip Has Been Added To Your Cart")
}

AddToCart3 = () => {

  SubmitTrip.push({
    heading: "Thailand Round Trip",
    location: "Thailand",
    duration: "14 days",
    price: 25500,
    date: "25 December 2023",
    departure: "Durban Harbour"
  })

  alert("Trip Has Been Added To Your Cart")
}

SubmitOrder = () => {
  let data = JSON.stringify(SubmitTrip);
  localStorage.setItem('trip', data);
}

$(document).ready(function () {
  // Replace with your OpenWeatherMap API key
  var apiKey = "cee0e8660c418672c6c697ae50bf4c79";

  // Replace with your desired location (e.g., "New York, US")
  var location = "New York, US";

  // Define the API URL
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=" + apiKey;

  // Make an API request to OpenWeatherMap
  $.get(apiUrl, function (data) {
      // Extract the current temperature from the API response
      var currentTemperature = data.main.temp;

      // Update the "currentTemp" paragraph with the current temperature
      $("#currentTemp").text("Current Temperature: " + currentTemperature + "°C");
  });
});
