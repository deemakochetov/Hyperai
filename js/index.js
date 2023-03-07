const toogleOptionWhatIsAI = document.getElementById(
  "toogle-option-what-is-ai"
);
const toogleOptionWhatCanAI = document.getElementById(
  "toogle-option-what-can-ai"
);
toogleOptionWhatIsAI.addEventListener("click", () => {
  if (!toogleOptionWhatIsAI.classList.contains("js-checked")) {
    toggleChecked();
  }
});
toogleOptionWhatCanAI.addEventListener("click", () => {
  if (!toogleOptionWhatCanAI.classList.contains("js-checked")) {
    toggleChecked();
  }
});

function toggleChecked() {
  toogleOptionWhatCanAI.classList.toggle("js-checked");
  toogleOptionWhatIsAI.classList.toggle("js-checked");
}
