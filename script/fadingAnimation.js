// Selecting each page section and project card for fade in animation
const pageSections = document.querySelectorAll('.page-section');    
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
