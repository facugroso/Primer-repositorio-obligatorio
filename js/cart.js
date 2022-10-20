const multiplicar = (prop) => {
 { 
    console.log("holaa")
    const subTot =  document.getElementById("subTot");
    const cantidad = document.getElementById("cantidadInput").value;
    subTot.innerHTML = (cantidad * prop ) 
}

};

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
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CARRITO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      produArray = resultObj.data;
      showCartList(produArray.articles);
      console.log(produArray.articles);
      
    }
  });
});