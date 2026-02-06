var modal = document.getElementById("resumeModal");
var resumeLink = document.getElementById("resumeLink");
var span = document.getElementsByClassName("close-button")[0];

resumeLink.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}