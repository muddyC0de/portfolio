const navLi = document.querySelector(".navigation").querySelectorAll("li");

const sections = document.querySelectorAll(".section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLi.forEach((li) => {
        li.classList.remove("active");
      });
      navLi[Number(entry.target.id) - 1].classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

const moveToFunc = (index) => {
  navLi[index - 1].classList.add("active");
  document.getElementById(index).scrollIntoView({
    behavior: "smooth",
  });
};

AOS.init({
  once: false,
  threshold: 1,
});
