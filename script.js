window.addEventListener('load', () => {
    const sessionId = getCookie('session');
    const darkMode=getCookie("darkMode");
    if(darkMode=="true"){
      applyDark();
    }
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

const name2=document.getElementById('name2');
const email=document.getElementById('email');
const theme=document.getElementById('theme');
const message=document.getElementById('message');
const btn=document.getElementById('submit-btn');
const darkTheme=document.querySelector(".navigation button");
const themeImg=darkTheme.querySelector("img");
const body=document.querySelector("body");
const logoContainer=document.querySelector(".container");
const grey=document.querySelectorAll(".grey");
const forms=document.querySelector(".forms")


btn.addEventListener('click', e=> {
    checkInputs();
});


function checkInputs(){

    const nameValue=name2.value.trim();
    const emailValue=email.value.trim();
    const themeValue=theme.value.trim();
    const messageValue=message.value.trim();

    if(nameValue===''){
        setErrorFor(name2,'Ime ne moze biti prazno');
    }
    else{
        setSuccessFor(name2);
    }

    if(email.value===''){
        setErrorFor(email,'Email ne moze biti prazan');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'Email nije validan')
    }else{
        setSuccessFor(email);
    }

    if(themeValue===''){
        setErrorFor(theme,'Naslov ne moze biti prazan');
    }else{
        setSuccessFor(theme);
    }

    if(messageValue===''){
        setErrorFor(message,'Poruka ne moze biti prazna')
    }else{
        setSuccessFor(message);
    }

    if(isAllGood()){
        alert("Poruka je poslata !");
        name2.value="";
        email.value="";
        theme.value="";
        message.value="";
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isAllGood(){
    if(name2.parentElement.className==='form-control success'
        && email.parentElement.className=='form-control success'
        && theme.parentElement.className=='form-control success'
        && message.parentElement.className=='form-control success'){
            return true;
        }
        else return false;
}

const applyDark=()=>{
    themeImg.src = 'images/dark-theme.png';
    body.style.backgroundColor="#777777"
    // body.style.color="white"
    logoContainer.style.backgroundColor="#777777"
    logoContainer.style.color="white"
    forms.style.backgroundColor="rgb(204, 200, 200)"
    // grey.style.color="white";
    grey.forEach(element => {
        element.style.color="black";
    });

}

const applyLight=()=>{
    themeImg.src = 'images/light-theme.png';
    body.style.backgroundColor="white"
    body.style.color="black";
    logoContainer.style.backgroundColor="white"
    logoContainer.style.color="#777777"
    forms.style.backgroundColor="white"
    // grey.style.color="#777777";
    grey.forEach(element => {
        element.style.color="#777777";
    });
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


