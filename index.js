const nav = document.querySelector("nav");
const navButton = document.getElementById("nav-button");
const navButtonClosed = document.getElementById("icon-closed");
const navButtonOpen = document.getElementById("icon-open");

console.log(document.getElementById("nav-button"));

navButton.onclick = function () {
  if (nav.classList.contains("nav-closed")) {
    nav.classList.add("nav-open");
    nav.classList.remove("nav-closed");

    navButton.classList.add("open");
    navButtonOpen.classList.remove("hidden");
    navButtonClosed.classList.add("hidden");
  } else if (nav.classList.contains("nav-open")) {
    nav.classList.add("nav-closed");
    nav.classList.remove("nav-open");

    navButton.classList.remove("open");
    navButtonOpen.classList.add("hidden");
    navButtonClosed.classList.remove("hidden");
  }
};
