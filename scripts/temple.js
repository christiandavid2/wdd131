 // Hamburger Menu Toggle
const menuButton = document.getElementById("menu");
const navigation = document.querySelector("#navigation");
// Toggle the navigation menu when the menu button is clicked


// Toggle the navigation menu when the menu button is clicked
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});
// Ensure the menu is closed on page load
document.addEventListener("DOMContentLoaded", () => {
  navigation.classList.remove("open");
  menuButton.textContent = "☰";
});
// Display current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;

  document.getElementById("year").textContent = year;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});

// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
