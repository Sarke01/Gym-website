const hamburger=document.querySelector("#hamburger-menu");
const navigation=document.querySelector(".navigation-div")

hamburger.addEventListener("click",(e)=>{
    navigation.classList.toggle("toggle-active");
})