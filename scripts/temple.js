// Hamburger Menu Toggle
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");
// Toggle the navigation menu on button click
// Hamburger Menu Toggle
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
