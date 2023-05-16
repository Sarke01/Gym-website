const hamburger=document.querySelector("#hamburger-menu");
const navigacija=document.querySelector(".navigacija-div")

hamburger.addEventListener("click",(e)=>{
    navigacija.classList.toggle("toggle-active");
})