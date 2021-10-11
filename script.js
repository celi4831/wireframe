gsap.registerPlugin(ScrollTrigger);

// section 1

const section1 = document.querySelector("#section1");

const billede = document.querySelector(".image1");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section1,
      start: "10% 40%",
      end: "+=200",
      scrub: true,
      //   markers: true,
    },
  })
  .from(billede, {
    opacity: 0,
  });

//   section 2

const section2 = document.querySelector("#section2");

const flaske = document.querySelector(".image_flaske");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section2,
      start: "50% 50%",
      end: "+=200",
      scrub: true,
      //   markers: true,
    },
  })
  .from(flaske, {
    opacity: 0,
    x: 100,
  });

//   section 3

const section3 = document.querySelector("#section3");

const cirkler = document.querySelectorAll(".cirkel");
const p = document.querySelectorAll(".label");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section3,
      start: "30% 30%",
      end: "+=200",
      scrub: true,
      //   markers: true,
    },
  })
  .from(cirkler, {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1,
  })
  .from(p, {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1,
  });

//   section 4

const section4 = document.querySelector("#section4");

const hakker = document.querySelectorAll(".hak");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section4,
      start: "45% 30%",
      end: "+=200",
      scrub: true,
      //   markers: true,
    },
  })
  .from(hakker, {
    opacity: 0,
    x: 100,
    stagger: 0.8,
    duration: 1,
  });

//   section 5

const section5 = document.querySelector("#section5");

const h2 = document.querySelectorAll("#section5 h2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section5,
      start: "10% 60%",
      end: "+=200",
      scrub: true,
      //   markers: true,
    },
  })
  .from(h2, {
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });
