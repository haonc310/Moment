const btnMenu ={
    init:function(){
        this.btnActive()
        this.scrollHeader()
    },
    btnActive : function(){
        const btnMenu =document.querySelector('.btn--menu')
        const navMenu = document.querySelector('.navbar__mobile-content')
        btnMenu.addEventListener('click' , () =>{
            navMenu.classList.toggle('navbar__mobile-content--active')
        })
    },
    scrollHeader : function(){
        const header =document.querySelector('.header')
        const navbarMobile = document.querySelector('.navbar__mobile')
        const headerNavbar = document.querySelector('.header__navbar')
        const headerImg = document.querySelector('.header__navbar-logo--img')
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >30){
                header.style.marginTop ='0px'
                navbarMobile.style.backgroundColor ='rgba(34, 34, 34, .6)'
                headerNavbar.style.backgroundColor ='rgba(34, 34, 34, .6)'
                headerImg.style.maxWidth='70px';
            }
            else{
                headerNavbar.style.backgroundColor ='unset'
                navbarMobile.style.backgroundColor ='unset'
                header.style.marginTop ='90px'
                headerImg.style.maxWidth='unset';
            }
        })
    }
}
const customDots ={
    init: function(){
        this.activeDot()
    },
    activeDot : function() {
        const dots = document.querySelectorAll('.dot')
        dots.forEach((dot) =>{
            dot.addEventListener('click' , () =>{
                for(let i=0 ; i<dots.length ; i++){
                    dots[i].classList.remove('active')
                }
                dot.classList.toggle('active')
            })
        })
    }
}
const loader ={
    init:function() {
        this.loading()
    },
    loading : function() {
        const loaderLeft = document.querySelector('.loader__left')
        const loaderRight = document.querySelector('.loader__right')
        const loader =document.querySelector('.loader')
        const loaderImg =document.querySelector('.loader__img')
        const loaderWrapper =document.querySelector('.loader-wrapper')
        setTimeout(() =>{
            loader.style.display='none'
            loaderImg.style.transform='translateY(-100000%)'
        },5300)
        setTimeout(() =>{
            loaderLeft.style.transform='translateX(-100%)'
            loaderRight.style.transform='translateX(100%)'
        },5000)
        setTimeout(() =>{
            loaderWrapper.style.display ='none'
        },7000)
    }
}
btnMenu.init()
customDots.init()
loader.init()