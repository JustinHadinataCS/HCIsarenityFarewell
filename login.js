document.addEventListener('DOMContentLoaded', function () {
  let loginButton = document.querySelector('.js-login');
  let loginForm = document.querySelector('form');
  let reminder = document.querySelector('.js-reminder');

  loginButton.addEventListener('click', function (event) {
      if (!loginForm.checkValidity()) {
          reminder.innerHTML = 'Please fill in all fields';
          reminder.style.display = 'block';
          reminder.classList.add('animate__animated', 'animate__headShake');
          loginButton.classList.add('animate__animated', 'animate__headShake');
          event.preventDefault();
      }
  });

  loginButton.addEventListener('animationend', function () {
      loginButton.classList.remove('animate__animated', 'animate__headShake');
  });
});
