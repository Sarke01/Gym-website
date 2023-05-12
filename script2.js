window.addEventListener('load', () => {
    const sessionId = getCookie('session');
    const sessionGuest = sessionStorage.getItem('session');
    const darkMode=getCookie("darkMode");
    if(darkMode=="true"){
      applyDark();
    }
    if (!sessionGuest && !sessionId) {
      // Redirect the user to the dashboard page
      window.location.href = '/login.html';
    }
    
  });
  
  function getCookie(name) {
    const cookieStr = document.cookie;
    if (!cookieStr) {
      return null;
    }
    const cookies = cookieStr.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }


const arrowUpBtn=document.querySelector('#arrow-up-btn');
const darkTheme=document.querySelector(".navigation button");
const themeImg=darkTheme.querySelector("img");
const body=document.querySelector("body");
const logoContainer=document.querySelector(".container");
const podnaslov=document.querySelector(".podnaslov");
const grey=document.querySelector(".grey");



window.addEventListener('scroll',checkHeight);

function checkHeight(){
    if(window.scrollY > 600){
        arrowUpBtn.style.display="flex";
    }
    else{
        arrowUpBtn.style.display="none";
    }
}

arrowUpBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})


const applyDark=()=>{
    themeImg.src = 'images/dark-theme.png';
    body.style.backgroundColor="#777777"
    body.style.color="white"
    logoContainer.style.backgroundColor="#777777"
    logoContainer.style.color="white"
    logoContainer.style.borderBottom="2px solid  rgb(28, 77, 135)"
    slider.style.backgroundColor="rgb(204, 200, 200)"
    podnaslov.style.color="white";
    grey.style.color="white";
}

const applyLight=()=>{
    themeImg.src = 'images/light-theme.png';
    body.style.backgroundColor="white"
    body.style.color="black";
    logoContainer.style.backgroundColor="white"
    logoContainer.style.color="#777777"
    logoContainer.style.borderBottom="0"
    slider.style.backgroundColor="white"
    podnaslov.style.color="#777777";
    grey.style.color="#777777";
}


darkTheme.addEventListener("click",()=>{
  if (themeImg.src.includes('dark-theme')){
    document.cookie = "darkMode=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    applyLight();
  }
  else {
    document.cookie = "darkMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    applyDark();
  }
})
