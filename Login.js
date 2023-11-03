const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signup-link"),
  login = document.querySelector(".login-link");
 const  logins = document.querySelector(".Login");
 const  signup= document.querySelector(".Signup");


pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach(pwField => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});
signup.addEventListener("click", () => {
  container.classList.add("active");

});

logins.addEventListener("click", () => {
  container.classList.remove("active");
  audioPlayer.play();

});

function register() {
  const checkPassword =  document.getElementById('checkPassword').value;
  const username = document.getElementById('getUsername').value;
  const userAccount = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

if(checkPassword === password){
  if (localStorage.getItem(userAccount) !== null) {
      alert('User already exists. Please choose a different username.');
  } else {
      localStorage.setItem(userAccount, password,username);
      alert('Registration successful. You can now log in.');
  }
}
else{
  alert('password are not same')
}
}
function userLogin() {
  const username = document.getElementById('getUsername').value;
  const userAccount= document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  if (localStorage.getItem(userAccount) === password&&localStorage.getItem(userAccount)!=='') {
  

    alert('Login successful. Welcome, ' + username + '!');
    AuthFactory.signIn();
    window.location.href = "/Websites/Podcasts.html";
  } 
 
  else {
  
      alert('Invalid username or password.');
  }
}
let guest = document.getElementById("guest-view" )
guest.addEventListener("click" ,()=>{
AuthFactory.logout();
})

