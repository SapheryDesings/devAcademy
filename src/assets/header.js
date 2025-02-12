// Seleccionamos el header
const header = document.getElementById("header");

// Función para detectar el scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});