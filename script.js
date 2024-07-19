// Function to change the background color of the navbar on scroll
window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 100) {
    // Adjust as needed
    navbar.style.backgroundColor = "#222"; // Change to darker color on scroll
  } else {
    navbar.style.backgroundColor = "#333"; // Revert to original color
  }
};
