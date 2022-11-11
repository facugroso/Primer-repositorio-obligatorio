document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CARRITO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      produArray = resultObj.data;
      showCartList(produArray.articles);
    }
  });
});

function showCartList(array) {
  array.forEach((produ) => {
    document.getElementById("container").innerHTML += `
    
    <div class="row">
    
    <div class="col-2 container"  >
    <img src= "${produ.image}" class="img-fluid img-thumbnail"/>                                   
          </div>
          
          <div class="col-2 container">
          ${produ.name}
          </div>
          
          <div class="col-2 container">
          ${produ.currency} ${produ.unitCost}
          </div>
          
          <div class="col-2 container needs-validation" novalidate>
          <input type="number" min="0" id="cantidadInput" class='container-fluid w-45' onchange='multiplicar(${produ.unitCost})' required></input>
          </div> 
          
          <div class="col-2 container">
          ${produ.currency}
          <div class="d-inline" id="subTot">
          </div>
          </div>
          
          </div>
    `;
  });
}
const subTotGen = document.getElementById("subTotGen");
const totGen = document.getElementById("totGen");
const costEnv = document.getElementById("costEnvio");



const multiplicar = (precio) => 
{ 
  const subTot = document.getElementById("subTot")
  const cantidad = document.getElementById("cantidadInput").value
  subTot.innerHTML = (cantidad*precio);
  subTotGen.innerHTML = "USD "+ subTot.innerHTML

  
};

const calcularEnvio = (porcentaje) => 
{ 
costEnv.innerHTML = porcentaje*subTot.innerHTML/100
}

const total = () => {
totGen.innerHTML =  parseInt(costEnv.innerHTML) + parseInt(subTot.innerHTML)

}
 

const seleccionar = document.getElementById("seleccionar")

function handleChange(radio) {
  if (radio.checked == true) {
    seleccionar.innerHTML  = "Tarjeta"
    document.getElementById("pagoDatos").innerHTML = `
    <form class="needs-validation" novalidate>
    <div class="row g-3">
    <div class="col-sm-6">
    <label>Numero de tarjeta</label>
    <input type="number" min="0" required></input>
    </div>
    
    <div class="col-sm-6">
    <label>Código de seg.</label>
    <input type="number" min="0" required></input>
    </div>

  <div class="col-sm-6">
    <label>Vencimiento(MM/AA)</label>
    <input type="date" required></input>
  </div>
</div>
   </form>

 `;
  }
}
function handleChangedos(radio) {
  if (radio.checked == true) {
    seleccionar.innerHTML  = "Transferencia"
    document.getElementById("pagoDatos").innerHTML = `
    <form class="needs-validation" novalidate>
    <div class="row g-3 ">
    <hr class="my-4">
    <div class="col-sm-6">
    <label>Número de cuenta.</label>
    <input type="number" min="0"></input>
    </div>
    </div>
    </form>
    `;
  }
}









 











