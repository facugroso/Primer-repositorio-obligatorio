//tengo que hacer uso de localStorange, para los nuevos datos
const usuario = document.getElementById("usuario");
const jajas = document.getElementById("txtEmail");

document.addEventListener("DOMContentLoaded", function (e) {
  if (localStorage.getItem("email")) {
    usuario.innerHTML = `<li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>`;
    jajas.innerHTML = localStorage.getItem("email");
  }
});




