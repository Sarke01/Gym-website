const regBtn=document.querySelector("#register-button")
const form=document.querySelector(".form")
const usernameInput=document.querySelector("#username-input")
const passwordInput=document.querySelector("#password-input")




form.addEventListener("submit",async (e)=>{
    e.preventDefault();

    const bodyData = {
        username: usernameInput.value,
        password: passwordInput.value
      };
    
    await fetch("http://localhost:8080/users/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
      .then(response => {if(response.status==200) {
        window.location.href = '/login.html';
      }
        else throw new Error("Bad Request")})
})