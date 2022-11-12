/// Example starter JavaScript for disabling form submissions if there are invalid fields
const daledale = ()=>{
  const primNombre = document.getElementById("primNombre")
  const segNombre = document.getElementById("segNombre")
  const primApellido = document.getElementById("primApellido")
  const segApellido = document.getElementById("segApellido")
  const emaill = document.getElementById("txtEmail")
  const numTelefono = document.getElementById("numTelefono")
  console.log(emaill)
  
  localStorage.setItem("primNombre",primNombre.value)
  localStorage.setItem("segNombre",segNombre.value)
  localStorage.setItem("primApellido",primApellido.value)
  localStorage.setItem("segApellido",segApellido.value)
  localStorage.setItem("txtEmail",emaill.value)
  localStorage.setItem("numTelefono",numTelefono.value)
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
  

