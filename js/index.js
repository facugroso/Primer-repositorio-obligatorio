document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
function guardarEmail(email) {
    localStorage.setItem("email", email);
}

document.addEventListener("DOMContentLoaded", function () {
    let emailLocSto = localStorage.getItem("email")
    document.getElementById("txtEmail").innerHTML = emailLocSto;

})