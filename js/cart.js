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
    
    <div class="row img-thumbnail">
    
    <div class="col-2 container "  >
    <img src= "${produ.image}" class="img-fluid img-thumbnail"/>                                   
          </div>
          
          <div class="col-2 container img-thumbnail">
          ${produ.name}
          </div>
          
          <div class="col-2 container img-thumbnail">
          ${produ.currency} ${produ.unitCost}
          </div>
          
          <div class="col-2 container">
          <input type="number" min="0" id="cantidadInput" class='form-control container-fluid w-45 img-thumbnail' onchange='multiplicar(${produ.unitCost})' required></input>
              <div class="invalid-feedback">Ingresa un número</div>
          </div> 
          
          <div class="col-2 container img-thumbnail">
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

const multiplicar = (precio) => {
  const subTot = document.getElementById("subTot");
  const cantidad = document.getElementById("cantidadInput").value;
  subTot.innerHTML = cantidad * precio;
  subTotGen.innerHTML = "USD " + subTot.innerHTML;
};

const calcularEnvio = (porcentaje) => {
  costEnv.innerHTML = (porcentaje * subTot.innerHTML) / 100;
};

const total = () => {
  totGen.innerHTML = parseInt(costEnv.innerHTML) + parseInt(subTot.innerHTML);
};
const infSobrePago = document.getElementById("infoSobrePago");

let tipoDePagoElegido;

const cambio = (p) => {
  let variable = 0;
  variable = p;
  if (variable == 0) {
    tipoDePagoElegido = "Tarjeta";
    document.getElementById("pagoDatos").innerHTML = `
  <div class="was-validated">
  <div class="col-sm-6">
    <label>Numero de tarjeta</label>
    <input type="number" class='form-control container-fluid w-45' min="0" required></input>
    <div class="invalid-feedback">Ingresa un número</div>

  </div>
  
  <div class="col-sm-6">
    <label>Código de seg.</label>
    <input type="number" class='form-control container-fluid w-45' min="0" required></input>
    <div class="invalid-feedback">Ingresa un número</div>

  </div>
  
  <div class="col-sm-6">
    <label>Vencimiento(MM/AA)</label>
    <input type="date" class='form-control container-fluid w-45' in-valid></input>
  </div>
  </div>;
  
  `;
  }
  else if (variable == 1) {
    tipoDePagoElegido = "Transferencia";
    document.getElementById("pagoDatos").innerHTML = `
    <div class="was-validated">
    <label>Número de cuenta.</label>
    <input type="number" class='form-control container-fluid w-45' min="0" required></input>
    <div class="invalid-feedback">Ingresa un número</div>
    </div>
   

    `;
  }
  
};


