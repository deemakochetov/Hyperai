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

const scheduleBtn = document.getElementById("schedule-button");
scheduleBtn.addEventListener("click", () => {
  moveProgressBar();
});
