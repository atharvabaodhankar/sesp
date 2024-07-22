const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
});

     


