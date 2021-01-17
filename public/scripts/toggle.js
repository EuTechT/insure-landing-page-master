const btnMenu = window.document.querySelector('#btn-menu');
const menuMobile = window.document.querySelector('#menu-mobile');
const imgBtn = window.document.querySelector('#img-btn');
const navLink = window.document.querySelectorAll('.navlink');

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