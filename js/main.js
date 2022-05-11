const hamburger = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav");
const searchContent = document.querySelector("#search-icon");
const searchInput = document.querySelector(".search-input");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-nav");
    hamburger.classList.toggle("is-active");
})

searchContent.addEventListener("click", () => {
    navMenu.classList.toggle("search");
    navMenu.classList.toggle("no-search");
    searchInput.classList.toggle("search-active");
})
