//tengo que hacer uso de localStorange, para los nuevos datos
const usuario = document.getElementById("usuario");
const correo = document.getElementById("txtEmail");

document.addEventListener("DOMContentLoaded", function (e) {
  if (localStorage.getItem("email")) {
    usuario.innerHTML = `<li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>`;
    correo.innerHTML = localStorage.getItem("email");
  }
});



document.getElementById("button").addEventListener("click", function () {
  let email = document.getElementById("txtEmail");
  let password = document.getElementById("txtPassword");
  if (email.value === "" || password.value === "") {
    alert("Debe de completar campos");
  } else {
    //En la parte que haces la validación, antes de redireccionar, guardalo en el localStorage
    localStorage.setItem("email", email.value);

    window.location.href = "index.html";
  }
});




