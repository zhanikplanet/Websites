
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

 
    if (localStorage.getItem(username) !== null) {
        showMessage('User already exists. Please choose a different username.');
    } else {
        localStorage.setItem(username, password);
        showMessage('Registration successful. You can now log in.');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (localStorage.getItem(username) === password) {
        showMessage('Login successful. Welcome, ' + username + '!');
        window.location.href = "/Websites/Podcasts.html";
        removeMenuContent();
    } else {
        showMessage('Invalid username or password.');
    }
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function removeMenuContent(){
 let menuContent = document.querySelectorAll(".dropdown-menu>a");
 menuContent.innerHTML = ' ';
}