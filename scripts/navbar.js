const hamburger = document.getElementById("mobile-menu-bar");
const drawer = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu");


hamburger.addEventListener("click", toggleDrawer);
closeBtn.addEventListener("click", toggleDrawer);

let isOpen = false;

window.addEventListener("load", () => {
  drawer.classList.add("ready");
});

function toggleDrawer() {
  drawer.classList.toggle("open");
  isOpen = !isOpen;
}