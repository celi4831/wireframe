gsap.registerPlugin(ScrollTrigger);

const section1 = document.querySelector("#section1");

const billede = document.querySelector(".image1");
const tekst1 = document.querySelector(".tekst1");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section1,
      start: "35% 60%",
      end: "+=200",
      scrub: true,
      markers: true,
    },
  })
  .from(billede, {
    opacity: 0,
  })
  .from(tekst1, {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1,
  });

const section2 = document.querySelector("#section2");

const flaske = document.querySelector(".image_flaske");
const tekst2 = document.querySelector(".tekst2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: section2,
      start: "20% 60%",
      end: "+=200",
      scrub: true,
      markers: true,
    },
  })
  .from(flaske, {
    opacity: 0,
    x: 100,
  })
  .from(tekst2, {
    opacity: 0,
    y: 100,
    stagger: 0.1,
    duration: 1,
  });
