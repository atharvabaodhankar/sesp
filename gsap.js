var homeTl = gsap.timeline();

homeTl.from(".logo-img", {
  opacity: 0,
  y: 30,
  duration: 1.3,
  ease: "power1.inOut",
});
homeTl.from(".logo-texts", {
  opacity: 0,
  y: 30,
  delay: -1,
  duration: 1,
  ease: "power4.inOut",
  stagger: 0.5,
});
if (window.innerWidth > 800) {
  homeTl.from(".nav ul li", {
    opacity: 0,
    skewX: -30,
    y: 60,
    delay: -1,
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.1,
  });
}
homeTl.from("#swipe", {
  opacity: 0,
  scale: 0.5,
  y: 60,
  delay: -1,
  duration: 2,
  ease: "power4",
  stagger: 0.1,
});
// Menu Button

// Announcements, News, Vison/Mission

gsap.from(
  ".announcements",

  {
    opacity: 0,
    xPercent: 10,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: ".announcements",
      start: "top 80%",
      end: "100% 80%",
      scrub: 3,
    },
  }
);
gsap.from(
  ".news",

  {
    opacity: 0,
    xPercent: -10,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: ".announcements",
      start: "top 80%",
      end: "100% 80%",
      scrub: 3,
    },
  }
);

// Welcome

gsap.from(
  "#welcome h2",

  {
    stagger: 0.2,
    opacity: 0,
    xPercent: -10,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: "#welcome",
      start: "40% 80%",
      end: "100% 80%",
      scrub: 3,
    },
  }
);
gsap.from(
  "#welcome li",

  {
    stagger: 0.5,
    opacity: 0,
    xPercent: 10,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: "#welcome",
      start: "30% 80%",
      end: "100% 80%",
      scrub: 3,
    },
  }
);

// Footer

gsap.from(".icons-section .i-box", {
  stagger: 0.5,
  opacity: 0,
  scale: 0.5,
  ease: "ease",
  scrollTrigger: {
    scroller: "body",
    trigger: ".icons-section",
    start: "0% 80%",
    end: "100% 80%",
    scrub: 3,
  },
});
gsap.from(".footer-left , .footer-mid , .footer-right", {
  stagger: 0.5,
  opacity: 0,
  y: 20,
  skewY: -5,
  ease: "ease",
  scrollTrigger: {
    scroller: "body",
    trigger: ".footer",
    start: "0% 80%",
    end: "20% 80%",
    scrub: 3,
  },
});

// About Us

var aboutusTl = gsap.timeline({ autoplay: false });

aboutusTl.from(".aboutus-text", {
  stagger: 0.5,
  opacity: 0,
  y: 20,
  ease: "ease",
});
aboutusTl.from(".aboutus > h1", {
  opacity: 0,
  y: 40,
  ease: "ease",
});

gsap.from(".aboutus-box", {
  stagger: 0.5,
  opacity: 0,
  y: -20,
  rotate: -5,
  skewY: -5,
  ease: "power1",
  scrollTrigger: {
    scroller: "body",
    trigger: ".aboutus",
    start: `${window.innerWidth > 800 ? "-15% 80%" : "4% 80%"}`,
    end: "90% 80%",
    scrub: 3,
  },
});

// Principal

var principalTl = gsap.timeline();

principalTl.from("#principal > h1", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "ease",
});
principalTl.from(".principal-img", {
  opacity: 0,
  duration: 1,
  scale: 0.7,
  y: 40,
  ease: "ease",
});
gsap.from(".pricipal-text", {
  stagger: 0.5,
  opacity: 0,
  y: -20,
  skewY: -5,
  ease: "power1",
  scrollTrigger: {
    scroller: "body",
    trigger: ".pricipal-desc",
    start: `${window.innerWidth > 800 ? "-5% 80%" : "4% 80%"}`,
    end: "40% 80%",
    scrub: 2,
  },
});

// Programmes
var programmesTl = gsap.timeline();

programmesTl.from(".programmes-header h1", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "ease",
});
programmesTl.from(".programme-wrapper", {
  stagger: 0.3,
  opacity: 0,
  y: -20,
  ease: "power2",
});

// Admissions
var admissionTl = gsap.timeline();

admissionTl.from(".admission-header h1", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "ease",
});

admissionTl.from(".admission-bar", {
  opacity: 0,
  duration: 1,
  y : 20,
  ease: "ease",
});

// Photo Gallery
var galleryTl = gsap.timeline();

galleryTl.from(".gallary-header h1", {
  opacity: 0,
  duration: 1,
  y: 40,
  ease: "ease",
});

galleryTl.from(".gallary", {
  opacity: 0,
  duration: 1.3,
  y : 20,
  ease: "ease",
});

// Contact Us
var contactUsTl = gsap.timeline();


contactUsTl.from("#contactus", {
  opacity: 0,
  duration: 1.5,
  y: 40,
  delay : 1,
  ease: "ease",
});

contactUsTl.from(
  ".big-circle",

  {
    opacity: 0,
    y: 50,
    stagger : 0.3,
    ease: "power4.inOut",
    duration: 1.5,
    scale : 0.8,
  }
);


