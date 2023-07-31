$(document).foundation();

document.addEventListener("DOMContentLoaded", function () {
  const enterBtn = document.getElementById("enterBtn");
  const modalContainer = document.getElementById("modalContainer");
  const submitModalBtn = document.getElementById("submitModalBtn");
  const resultContainer = document.getElementById("resultContainer");
  const selectedOptionsContainer = document.getElementById("selectedOptionsContainer"); 

  // Event listener to open the modal when the "Enter" button is clicked
  enterBtn.addEventListener("click", function () {
    modalContainer.style.display = "block";
  });

  // Event listener to close the modal when the "submit" button is clicked
  submitModalBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
  });

  // Event listener to show selected options and fetch air quality data when the "Submit" button is clicked
  submitModalBtn.addEventListener("click", function () {
    const selectedOptions = [];
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach((checkbox) => {
      selectedOptions.push(checkbox.value);
    });

    if (selectedOptions.length > 0) {
      // Hide the landing page and modal
      document.getElementById("landing-page").style.display = "none";
      modalContainer.style.display = "none";

      // Display the selected options on the results page
      resultContainer.style.display = "block";
      const selectedOptionsContainer = document.getElementById("selectedOptionsContainer");
      selectedOptionsContainer.innerHTML = ""; // Clear previous selections
  
      selectedOptions.forEach((option) => {
        const selectedOptionDiv = document.createElement("div");
        selectedOptionDiv.classList.add("selected-option");
        selectedOptionDiv.textContent = option;
        selectedOptionsContainer.appendChild(selectedOptionDiv);
      });

      // Fetch air quality data from the API
      const apiKey = "60016002-4723-4a3c-bb9f-deeef5f6e896"; 
      fetch(`http://api.airvisual.com/v2/nearest_city?key=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Use the data returned from the API to display additional information on the results page
          // For example:
          const city = data.data.city;
          const state = data.data.state;
          const country = data.data.country;
          const airQuality = data.data.current.pollution.aqius;

          const airQualityInfo = `<p>City: ${city}</p><p>State: ${state}</p><p>Country: ${country}</p><p>Air Quality Index (AQI): ${airQuality}</p>`;
          selectedOptionsContainer.innerHTML += airQualityInfo;
             // Display the fetched data in the new container
      const fetchedDataContainer = document.getElementById("fetchedDataContainer");
      fetchedDataContainer.innerHTML = airQualityInfo;
        })
        .catch((error) => {
          console.error("Error fetching air quality data:", error);
        });
    } else {
      alert("Please select at least one option before submitting.");
    }
  });
});


