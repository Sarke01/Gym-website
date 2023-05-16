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


const arrowUpBtn=document.querySelector('#strelica-gore');
const darkTheme=document.querySelector(".navigacija button");
const themeImg=darkTheme.querySelector("img");
const body=document.querySelector("body");
const logoContainer=document.querySelector(".kontejner");
const podnaslov=document.querySelector(".podnaslov");
const siva=document.querySelector(".siva");
const glow1=document.querySelector(".testimonial-container h2");
const glow2=document.querySelector(".donji-deo h2");




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
    themeImg.src = 'slike/dark-theme.png';
    body.style.backgroundColor="#777777"
    body.style.color="white"
    logoContainer.style.backgroundColor="#777777"
    logoContainer.style.color="white"
    logoContainer.style.borderBottom="2px solid  rgb(28, 77, 135)"
    slider.style.backgroundColor="rgb(204, 200, 200)"
    podnaslov.style.color="white";
    siva.style.color="white";
    glow1.style.textShadow = '0px 0px 20px #fff, 0px 0px 20px #FAA831';
    glow2.style.textShadow = '0px 0px 20px #fff, 0px 0px 20px #FAA831';



    
}

const applyLight=()=>{
    themeImg.src = 'slike/light-theme.png';
    body.style.backgroundColor="white"
    body.style.color="black";
    logoContainer.style.backgroundColor="white"
    logoContainer.style.color="#777777"
    logoContainer.style.borderBottom="0"
    slider.style.backgroundColor="white"
    podnaslov.style.color="#777777";
    siva.style.color="#777777";
    glow1.style.textShadow= " 0px 0px 10px #555, 0px 0px 20px #000"
    glow2.style.textShadow= " 0px 0px 10px #555, 0px 0px 20px #000"


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
