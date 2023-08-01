$(document).foundation(); 

document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.getElementById("enterBtn");
    const modalContainer = document.getElementById("modalContainer");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const submitModalBtn = document.getElementById("submitModalBtn");
    const resultContainer = document.getElementById("resultContainer");
    const selectedOptionsDiv = document.getElementById("selectedOptions");
  
    // Event listener to open the modal when the "Enter" button is clicked
    enterBtn.addEventListener("click", function () {
      modalContainer.style.display = "block";
    });
  
    // Event listener to close the modal when the "Close" button is clicked
    closeModalBtn.addEventListener("click", function () {
      modalContainer.style.display = "none";
    });
  
    // Event listener to show selected options when the "Submit" button is clicked
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
  
        // Show the results page
        resultContainer.style.display = "block";
  
        // Display the selected options on the results page
        selectedOptionsDiv.innerHTML = "";
        selectedOptions.forEach((option) => {
          selectedOptionsDiv.innerHTML += `<p>${option}</p>`;
        });
      } else {
        alert("Please select at least one option before submitting.");
      }
    });
  });

