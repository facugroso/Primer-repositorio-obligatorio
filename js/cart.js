function showCartList(array) {
    array.forEach((produ) => {
      document.getElementById("container").innerHTML +=
        `
        <div class="row">
        
        <div class="col-1 container" >
        <img src= "${produ.image}" class="image-thumbnail"/>
        </div>
       

        <div class="col-1">
         ${produ.name}
        </div>

        <div class="col-1">
        ${produ.currency} ${produ.unitCost}
        
        </div>


        <div class="col-1">
        ${produ.count}
        
        </div> 


        <div class="col-1">
        
        </div>
        ${produ.count}*${produ.unitCost}

        </div> 
        `;
    });
  }
  document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CARRITO_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
        produArray = resultObj.data;
        showCartList(produArray.articles);
        console.log(produArray.articles)
      }
    });
  });