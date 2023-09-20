let menu = document.getElementById("menu");
let mobileNav = document.querySelector(".mobile-nav");
let gos = document.querySelectorAll(".go");

menu.addEventListener("click", ()=>{
    mobileNav.classList.add("open");
});
Array.from(gos).forEach(element => {
    element.addEventListener("click", ()=>{
        mobileNav.classList.remove("open");
    });
});