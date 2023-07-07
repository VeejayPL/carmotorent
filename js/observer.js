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
