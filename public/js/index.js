const button = document.querySelector("button");
const navMobile = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

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
  } else if (window.scrollY <= 50) {
    header.classList.remove("scrolled");
  }
});
