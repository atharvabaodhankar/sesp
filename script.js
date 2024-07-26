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
  hamburger.classList.toggle("is-active");
  navBar.classList.toggle("is-active");
});




