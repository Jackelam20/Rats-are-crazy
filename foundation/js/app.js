$(document).foundation()

document.addEventListener("DOMContentLoaded", function() {
    var enterButton = document.getElementById("enterBtn");
    var landingPage = document.getElementById("landing-page");
    var resultContainer = document.getElementById("resultContainer");

    enterButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the landing page and the "Enter" button section
        landingPage.style.display = "none";

        // Show the result container
        resultContainer.style.display = "block";
    });
});