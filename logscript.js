// Get references to the registration and login forms and buttons
const registrationForm = document.querySelector('.registration');
const loginForm = document.querySelector('.registration-login');
const loginButton = document.getElementById('login-btn');
const registrationButton = document.getElementById('registration-button');

// Initially, hide the login form
loginForm.style.display = 'none';


// Add an event listener to the "Log In" button
loginButton.addEventListener('click', () => {
    registrationForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Add an event listener to the "Register" button
registrationButton.addEventListener('click', () => {
    registrationForm.style.display = 'block';
    loginForm.style.display = 'none';
});
