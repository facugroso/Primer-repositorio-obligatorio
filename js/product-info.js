let produToShow = [];


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
  
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_INFO).then(function (resultObj) {
    
    if (resultObj.status === "ok") {
      produToShow = resultObj.data;
      
      showProdu(produToShow);
      console.log(resultObj);
      showProduRelation(produToShow);

      }
  });
  getJSONData(PRODUCT_INFO_COMMENTS).then(function (resultObj) {
    if (resultObj.status === "ok") {
      showComents(resultObj);
      
    }
  })
});


function showProduRelation(array){
  const relacion = array.relatedProducts.map((item)=>{
    return`<div class="container thumbnail d-inline w-50" > <div class=" container"> <img src='${item.image}'class="w-25"> </div> <div> ${item.name} </div> </div>
    ` 
  } 
  
  )
  document.getElementById("prodRela").innerHTML += relacion 

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
      <select class="container" > `+puntuacion()+` 
      </select>
      <button id="button">Enviar</button> 
      </form>
      </div>
     `
      
    }
   
  function puntuacion(){
    for (let valoracion = 1; valoracion < 6; valoracion++) {
      return (`<option value=${valoracion}>${valoracion}</option>`);
      
    }
  }
  


  
  
    
 
    
    
    
    