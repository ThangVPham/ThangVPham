//Calling weather API and display data
getWeatherData()
function getWeatherData(city){
    
    if(city==null){
        city='toronto'
    }
    console.log(city)
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=82b4f0f4d84768ff85d0be9a4be2ee39`,function(data){
        var icon = data.weather[0].icon;
        $('.icon').attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
        
       
        var temp = data.main.temp;
        $('.temperature').append(Math.round(temp)+"°C");
    
    
        var desc = data.weather[0].description.toUpperCase();
        $('.desc').append(desc);
    
        var location = data.name.toUpperCase();
        $('.location').append(location);
    
    }).fail((err)=>{
        console.log(err.status);
        $('.temperature').append('N/A');
        $('.location').append('N/A');
    })
       
    
}


const searchInput = document.querySelector('.citySearch');
const description = document.querySelector('.desc');
const temperature = document.querySelector('.temperature');
const locat = document.querySelector('.location');
searchInput.addEventListener('keypress',(event)=>{
    if(event.key == "Enter"){
        if(searchInput.value==''){
            return
        }
        temperature.innerHTML='';
        description.innerHTML='';
        locat.innerHTML='';
        getWeatherData(searchInput.value)
    }
})