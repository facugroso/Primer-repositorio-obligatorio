document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autos").addEventListener("click", function () {
      localStorage.setItem("catID", 101);
      window.location = "products.html";
    });
    document.getElementById("juguet").addEventListener("click", function () {
      localStorage.setItem("catID", 102);
      window.location = "products.html";
    });
    document.getElementById("muebles").addEventListener("click", function () {
      localStorage.setItem("catID", 103);
      window.location = "products.html";
    });
  });
  
  function closeSesion() {
    localStorage.removeItem("email");
  }
  


