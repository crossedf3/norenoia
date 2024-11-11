window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }  // force scroll position to top after refresh

  document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu toggle button and navigation menu
    const menuToggle = document.getElementById('navbar-drop');
    const navMenu = document.getElementById('dropbutton');

      // Add click event listener to the menu toggle button
      menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        navMenu.classList.toggle('active');
    });

      // Add a click event listener to the document to handle closing the menu
      document.addEventListener('click', (event) => {
        // Check if the click is outside both the menu toggle and the menu itself
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            // Remove the 'active' class to hide the menu
            console.log('Click outside menu');
            navMenu.classList.remove('active');
        }
    });
});