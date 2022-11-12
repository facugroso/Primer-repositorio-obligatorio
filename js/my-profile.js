//tengo que hacer uso de localStorange, para los nuevos datos 
const usuario = document.getElementById("usuario")
document.addEventListener("DOMContentLoaded", function (e) {
    if (localStorage.getItem("email") == true) {
    usuario.innerHTML = `<li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>`
    }
})



