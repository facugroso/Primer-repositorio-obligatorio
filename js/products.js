
let produArray = [];


let catArray = [];

function cat(array){
    for (let cat  of array){
    let cat= document.getElementById("catName")
    showProduList();
    cat.innerHTML += produ.catName ; 
}} 





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

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODU_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            produArray = resultObj.data;
            showProduList(produArray.products);
            console.log(produ.products)
        }
    });
});

function showCat(array){
    for (let cat  of array){
    let cat= document.getElementById("catName")
    showProduList();
    cat.innerHTML += produ.catName ; 
}} 

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODU_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            catArray = resultObj.data;
            catArray(catArray.products);
            console.log(cat.products)
        }
    });
});

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
