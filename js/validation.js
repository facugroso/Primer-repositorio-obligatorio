/// Example starter JavaScript for disabling form submissions if there are invalid fields
  const primNombre = document.getElementById("primNombre")
  const segNombre = document.getElementById("segNombre")
  const primApellido = document.getElementById("primApellido")
  const segApellido = document.getElementById("segApellido")
  const email = document.getElementById("email")
  const numTelefono = document.getElementById("numTelefono")

 document.addEventListener("DOMContentLoaded", function (e) {
 localStorage.getItem("primNombre") && (primNombre.value = localStorage.getItem("primNombre"));
 localStorage.getItem("segNombre") && (primNombre.value = localStorage.getItem("segNombre"));
 localStorage.getItem("primApellido") && (primNombre.value = localStorage.getItem("primApellido"));
 localStorage.getItem("segApellido") && (primNombre.value = localStorage.getItem("segApellido"));
 localStorage.getItem("email") && (primNombre.value = localStorage.getItem("email"));
 localStorage.getItem("numTelefono") && (primNombre.value = localStorage.getItem("numTelefono"));




})


const daledale = ()=>{
 
  debugger
  
  localStorage.setItem("primNombre",primNombre.value);
  localStorage.setItem("segNombre",segNombre.value);
  localStorage.setItem("primApellido",primApellido.value);
  localStorage.setItem("segApellido",segApellido.value);
  localStorage.removeItem("email");
  localStorage.setItem("email",email.value);
  localStorage.setItem("numTelefono",numTelefono.value);
  }
  

  
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation")
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else{daledale()}
  
          form.classList.add('was-validated')

        }, false)
      })
  })()
  

  function checkout(){
    let checkBoxes = document.getElementsByClassName( "flexRadioDefault" );
    if (checkBoxes.length > 3){
        alert('You cannot select more than 3');
        return false;
      }
      if (checkBoxes.length == 0) {
        alert('Please select at least 1 book');
       
        return false;
    }
  }

