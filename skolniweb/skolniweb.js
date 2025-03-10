document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    darkModeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
  
      if (document.documentElement.classList.contains('dark')) {
        darkModeToggle.textContent = "Light Mode";
      } else {
        darkModeToggle.textContent = "Dark Mode";
      }
    });
  });
  