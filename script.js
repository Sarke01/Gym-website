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

const name2=document.getElementById('name2');
const email=document.getElementById('email');
const theme=document.getElementById('theme');
const message=document.getElementById('message');
const btn=document.getElementById('submit-btn');

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

 
