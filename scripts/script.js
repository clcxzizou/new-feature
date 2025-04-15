const logoTxt = document.querySelector('.logo-txt')
const navBar = document.querySelector('.nav-bar')

document.addEventListener('scroll',(scroll)=>{
    // console.log(scroll);
    if(document.documentElement.scrollTop>= 75){
logoTxt.style.transform = "translateX(-200px)";
navBar.style.position = "fixed"
    }
    else{
        logoTxt.style.transform = "translateX(200px)"
        navBar.style.position = "absolute"
    }



    
})
