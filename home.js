const quickHamburger = document.querySelector(".quick-links-button");
quickHamburger.addEventListener("click", () => {
  quickHamburger.parentElement.classList.toggle("is-active");
});

// Quick Links

let quickLinksLists = document.querySelectorAll(".quick-links-li");

quickLinksLists.forEach((list) => {
  list.addEventListener("click", () => {
    list.classList.toggle("active-li");
  });
});

var popup = document.querySelector("#popup");
var popupCloseBtn = document.querySelector(".popup-close");
setTimeout(() => {
  popup.style.display = "flex";
}, 12000);
popupCloseBtn.addEventListener("click", () => {
  document.querySelector(".popup-box").parentElement.style.display = "none";
});

gsap.utils.toArray(".heading-main").forEach((heading) => {
  gsap.from(
    heading,

    {
      opacity: 0,
      y: 50,
      skewY: -10,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: heading,
        scroller: "body",
        start: "top 80%",
        end: "bottom 80%",
        scrub: 3,
      },
    }
  );
});



