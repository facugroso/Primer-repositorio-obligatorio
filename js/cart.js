function showCartList(array) {
  array.forEach((produ) => {
    
    function resuFina(){
      
      if (document.getElementById("multiplicar")){let resuFina= document.getElementById("multiplicar").value;
      document.getElementById("subTot").innerHTML += resuFina*produ.unitCost}
    } 
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
          <input type="number" id="multiplicar" onchange="${resuFina()}"></input>
          
          </div> 
          
          <div class="col-2 container" id="subTot">
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
