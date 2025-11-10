// Get the toggle button and menu container
const menuToggle = document.getElementById("menuToggle");
const menuContainer = document.querySelector(".menu-container");

// On click, toggle the "open" class and rotate icon
menuToggle.addEventListener("click", () =>{
    menuContainer.classList.toggle("open");
    menuToggle.classList.toggle("rotate");
});