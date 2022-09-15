document.getElementById("button").addEventListener("click", function () {

    let email = document.getElementById("txtEmail");
    let password = document.getElementById("txtPassword");
      console.log(password.value)
    if ((email.value === "")||(password.value === "")) {
  
      alert("Debe de completar campos")
    } else {//En la parte que haces la validación, antes de redireccionar, guardalo en el localStorage
      localStorage.setItem("email", email.value);
  
      window.location.href = "index.html";
    }
  
  
  });
  