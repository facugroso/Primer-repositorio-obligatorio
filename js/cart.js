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
          
          <div class="col-2 container" >
          <input type="number" min="0" id="cantidadInput" class='container-fluid w-45' onchange='multiplicar(${produ.unitCost})'></input>
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
const costEnv = document.getElementById("costEnvio");
const totGen = document.getElementById("totGen");



const multiplicar = (precio) => 
{ 
  const subTot = document.getElementById("subTot")
  const cantidad = document.getElementById("cantidadInput").value
  subTot.innerHTML = (cantidad*precio);
  subTotGen.innerHTML = "USD "+ subTot.innerHTML
  //costEnv.innerHTML = (porcentaje*precio)
  
};

//const premm = document.getElementBiId("premium");
//const expre = document.getElementBiId("express");
//const stand = document.getElementBiId("standard");

//let prob 

function porcentaje(premium,expre,stand) {
  //let premium = ((precio * 15/ 100 )+ precio)
  //let expre =  ((precio * 7/ 100 )+ precio)
  //let stand = ((precio * 5/ 100 )+ precio)
  
}


//function costEnvio(precio, porcentaje){
  //return Math.abs(precio * porcentaje / 100 + precio)
//}













