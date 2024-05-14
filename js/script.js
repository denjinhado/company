const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener("click", navegacionResponsive);

function navegacionResponsive() {
  const navegacion = document.querySelector(".navbar");
  if (navegacion.classList.contains("mostrar")) {
    navegacion.classList.remove("mostrar");
  } else {
    navegacion.classList.add("mostrar");
  }
}