const contactUsButton = document.getElementById("contact-us-button");
const contactUsButtonMobile = document.getElementById(
  "contact-us-button-mobile"
);
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

contactUsButton.addEventListener("click", function () {
  showOverlay();
});

contactUsButtonMobile.addEventListener("click", function () {
  showOverlay();
});

closeButton.addEventListener("click", function () {
  overlay.style.display = "none";
});

function showOverlay() {
  event.preventDefault();
  overlay.style.display = "flex";
}
