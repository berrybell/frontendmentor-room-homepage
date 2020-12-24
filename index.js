const nav = document.querySelector("nav");
const navButton = document.getElementById("nav-button");

console.log(document.getElementById("nav-button"));

navButton.onclick = function () {
  if (nav.classList.contains("nav-closed")) {
    nav.classList.add("nav-open");
    nav.classList.remove("nav-closed");
  } else if (nav.classList.contains("nav-open")) {
    nav.classList.add("nav-closed");
    nav.classList.remove("nav-open");
  }
};
