document.addEventListener('DOMContentLoaded', function () {
    let loginButton = document.querySelector('.js-login');
    let loginForm = document.querySelector('form');
    let warningSign = document.querySelector('.js-reminder');

    loginButton.addEventListener('click', function (event) {
        if (!loginForm.checkValidity()) {
            warningSign.innerHTML = 'Incorrect Password or Username'
            loginButton.classList.add('animate__animated', 'animate__headShake');
            event.preventDefault();
        }
    });

    loginButton.addEventListener('animationend', function () {
        loginButton.classList.remove('animate__animated', 'animate__headShake');
    });
});
