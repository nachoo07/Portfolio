const textElement = document.getElementById('dynamic-text');
const text = '<DESARROLLADOR WEB FULLSTACK/>';
let index = 0;

function typeEffect() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Velocidad de tipeo en milisegundos
    } else {
        setTimeout(resetEffect, 1000); // Espera 2 segundos antes de reiniciar
    }
}

function resetEffect() {
    textElement.innerHTML = '';
    index = 0;
    typeEffect();
}

document.addEventListener('DOMContentLoaded', (event) => {
    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");
      });
    });
  });