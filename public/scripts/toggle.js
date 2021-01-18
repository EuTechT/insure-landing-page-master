const btnMenu = window.document.querySelector('#btn-menu');
const menuMobile = window.document.querySelector('#menu-mobile');
const imgBtn = window.document.querySelector('#img-btn');
const navLink = window.document.querySelectorAll('.navlink');
const header = window.document.querySelector('.header');

function changeImgBtn(src){
    if(src == "./public/images/icon-hamburger.svg") {
        return "./public/images/icon-close.svg"
    } else {
        return "./public/images/icon-hamburger.svg";
    }
}

btnMenu.addEventListener('click', (e) => {
    imgBtn.src = changeImgBtn(imgBtn.getAttribute('src'));
    menuMobile.classList.toggle('navbar-active');
});

navLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        if(e.target.className.split(' ')[0] == 'navlink') {
            imgBtn.src = changeImgBtn(imgBtn.getAttribute('src'));
            menuMobile.classList.toggle('navbar-active'); 
        }
    });
});

window.onresize = function() { 
    if(window.innerWidth > 1024 && menuMobile.className == 'navbar navbar-active') { 
        imgBtn.src = changeImgBtn(imgBtn.getAttribute('src')); 
        menuMobile.classList.remove('navbar-active'); 
    } 
} 

window.onscroll = function() {
    if(window.innerWidth <= 1024 && window.scrollY > 0) {
        header.style.position = 'fixed';
    } else {
        header.style.position = 'relative';
    }
}