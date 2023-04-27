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

const slika=document.getElementById('cenovnik-picture');
const slika2=document.getElementById('cenovnik-picture1');
const table1=document.getElementById('table-1');
const dugme=document.getElementById('prices');
const dugme1=document.getElementById('prices1');

dugme.addEventListener('click',function(){
    slika.style.opacity=0;
    dugme.style.opacity=0;
    
})

dugme1.addEventListener('click',function(){
    slika2.style.opacity=0;
    dugme1.style.opacity=0;
    
})
