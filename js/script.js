// console.log("hello world");

// const myName = "Vrushant Bhanderi";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////
///////////// SET CURRRENT YEAR ///////////
///////////////////////////////////////////

const yearEL = document.querySelector(".year");
const currentyear = new Date().getFullYear();
console.log(currentyear);
yearEL.textContent = currentyear;

///////////////////////////////////////////
///////////// MOBILE NAVIGATION ///////////
///////////////////////////////////////////

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerlEL = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerlEL.classList.toggle("nav-open");
});

///////////////////////////////////////////
///////////// SAFARI SCROLLING  ///////////
///////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const herf = link.getAttribute("href");
    console.log(herf);

    // Scroll Back to top
    if (herf == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////
///////////// STICKEY NAVIGATION  /////////
///////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting == true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

