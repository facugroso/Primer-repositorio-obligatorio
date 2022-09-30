let produToShow = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_INFO).then(function (resultObj) {
    
    if (resultObj.status === "ok") {
      produToShow = resultObj.data;
      
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
    hr
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

  function mosImg(array) {
    let opcion = "";
    for (let produ of array) {
      document.getElementById("itemID").innerHTML +=
        `
     
                  <p> ` +
        produ.image +
        `</p> 
                  </div>
      `;
    }
    lista.innerHTML = opcion;
    console.log(array);
  }
  