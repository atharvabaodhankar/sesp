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

// Home Page

function homeFunc() {
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




}

// Contact Us

function contactUsFunc() {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  
  
  const circles = document.querySelectorAll(".circle-contacts");
  
  circles.forEach((circle) => {
    
    window.addEventListener("mousemove", (e) => {
    let x = e.pageX - innerWidth / 2;
    let y = e.pageY - innerHeight / 2;
    gsap.to(circle, {
      x: x / 9,
      y: y / 12,
      ease : "ease",
      duration: 2
    });
  });
  
  });
  
}

// Admission

function admissionFunc() {
  var admissionBoxs = document.querySelectorAll(".admission-box");

  var admissionSections = document.querySelectorAll(".admission-sections");
  admissionBoxs.forEach((admissionBox) => {
      admissionBox.addEventListener("click", () => {

          admissionSections.forEach((admissionSection) => {
              admissionSection.classList.remove("is-active");
              
          })
          admissionBoxs.forEach((admissionBox) => {
              admissionBox.classList.remove("is-active");
          })

          let activeElement = admissionBox.dataset.choice;
          admissionBox.classList.toggle("is-active");
          document.querySelector(`.${activeElement}`).classList.add("is-active");

          gsap.from(`.${activeElement}`, { duration: 1.5, y: 50, opacity: 0, ease: "power4.inOut" })
      })
  })
}

// Department

function departmentFunc() {
  var tabSections = document.querySelectorAll(".dept-btn");
  var realSections = document.querySelectorAll(".dept-sections");

  tabSections.forEach((tab) => {
      tab.addEventListener("click", () => {
          tabSections.forEach((section) => {
              section.classList.remove("is-active");
          })
          tab.classList.add("is-active");
          var tabName = tab.getAttribute("data-section");
          realSections.forEach((section) => {
              section.classList.remove("is-active");
              console.log(section.classList);
          })

          document.querySelector(`.${tabName}`).classList.add("is-active");
          gsap.from(`.${tabName}`, { duration: 1.5, y: 50, opacity: 0, ease: "power4.inOut" })
      })
  })

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },

        1200: {
            slidesPerView: 2,
        }
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
});


}