const menu = document.querySelector(".header-outlined img");
const navigation = document.querySelector(".Header-MobileNavigation");
const header = document.querySelector(".header-headercontainer");
const banner = document.querySelector(".banner-section");
const close = document.querySelector(".navigation-close");
const textContainer = document.querySelector(".card-content p");
const seeMore = document.querySelector(".SeeMore div");
const mainSecondary = document.querySelector(".main-secondary");
const icon = document.querySelector(".SeeMore img");
const scrollToTopBtn = document.querySelector(".icon-section img");
const texts = [
  `It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....`,
];

const nowDate = document.querySelectorAll(".card-date p");
const date = new Date();

nowDate.forEach((item) => {
  item.textContent = date.toLocaleDateString();
});

handleClick(menu);
handleClick(close);

function handleClick(tag) {
  tag.addEventListener("click", () => {
    navigation.classList.contains("hidden")
      ? navigation.classList.remove("hidden")
      : navigation.classList.add("hidden");
    navigation.classList.toggle("active");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    navigation.classList.add("hidden");
    navigation.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.borderBottom = "2px solid #c8c8c8";
  } else {
    header.style.borderBottom = "none";
  }
});

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAndDeleteEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    textContainer.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeAndDeleteEffect, 1000);
      return;
    }
  } else {
    textContainer.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  const delay = isDeleting ? 100 : 50;
  setTimeout(typeAndDeleteEffect, delay);
}
typeAndDeleteEffect();

// See more
seeMore.addEventListener("click", () => {
  if (mainSecondary.classList.contains("showMore")) {
    mainSecondary.classList.remove("showMore");
    icon.src = "../img/down.png";
    document.querySelector(".SeeMore p").textContent = "See More";
  } else {
    mainSecondary.classList.add("showMore");
    icon.src = "../img/up.png";
    document.querySelector(".SeeMore p").textContent = "See Less";
  }
});

window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? document.querySelector(".icon-section").classList.remove("hidden")
    : document.querySelector(".icon-section").classList.add("hidden");
});

// Scroll lên đầu trang khi nhấn nút
function smoothScrollToTop() {
  const currentPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
  }
}

scrollToTopBtn.addEventListener("click", smoothScrollToTop);

// scroll
const menuLinks = document.querySelectorAll(".menu a");
const menuMobileLinks = document.querySelectorAll(".mobile-menu a");

document.addEventListener("DOMContentLoaded", () => {
  scrollToSection(menuLinks);
  scrollToSection(menuMobileLinks);
});

// Scroll to section
function scrollToSection(sectionId) {
  sectionId.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTime = null;

        const animation = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 3) - 1) + b;
        };
        requestAnimationFrame(animation);
      }
    });
  });
}
