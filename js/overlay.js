const contactUsButton = document.getElementById("contact-us-button");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

contactUsButton.addEventListener("click", function () {
  showOverlay();
});

closeButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

function showOverlay() {
  overlay.style.display = "flex";
}

var link = document.getElementById("contact-us-button");
link.addEventListener("click", function (event) {
  event.preventDefault();
});
