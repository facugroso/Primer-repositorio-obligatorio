
let produArray = [];
let catArray = [];



//<div class="lista,grupo, lista de elementos,grupo,elemento,acción">
function showProduList(array) {
for (let produ of array) {
    document.getElementById("container").innerHTML += `
    
    
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
            <img src="` + produ.image + `" alt="product image" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <div class="mb-1">
                <h4>`+ produ.name +" " + produ.currency + " " + produ.cost +`</h4> 
                <p> `+ produ.description +`</p> 
                </div>
                <small class="text-muted">` + produ.soldCount + ` artículos</small>
            </div>

        </div>
    </div>
</div>
`
    }
}

document.addEventListener("DOMContentLoaded", (e)=>{
    getJSONData(PRODU_URL).then(function(resultObj){//resultObj es el objeto o date quele paso por parámetro que esperamos recibir para que haga su trabajo
        if (resultObj.status === "ok")
        {
            produArray = resultObj.data;
            showProduList(produArray.products);
            //console.log(produ.products); //me muestra mi funcion produ dentro de productos(no devuelve valor como los return)
        }
    });
});
/*Cree un nuevo JSON, donde le digo luego de extraer la data del produ_url. Creouna función que le paso
por parametro "resultObj", utilizando el if le ordeno que si todo esta "ok".
Luego consologuie la data de mi atributo (lo que pasé por parámetro en la función). Después cree una constante, "catName"
que almacena el id (lo obtengo con el DOM) del span (del párrafo) del html.
Luego utilizando innerHTML lo que hago es, tomar el texto del párrafo y agregarrle mi constante con la data correspondiente que contiene catName.
*/
document.addEventListener("DOMContentLoaded", (e)=>{
    getJSONData(PRODU_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            catArray = resultObj.data;
            console.log(resultObj);
            const catName = document.getElementById("catName");
            catName.innerHTML = catArray.catName;
            //console.log(cat.products);//me muestra mi funcion cat dentro de productos(no devuelve valor como los return)
      }
    });
})






/*function opcion(catName){
    
    for (let opcion  of catName)
    console.log(catName)
    {
    document.getElementById("catName").innerHTML += `
   
                <p> `+ produ.catName +`</p> 
      
    `
}


} 

document.addEventListener("DOMContentLoaded", (e)=>{
    getJSONData(PRODU_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            catArray = resultObj.data;
            catArray(catArray.products);
            console.log(cat.products)
        }
    });
});*/

// DATOS PARA SOLUCIONAR EL PROBLEMA
// "catID": 101,
// "catName": "Autos",
//"products": [
//     {
//          "id": 50921,
//          "name": "Chevrolet Onix Joy",
//          "description": "Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.",
//          "cost": 13500,
//          "currency": "USD",
//          "soldCount": 14,
//          "image":
//Show = mostrar  
