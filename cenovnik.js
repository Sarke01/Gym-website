window.addEventListener('load', () => {
    const sessionId = getCookie('session');
    const sessionGuest = sessionStorage.getItem('session');

    const darkMode=getCookie("darkMode");
    if(darkMode=="true"){
      applyDark();
    }
    if (!sessionId && !sessionGuest) {
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

const slika=document.getElementById('cenovnik-picture');
const slika2=document.getElementById('cenovnik-picture1');
const table1=document.getElementById('table-1');
const dugme=document.getElementById('prices');
const dugme1=document.getElementById('prices1');
const body=document.querySelector("body");
const darkTheme=document.querySelector(".navigation button");
const themeImg=darkTheme.querySelector("img");
const logoContainer=document.querySelector(".container");
const glow=document.querySelector("h1");




dugme.addEventListener('click',function(){
    // slika.style.opacity=0;
    // slika.style.width="10%";
    dugme.style.display="none";
    slika.style.animationName = 'disapper';
    slika.style.animationDuration = '2s';
    slika.style.animationTimingFunction = 'ease-in-out';
    slika.style.animationFillMode = 'forwards';
    
})

dugme1.addEventListener('click',function(){
    // slika2.style.opacity=0;
    // slika2.style.width="10%";
    dugme1.style.display="none";
    slika2.style.animationName = 'disapper';
    slika2.style.animationDuration = '2s';
    slika2.style.animationTimingFunction = 'ease-in-out';
    slika2.style.animationFillMode = 'forwards';
    
})

const applyDark=()=>{
  themeImg.src = 'images/dark-theme.png';
  body.style.backgroundColor="#777777"
  body.style.color="white"
  logoContainer.style.backgroundColor="#777777"
  logoContainer.style.color="white"
  logoContainer.style.borderBottom="2px solid  rgb(28, 77, 135)"
  glow.style.textShadow = '0px 0px 20px #fff, 0px 0px 20px #FAA831';

}

const applyLight=()=>{
  themeImg.src = 'images/light-theme.png';
  body.style.backgroundColor="white"
  body.style.color="black";
  logoContainer.style.backgroundColor="white"
  logoContainer.style.color="#777777"
  logoContainer.style.borderBottom="0"
  glow.style.textShadow= " 0px 0px 10px #555, 0px 0px 20px #000"

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