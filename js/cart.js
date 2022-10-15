

function showProduCart(array){
//   array.forEach((produ) => {
//          document.getElementById("container").innerHTML += `
//          <a href="cart.html" style="text-decoration:none;">
//           `
//  })

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

            htmlContentToAppend += `
            <div onclick="setCatID(${produ.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${produ.imgSrc}" alt="${produ.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${produ.name}</h4>
                            <small class="text-muted">${produ.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${produ.description}</p>
                    </div>
                </div>
            </div>
            `
        }

        document.getElementById("container").innerHTML = htmlContentToAppend;
    }

    document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(CARRITO_URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
            produArray = resultObj.data;
      
            showProduCart(produArray.products);
          }
        });
      });