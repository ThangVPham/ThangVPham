//Calling weather API and display data
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=82b4f0f4d84768ff85d0be9a4be2ee39",function(data){
    var icon = data.weather[0].icon;
    $('.icon').attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
    
   
    var temp = data.main.temp;
    $('.temperature').append(Math.round(temp)+"°C");


    var desc = data.weather[0].description.toUpperCase();
    $('.desc').append(desc);

    var location = data.name.toUpperCase();
    $('.location').append(location);

})