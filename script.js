const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
});

// Quick Links

let quickLinksLists = document.querySelectorAll(".quick-links-li");

quickLinksLists.forEach((list) => {
    list.addEventListener("click", () => {
        list.classList.toggle("active-li");
    });
});

