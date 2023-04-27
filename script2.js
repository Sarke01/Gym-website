window.addEventListener('load', () => {
    const sessionId = getCookie('session');
    if (!sessionId) {
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
