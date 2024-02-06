const menu = document.querySelector(".menu");
const menuBlackBg = document.querySelector("#menuBlackBg");
const btnOpenMenu = document.querySelector("#openMenu");
const btnCloseMenu = document.querySelector("#closeMenu");

btnOpenMenu.addEventListener("click", () => {
  menu.classList.add("open-menu");
  menuBlackBg.style.display = "block";
  document.body.style.overflowY = "hidden";
});

function closeMenu(){
  menu.classList.remove("open-menu");
  menuBlackBg.style.display = "none";
  document.body.style.overflowY = "scroll";  
}

btnCloseMenu.addEventListener("click", closeMenu);
menuBlackBg.addEventListener("click", closeMenu);
