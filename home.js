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
}, 8000);
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

// Loader

var loaderTl = gsap.timeline({
  onComplete: () => {
    let loader = document.querySelector("#loader");
    setTimeout(() => {
      loader.remove();
    }, 500)
  }
});
function breakTheLoader() {
  var h1 = document.querySelector(".loader-heading");

  var splittedText = h1.textContent.split("");
  var halfValue = Math.ceil(splittedText.length / 2);
  var clutter = "";
  splittedText.forEach((letter, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="loader-letter-a">${letter}</span>`;
    } else {
      clutter += `<span class="loader-letter-b">${letter}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheLoader();

loaderTl.from(".loader-img", {
  scale: 3,
  rotate: 20,
  duration: 1,
});
loaderTl.to(
  ".loader-img",
  {
    y: -40,
    duration: 1,
  },
  "loader-h1"
);
loaderTl.from(
  ".loader-letter-a",
  {
    y: 80,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0,
  },
  "loader-h1"
);
loaderTl.from(
  ".loader-letter-b",
  {
    y: 80,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0,
  },
  "loader-h1"
);
loaderTl.to(
  ".loader-wrap-1 ,  .loader-wrap-3",
  {
    xPercent: -100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15,
  },"loader-wrap"

);
loaderTl.to(
  ".loader-wrap-2 , .loader-wrap-4",
  {
    xPercent: 100,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15,
  },"loader-wrap"
);
loaderTl.to(
  ".loader",
  {
    delay : 0.5,
    opacity : 0,
  },"loader-wrap"
);


