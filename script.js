const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("is-active")) {
    gsap.from(".nav ul li", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1,
    });
  }
  hamburger.classList.toggle("is-active");
  navBar.classList.toggle("is-active");
});
