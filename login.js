const loginBtn=document.getElementById("login-button")
const usernameInput=document.getElementById("username-input")
const passwordInput=document.getElementById("password-input")
const form=document.querySelector(".form");

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
    await fetch("https://localhost:8080/users/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
        .then(response => response.json())
        .then(data =>{
          if(data.username==bodyData.username && data.password==bodyData.password){
            console.log("sve je suepr");
          }
        })
        .catch(error => console.error(error));
  
    
    // Set the "session" cookie with a value of "123456"
    // const expiryDate = new Date();
    // expiryDate.setTime(expiryDate.getTime() + (7 * 24 * 60 * 60 * 1000)); // Expires in 7 days
    // document.cookie = `session=${bodyData.username}; expires=${expiryDate.toUTCString()}; path=/`;

    // // Redirect the user to the dashboard page
    // window.location.href = '/index.html';
    
  }

  loginBtn.addEventListener("click",()=>{
    login();
  })

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    login();
  })

