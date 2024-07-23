const hamburger = document.querySelector(".hamburger");
const quickHamburger = document.querySelector(".quick-links-button");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
});

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

