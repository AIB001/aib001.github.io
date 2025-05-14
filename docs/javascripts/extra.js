document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the entrance page
  if (document.querySelector('.entrance-container')) {
    // Fix navigation button to use correct path
    const entranceButton = document.querySelector('.entrance-button');
    if (entranceButton) {
      entranceButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
      });
    }
  }
});