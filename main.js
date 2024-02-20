var typed = new Typed(".text", {
    strings: ["FRONT END WEB DEVELOPER" , "UI/UX DESIGNER" , "DATA SCIENTIST"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageXOffset> 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
//avinash portfolio 2024 copyrights are to be reserved....