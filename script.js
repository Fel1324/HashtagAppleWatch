const btnsChangeColor = document.querySelectorAll("[data-color]");
const btnsChangeSize = document.querySelectorAll("[data-size]");
const btnsChangeImage = document.querySelectorAll("[data-image]");

const imgPreview = document.querySelector("#imgPreview");
const miniImages = document.querySelectorAll(".image");
const colorName = document.querySelector("#colorName");
const titleColorName = document.querySelector("#titleColorName");
const boxSize = document.querySelector("#boxSize");

let color = "azul-inverno";
let image = "imagem-1";

btnsChangeColor.forEach(btn => {
  btn.addEventListener("click", event => {
    color = event.target.dataset.color;
    imgPreview.src = `./img/cores/imagens-${color.toLowerCase()}/${image}.jpeg`;
    colorName.textContent = color.toLowerCase();
    titleColorName.textContent = color;

    for(let i = 0; i < miniImages.length; i++){
      miniImages[i].src = `./img/cores/imagens-${color.toLowerCase()}/imagem-${i}.jpeg`;
    }
  });
});

btnsChangeImage.forEach(btn => {
  btn.addEventListener("click", event => {
    image = event.target.dataset.image;
    imgPreview.src = `./img/cores/imagens-${color.toLowerCase()}/${image}.jpeg`;
  });
});

btnsChangeSize.forEach(btn => {
  btn.addEventListener("click", event => {
    const size = event.target.dataset.size;
    size === "41 mm" ? imgPreview.classList.add("small-image") : imgPreview.classList.remove("small-image");
  });
});

// MENU LATERAL
const menu = document.querySelector(".menu");
const menuBlackBg = document.querySelector("#menuBlackBg");
const btnOpenMenu = document.querySelector("#openMenu");
const btnCloseMenu = document.querySelector("#closeMenu");

btnOpenMenu.addEventListener("click", () => {
  if(document.body.clientWidth <= 500){
    menuBlackBg.style.display = "none";
    console.log("cjehpoui");
  }

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
