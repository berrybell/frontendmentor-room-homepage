// Toggle navigation

const nav = document.querySelector("nav");
const navButton = document.getElementById("nav-button");
const navButtonClosed = document.getElementById("icon-closed");
const navButtonOpen = document.getElementById("icon-open");

navButton.onclick = function () {
  if (!nav.classList.contains("nav-open")) {
    nav.classList.add("nav-open");

    navButton.classList.add("open");
    navButtonOpen.classList.remove("hidden");
    navButtonClosed.classList.add("hidden");
  } else if (nav.classList.contains("nav-open")) {
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
  for (let i = 0; i < carouselImages.length; i++) {
    let image = carouselImages.item(i);
    let copy = copyWrappers.item(i);

    if (image.classList.contains("active")) {
      let nextIndex = i === carouselImages.length - 1 ? 0 : i + 1;
      let nextImage = carouselImages.item(nextIndex);
      let nextCopy = copyWrappers.item(nextIndex);

      image.classList.remove("active");
      nextImage.classList.add("active");
      copy.classList.remove("active");
      nextCopy.classList.add("active");
      return;
    }
  }
};

backButton.onclick = function () {
  for (let i = 0; i < carouselImages.length; i++) {
    let image = carouselImages.item(i);
    let copy = copyWrappers.item(i);

    if (image.classList.contains("active")) {
      let prevIndex = i === 0 ? carouselImages.length - 1 : i - 1;
      let prevImage = carouselImages.item(prevIndex);
      let prevCopy = copyWrappers.item(prevIndex);

      image.classList.remove("active");
      prevImage.classList.add("active");
      copy.classList.remove("active");
      prevCopy.classList.add("active");
      return;
    }
  }
};
