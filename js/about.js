const infoIcon = document.querySelector(".info-icon");
const infoText = document.querySelector(".info-text");
infoIcon.addEventListener("click", function () {
  infoText.classList.toggle("visible");
});

function moveProgressBar() {
  let getProgressWrapWidth =
    document.querySelector(".progress-wrap").offsetWidth;
  let progressTotal = getProgressWrapWidth;
  let animationLength = 2500;

  let progressBar = document.getElementById("progress-bar");
  progressBar.style.left = progressTotal + "px";
  progressBar.style.color = "red";
}

const appointmentForm = document.getElementById("appointment-form");
const overlaySchedule = document.getElementById("overlay-schedule");
const submitBtn = document.getElementById("schedule-button");
appointmentForm.addEventListener("submit", () => {
  event.preventDefault();
  moveProgressBar();
  setTimeout(function () {
    overlaySchedule.style.display = "flex";
    appointmentForm.reset();
  }, 2500);
  submitBtn.classList.add("disabled-btn");
  submitBtn.disabled = true;
});

const closeButtonSchedule = document.getElementById("close-button-schedule");
closeButtonSchedule.addEventListener("click", function () {
  overlaySchedule.style.display = "none";
});
