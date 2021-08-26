burgger = document.querySelector('.burgger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burgger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})