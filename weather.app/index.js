 //weather API:c5b486426e5b632108de1fb15a3c3310
       
 function weatherdetails(){
  
    let searchbox=document.getElementById("search").value; 
    
     
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?",
    method: "GET",
    data: { "q": searchbox, "appid": "c5b486426e5b632108de1fb15a3c3310", "units": "metric" },
    success: function (response) {       
    document.getElementById("temp").innerHTML = (response.main.temp)+"°c";
    document.getElementById("humidity").innerHTML = (response.main.humidity)+"%";
    document.getElementById("windspeed").innerHTML = (response.wind.speed)+"km/h";
    document.getElementById("city").innerHTML = (response.name);
    var var1 = response.weather[0].main
      if (var1 == "Mist") {
         document.getElementById("image").src = "./images/mist.png"
      }
     
      if (var1 == "Clouds") {
         document.getElementById("image").src = "./images/clouds.png"
      }
      if (var1 == "Drizzle") {
         document.getElementById("image").src = "./images/drizzle.png"
      }
      if (var1 == "Rain") {
         document.getElementById("image").src = "./images/rain.png"
      }
      if (var1 == "Snow") {
         document.getElementById("image").src = "./images/snow.png"
      }
      else {
         document.getElementById("images").innerHTML = var1
      }
   }
})
}
    