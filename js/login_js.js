const containerLogin = document.querySelector('.container--login');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () =>{
    containerLogin.classList.add('active');
})
loginBtn.addEventListener('click', () =>{
    containerLogin.classList.remove('active');
})