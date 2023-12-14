document.addEventListener('DOMContentLoaded', function() {
    // Update the JavaScript selector to match the new class name
    var showLoginFormBtn = document.getElementById('showLoginFormBtn');
    var mainContainer = document.querySelector('.main-container-100');
  
    // Add a click event listener to the button
    showLoginFormBtn.addEventListener('click', function() {
      // Toggle the display property of the main-container when the button is clicked
      if (mainContainer.style.display === 'none' || mainContainer.style.display === '') {
        mainContainer.style.display = 'block';
      } else {
        mainContainer.style.display = 'none';
      }
    });
  });
  
  