const pageSections = document.querySelectorAll('.page-section');    // Selecting each page section and project card for fade in animation
const projectSections = document.querySelectorAll('.project-section')
const options = {
    root: null,
    threshold:.1,
    rootMargin:'-100px'
}
    
const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.visibility = 'visible'
            entry.target.classList.add('animate__animated','animate__fadeInUp');                     
        }    
    })   
},options);
    
const projectObserver = new IntersectionObserver((entries, observer)=>{
    for(let i =0; i<entries.length; i++){
        if(entries[i].isIntersecting && i%2==0){
            entries[i].target.style.visibility='visible';
            entries[i].target.classList.add('animate__animated','animate__fadeInLeft');   
        }
        else if(entries[i].isIntersecting && i%2==1){
            entries[i].target.style.visibility='visible';
            entries[i].target.classList.add('animate__animated','animate__fadeInRight');   
        }
    }
})
    
pageSections.forEach(pageSection =>{
    observer.observe(pageSection);
})
    
projectSections.forEach(projectSection=>{
    projectObserver.observe(projectSection);
})    



//Calling weather API and display data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=82b4f0f4d84768ff85d0be9a4be2ee39",function(data){
    var icon = data.weather[0].icon;
    if(icon == "01d"){
        $('.icon').attr('src', "WeatherIcons/sunny.png")
    }
    else if(icon == "01n"){
        $('.icon').attr('src', "WeatherIcons/clearsky-night.png")
    }
    else if(icon == "10d" || icon =="10n"){
        $('.icon').attr('src', "WeatherIcons/chancerain.png")
    }
    else if(icon == "11d" || icon =="11n"){
        $('.icon').attr('src', "WeatherIcons/chancetstorms.png")
    }
    else{
        $('.icon').attr('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
    }
   
    var temp = data.main.temp;
    $('.temperature').append(Math.round(temp)+"°C");


    var desc = data.weather[0].description.toUpperCase();
    $('.desc').append(desc);

    var location = data.name.toUpperCase();
    $('.location').append(location);

})

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            
            return;
        }
        if (window.scrollY === 0) {
            
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
 
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                
                navbarToggler.click();
               
            }
        });
    });

});

