const infoIcon = document.querySelector(".info-icon");
const infoText = document.querySelector(".info-text");
infoIcon.addEventListener("click", function () {
  infoText.classList.toggle("visible");
});
