const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view"); // remove when out of view
      }
    });
  },
  { threshold: 0.4 }
);

document
  .querySelectorAll(
    ".animate-on-scroll, .zoom-in-scroll, .zoom-in-scroll-d1, .zoom-ot-in-scroll-d1, .zoom-ot-in-scroll-d2"
  )
  .forEach((el) => observer.observe(el));
