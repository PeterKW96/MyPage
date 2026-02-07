var modal = document.getElementById("resumeModal");
var resumeLink = document.getElementById("resumeLink");
var span = document.getElementsByClassName("close-button")[0];

// Open the modal when the user clicks on the resume link
resumeLink.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the user clicks on the close button
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close the modal when the user presses the Escape key
document.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
}