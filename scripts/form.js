// Product array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" },
  { id: "tt-2021", name: "Quantum Stabilizer" },
  { id: "ss-1999", name: "Hyperdrive Engine" },
  { id: "pl-2015", name: "Plasma Conduit" },
  { id: "bc-2022", name: "Antimatter Containment" },
  { id: "sc-2023", name: "Subspace Communicator" }
];

// Populate the select dropdown with product options
const productSelect = document.querySelector("#product");

if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Handle review counter on confirmation page (review.html)
document.addEventListener("DOMContentLoaded", () => {
  const counterDisplay = document.getElementById("review-count");

  if (counterDisplay) {
    // Get current count from localStorage or initialize to 0
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    // Increment count and save it
    count++;
    localStorage.setItem("reviewCount", count);

    // Display updated count
    counterDisplay.textContent = `You have submitted ${count} review(s).`;
  }
  // Display current year in footer
  const yearElement = document.getElementById("year");  
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
  // Display last modified date in footer
  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
});
