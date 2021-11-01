'use strict'


//make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log('navbar height : ' + navbarHeight);

    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
}) //scroll y좌표 알아내기


// handle scrolling when taping on navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    
    const target= event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }else{
        console.log(event.target.dataset.link);
        const scrollTo= document.querySelector(link);
        scrollTo.scrollIntoView({behavior: 'smooth'});
    }
})