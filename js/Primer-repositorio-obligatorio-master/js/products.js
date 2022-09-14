let produArray = [];

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
    getJSONData(PRODUAUT_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            produArray = resultObj.data;
            showProduList(produArray.products);
            console.log(produ.products)
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
