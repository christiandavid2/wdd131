// Wait until the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Display current year and last modified date in the footer
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;

  document.getElementById("year").textContent = year;
  document.getElementById("last-updated").textContent = document.lastModified;

  // Static weather data (you'll replace with real-time data in the next phase)
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillElement = document.getElementById("windchill");

  // Function to calculate wind chill
  function calculateWindChill(t, s) {
    // Formula for wind chill
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1); // Round to 1 decimal place
  }

  // Check if conditions are valid for wind chill calculation
  if (temp <= 10 && wind > 4.8) {  // Metric: ≤ 10°C and wind speed > 4.8 km/h
    const windChill = calculateWindChill(temp, wind);
    windchillElement.textContent = `${windChill} °C`;
  } else if (temp <= 50 && wind > 3) {  // Imperial: ≤ 50°F and wind speed > 3 mph
    // Convert temperature to Fahrenheit for imperial units
    const tempF = (temp * 9/5) + 32;
    const windChillF = calculateWindChill(tempF, wind * 0.621371); // Convert km/h to mph
    windchillElement.textContent = `${windChillF} °F`;
  } else {
    // If wind chill is not applicable, display "N/A"
    windchillElement.textContent = "N/A";
  }
});

