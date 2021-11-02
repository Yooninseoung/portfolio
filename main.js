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
        scrollIntoView(link);
    }
})


//handle click on contact me button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});//클릭이 된다면


//make home slowly fade to transparent as window scrolls down

const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log('home height : ' + homeHeight);

    home.style.opacity = 1-window.scrollY/homeHeight;
})








//함수
function scrollIntoView(selector){//id를 매개변수로 받아온다
    const scrollTo= document.querySelector(selector); //이동할곳의 id
    scrollTo.scrollIntoView({behavior: 'smooth'});//부드럽게 넘어가라
}


