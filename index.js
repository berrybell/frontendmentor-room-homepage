const nav = document.querySelector("nav");
const navButton = document.getElementById("nav-button");
const closed = document.getElementById("icon-closed");
const open = document.getElementById("icon-open");

console.log(document.getElementById("nav-button"));

navButton.onclick = function () {
  if (nav.classList.contains("nav-closed")) {
    nav.classList.add("nav-open");
    nav.classList.remove("nav-closed");

    open.classList.remove("hidden");
    closed.classList.add("hidden");
  } else if (nav.classList.contains("nav-open")) {
    nav.classList.add("nav-closed");
    nav.classList.remove("nav-open");

    open.classList.add("hidden");
    closed.classList.remove("hidden");
  }
};
