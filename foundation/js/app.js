$(document).foundation(); 

//base url to append query
const wikiUrl =  "https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=";
var sampleOption = "Dust_mite_allergy";
var endpointLast = "&prop=extracts&format=json&exintro=1";
var wikiFormat = {
  "Dust Mites": "Dust_mite_allergy",
  "Mold" : "Mold_health_issues",
  "Pet Dander" : "Dander",
  "Cedar" : "Cedrus",
  "Oak" : "Oak",
  "Grass" : "Poaceae",
  "Ragweed" : "Ragweed",
  "Flowers" : "Flower",
  "Latex Allergy" : "Latex_allergy",
  "Cockroach Allergens" : "Cockroach",
  "Respiratory Irritants" : "Irritation"
};

function strip(html){
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

function displayWiki(option){
    sampleOption = wikiFormat[option];
    var completeUrl = wikiUrl+sampleOption+endpointLast;
    console.log(sampleOption);
    fetch(completeUrl)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        var page = data.query.pages
        var pageId = Object.keys(data.query.pages)[0];
        console.log(strip(page[pageId].extract));
      })
             
}

document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.getElementById("enterBtn");
    const modalContainer = document.getElementById("modalContainer");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const submitModalBtn = document.getElementById("submitModalBtn");
    const resultContainer = document.getElementById("resultContainer");
    const selectedOptionsDiv = document.getElementById("selectedOptions");
    const wikiPage = document.getElementById("wikiP");
    
  
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
          displayWiki(option);

        });

      } else {
        alert("Please select at least one option before submitting.");
      }
    });
  });
  
