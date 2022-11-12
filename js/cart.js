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
          
          <div class="col-2 container">
          <form class="needs-validation" novalidate>

          <input type="number" min="0" id="cantidadInput" class='container-fluid w-45' onchange='multiplicar(${produ.unitCost})' required></input>
          </div> 
          </form>
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
const infSobrePago = document.getElementById("infoSobrePago");

let tipoDePagoElegido;
function handleChange(radio) {
  if (radio.checked == true) {
    tipoDePagoElegido = "Tarjeta";
    document.getElementById("pagoDatos").innerHTML = `
 <div class="row g-3">
  <div class="col-sm-6">
    <label>Numero de tarjeta</label>
    <input type="number" min="0" class='validadora' required></input>
  </div>

  <div class="col-sm-6">
    <label>Código de seg.</label>
    <input type="number" min="0" class='validadora' required></input>
  </div>

  <div class="col-sm-6">
    <label>Vencimiento(MM/AA)</label>
    <input type="date" class='validadora' required></input>
  </div>
</div>;

 `;
  }
}
function handleChangedos(radio) {
  if (radio.checked == true) {
    tipoDePagoElegido = "Transferencia";
    document.getElementById("pagoDatos").innerHTML = `
    <div class="row g-3">
    <hr class="my-4">
    <div class="col-sm-6">
    <label>Número de cuenta.</label>
    <input type="number" class='validadora' min="0"></input>
    </div>
</div>
    `;
  }
}

const validadorModal = () => {
  const etiquetaValidadora = document.getElementsByClassName("validadora");
  const cantidadDeDatosValidados = [];
  Array.from(etiquetaValidadora).forEach((item) => {
    if (item.value !== "") {
      cantidadDeDatosValidados.push(item.value);
    }
  });
  if (
    cantidadDeDatosValidados.length === Array.from(etiquetaValidadora).length
  ) {
    infSobrePago.innerHTML = "Has seleccionado " + tipoDePagoElegido;
    return true;
  } else {
    infSobrePago.innerHTML = "Falta añadir datos en tu modal";
  }
};
const validadorGen = () => {
  const etiquetaValidadora = document.getElementsByClassName("validadoraGen");
  const cantidadDeDatosValidados = [];
  Array.from(etiquetaValidadora).forEach((item) => {
    if (item.value !== "") {
      cantidadDeDatosValidados.push(item.value);
    }
  });
  if (
    cantidadDeDatosValidados.length === Array.from(etiquetaValidadora).length &&
    infSobrePago.innerHTML !== "Falta añadir datos en tu modal"
  ) {
    alert("Has completado todos los datos!!!");
  } else {
    console.log("cagaste");
  }
};








 











