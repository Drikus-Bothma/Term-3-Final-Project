// $('.carousel slide').carousel({
//     interval: 2000
//   }) 
$.ajax({
    type:"GET",
    url:"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=cee0e8660c418672c6c697ae50bf4c79",
    success: function(data){
      temperature = data 
      console.log(temperature);
    }
  }).done(function(){
    $("#testingAPI").find(".currentTemp").text("OriginTemp: " + Math.round(temperature.main.temp- 273) + "°C");
  })

