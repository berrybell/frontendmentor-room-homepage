// Toggle navigation

const nav = document.querySelector("nav");
const navButton = document.getElementById("nav-button");
const navButtonClosed = document.getElementById("icon-closed");
const navButtonOpen = document.getElementById("icon-open");

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

// Scroll through copy
const forwardButton = document.getElementById("forward-button");
const backButton = document.getElementById("back-button");

const carouselImages = document.querySelectorAll(".carousel-image");
const copyWrappers = document.querySelectorAll(".copy-wrapper");

forwardButton.onclick = function () {
  console.log("Forward");
  for (let i = 0; i < carouselImages.length; i++) {
    let item = carouselImages.item(i);
    let nextItem = carouselImages.item(i + 1);

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      nextItem.classList.add("active");
      return;
    }
  }
};
