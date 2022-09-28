let produArray = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_URL).then(function (resultObj) {
    
    if (resultObj.status === "ok") {
      produArray = resultObj.data;
      const produToShow = produArray.products.find(
        (item) => item.id == localStorage.getItem("itemID")
      );
      console.log(produToShow);
      showProdu(produToShow);
    }
  });
});

function showProdu(produ) {
  document.getElementById("container").innerHTML +=
    `<div class="container" >
    <div class="h2">
    `+produ.name+` 
    </div>
    
    <div><strong >Precio</strong> 
    `+produ.currency + produ.cost +`
    </div>
    
    <div><strong >Descripción</strong>
    `+produ.description +`
    </div>

    <div><strong>Categoría
    </strong> 
    `+produ.category +`
    </div>


    <div><strong >Cantidad de vendidos</strong>
    `+produ.soldCount +`
    </div>
    <div> <strong >Imagenes ilustrativas</strong>
    
    <div class="contenedor-img"><img class="img-responsive img-thumbnail" src="`+produ.image+`"/>
    </div></div>
    

    </div>
`;
}
