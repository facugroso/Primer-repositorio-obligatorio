let produToShow = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_INFO).then(function (resultObj) {
    
    if (resultObj.status === "ok") {
      produToShow = resultObj.data;
      
      showProdu(produToShow);
      
      
    }
  });
});

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_COMMENTS).then(function (resultObj) {
    if (resultObj.status === "ok") {
      showComents(resultObj)
      
    }
  });
});




function showProdu(produ) {
  const listImg = produ.images.map((item)=>{
    return ` <img class="img-responsive img-thumbnail" src="${item}">`       
      }) 
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
    
    <div class="contenedor-img">`+listImg+`
    </div></div>
    
    
    </div>
    `;
  }  
  

  
  
    function showComents(array){
      
      const listComents = array.data.map((item)=>{
        return `<div class="container thumbnail">
        <strong>`+item.user+`</strong>
        <span >-`+item.dateTime+`-</span>
        <span class="fa fa-star checked">`+item.score+`</span>
        <div >`+item.description+`</div>
        </div>   
        `
        

          }) 
      document.getElementById("containerComents").innerHTML+=
      `<div class="container">
      <h4 class="container">Comentarios</h4>
      `+
      listComents+
      `
      </div>
      
      <div class="container">
      <h4 class="container">Comentar</h4>
      </div>
      
      <div class="container">
      <form action=>
      <p class="container">Tu opinión:</p>
      <input>
      <p class="container">Tu puntuación:</p>
      <input class="container">
      <button id="button">Enviar</button> 
      </form>
      </div>
     `
      
    }
  
    
  
  
    
 
    
    
    
    