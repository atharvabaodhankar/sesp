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



try {
    const card = document.querySelector(".principal-img");

card.addEventListener("mousemove", (e) => {
  let x = e.pageX - innerWidth / 2;
  let y = e.pageY - innerHeight / 2;
  gsap.to(card, {
    x: x / 20,
    y: y / 20,
  });
});
card.addEventListener("mouseleave", (e) => {
  gsap.to(card, {
    x: 0,
    y: 0,
  });
});
} catch (error) {
    console.log(error);
}
