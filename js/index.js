const button = document.querySelector("button");
const navMobile = document.querySelector(".nav-menu");
const header = document.querySelector(".header");
const chevron = document.querySelector(".chevron");
const itemList = document.querySelectorAll(".animation");

const options = { threshold: 0.2 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("go");
      observer.unobserve(entry.target);
    }
    // } else {
    // entry.target.classList.remove("go");
    // }
  });
};

const myObserver = new IntersectionObserver(callback, options);

itemList.forEach((item) => {
  myObserver.observe(item);
});

button.addEventListener("click", () => {
  const currentState = button.getAttribute("data-state");
  if (!currentState || currentState === "closed") {
    button.setAttribute("data-state", "opened");
    button.setAttribute("aria-expanded", "true");
    navMobile.classList.add("active");
    header.classList.add("active");
  } else {
    button.setAttribute("data-state", "closed");
    button.setAttribute("aria-expanded", "false");
    navMobile.classList.remove("active");
    header.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    if (chevron) {
      chevron.classList.remove("animated");
    }
  } else if (window.scrollY <= 50) {
    header.classList.remove("scrolled");
    if (chevron) {
      chevron.classList.add("animated");
    }
  }
});
