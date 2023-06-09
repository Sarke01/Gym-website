const loginBtn=document.getElementById("login-button")
const regBtn=document.getElementById("register-button")
const usernameInput=document.getElementById("username-input")
const passwordInput=document.getElementById("password-input")
const form=document.querySelector(".form")
const guestBtn=document.querySelector("#guest-button")

window.addEventListener('load', () => {
    const sessionId = getCookie('session');
    if (sessionId) {
      // Redirect the user to the dashboard page
      window.location.href = '/index.html';
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
  

  async function login() {
    // TODO: Authenticate user credentials
    const bodyData = {
        username: usernameInput.value,
        password: passwordInput.value
      };
    await fetch("http://localhost:8080/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
        .then(response => {if(response.status==200) return response.json()
        else throw new Error("Unauthorized")})
        .then(data => {
          // Set the "session" cookie with a value of "123456"
          const expiryDate = new Date();
          expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Expires in 7 days
          document.cookie = `session=${data.username}; expires=${expiryDate.toUTCString()}; path=/`;

          // Redirect the user to the dashboard page
          window.location.href = '/index.html';
        })
        .catch(error =>{
          const errorMessage = document.createElement('p');
          errorMessage.innerText = 'Pogresno korisnicko ime ili lozinka';
          errorMessage.style.fontSize="1rem";
          errorMessage.style.color="red";
          errorMessage.style.padding="0 3px"
          if(!form.querySelector("p"))
          form.insertBefore(errorMessage, document.getElementById('login-button'));
          const inputs=document.querySelectorAll(".input");
          inputs.forEach(element=>{
            element.style.border="1px solid red"
            element.addEventListener('focus', () => {
              element.style.border = '1px solid #ccc';
              errorMessage.remove();
            });
          });
        });
  }

  regBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href = '/registration.html';

  })

  form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    await login();
  })

  guestBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    // Set the "session" cookie with a value of "123456"
    // const expiryDate = new Date();
    // expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Expires in 7 days
    // document.cookie = `session=guest; expires=${expiryDate.toUTCString()}; path=/`;
    sessionStorage.setItem('session',"guest");
    // Redirect the user to the dashboard page
    window.location.href = '/index.html';
  })

