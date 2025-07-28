const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Alabang Philippines",
    location: "Alabang, Philippines",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-59996-thumb.jpg"
  },
  // Add more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, December, 12",
        area: 43000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-15503.jpg"
  },
  {
      templeName: "Atlanta Georgia Temple",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3859.jpg"
    }
];

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName}">
  `;
  return card;
}

function displayTemples(filteredTemples) {
  const container = document.getElementById("templeCards");
  container.innerHTML = "";
  filteredTemples.forEach(temple => container.appendChild(createTempleCard(temple)));
}

function filterTemples(criteria) {
  switch (criteria) {
    case "old":
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
      break;
    case "new":
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
      break;
    case "large":
      displayTemples(temples.filter(t => t.area > 90000));
      break;
    case "small":
      displayTemples(temples.filter(t => t.area < 10000));
      break;
    default:
      displayTemples(temples);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  document.querySelectorAll(".filter-btn").forEach(btn =>
    btn.addEventListener("click", () => filterTemples(btn.dataset.filter))
  );
});
// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const navigation = document.getElementById("navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
    });
  } else {
    console.error("Menu button or navigation element not found.");
  }
});



// Display current year and last modified date in the footer
const currentYear = new Date().getFullYear();
document.getElementById("lastUpdated").textContent = new Date(document.lastModified).toLocaleDateString("en-US", {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});