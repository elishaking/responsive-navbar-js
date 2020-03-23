const menu = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const nav = document.getElementById("nav");

menu.addEventListener("click", e => {
  menu.classList.toggle("open");
  menuContent.classList.toggle("open");
  setTimeout(() => {
    nav.classList.toggle("open");
  }, 300);
});
