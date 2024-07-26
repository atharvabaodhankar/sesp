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
homeTl.from(".nav ul li", {
  opacity: 0,
  skewX: -30,
  y: 60,
  delay: -1,
  duration: 1,
  ease: "power4.inOut",
  stagger: 0.1,
});
homeTl.from("#swipe", {
  opacity: 0,
  scale: 0.5,
  y: 60,
  delay: -1,
  duration: 2,
  ease: "power4",
  stagger: 0.1,
});

// Announcements, News, Vison/Mission

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

gsap.from(".icons-section .i-box",
    {
    stagger: 0.5,
    opacity: 0,
    scale : 0.5,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: ".icons-section",
      start: "0% 80%",
      end: "100% 80%",
        scrub: 3,
    },
  }
);
gsap.from(".footer-left , .footer-mid , .footer-right",
    {
    stagger: 0.5,
    opacity: 0,
    y : 20,
    skewY : -5,
    ease: "ease",
    scrollTrigger: {
      scroller: "body",
      trigger: ".footer",
      start: "0% 80%",
      end: "20% 80%",
        scrub: 3,
    },
  }
);
