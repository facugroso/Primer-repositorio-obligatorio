
const usuario = document.getElementById("usuario");
const correo = document.getElementById("txtEmail");

document.addEventListener("DOMContentLoaded", function (e) {
  if (localStorage.getItem("email")) {
    usuario.innerHTML = `<li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>`;
    correo.innerHTML = localStorage.getItem("email");
  }
});

const primNombre = document.getElementById("primNombre");
const segNombre = document.getElementById("segNombre");
const primApellido = document.getElementById("primApellido");
const segApellido = document.getElementById("segApellido");
const email = document.getElementById("email");
const numTelefono = document.getElementById("numTelefono");

document.addEventListener("DOMContentLoaded", function (e) {
  localStorage.getItem("primNombre") &&
    (primNombre.value = localStorage.getItem("primNombre"));
  localStorage.getItem("segNombre") &&
    (segNombre.value = localStorage.getItem("segNombre"));
  localStorage.getItem("primApellido") &&
    (primApellido.value = localStorage.getItem("primApellido"));
  localStorage.getItem("segApellido") &&
    (segApellido.value = localStorage.getItem("segApellido"));
  localStorage.getItem("email") &&
    (email.value = localStorage.getItem("email"));
  localStorage.getItem("numTelefono") &&
    (numTelefono.value = localStorage.getItem("numTelefono"));
});

const datosUsuario = () => {
  localStorage.setItem("primNombre", primNombre.value);
  localStorage.setItem("segNombre", segNombre.value);
  localStorage.setItem("primApellido", primApellido.value);
  localStorage.setItem("segApellido", segApellido.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("numTelefono", numTelefono.value);
};

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          alert("Por favor ingrese los datos correctamente");
        } else 
        {
        
        datosUsuario();
        alert("Los datos se han guardado correctamente")
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();




