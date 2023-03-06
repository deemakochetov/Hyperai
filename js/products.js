function toggleTable() {
  let table = document.getElementById("table");
  table.classList.toggle("animate");
  if (table.style.display !== "table") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
}

const button = document.querySelector(".additional-button");
const table = document.querySelector("#table");

button.addEventListener("click", () => {
  toggleTable();
  // table.classList.add("animate");

  table.scrollIntoView({ behavior: "smooth" });
});

// Get the URLSearchParams object for the current URL
let searchParams = new URLSearchParams(window.location.search);

// Get the value of the "subscription" parameter
let subscription = searchParams.get("subscription"); // returns level of sub
let selectedSub;
if (subscription === "basic") {
  selectedSub = document.getElementById("basic");
}
if (subscription === "standard") {
  selectedSub = document.getElementById("standard");
}
if (subscription === "business") {
  selectedSub = document.getElementById("business");
}

selectedSub.classList.add("highlited");
