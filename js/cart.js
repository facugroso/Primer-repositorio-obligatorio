const produToShow = [];

function showProduCart(array){
  
    const aux = `
          <div class="list-group-item list-group-item-action cursor-active">
              <div class="row">
                  <div class="col-5">
                      <img src="${array.image}" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">${array.name}</h4>
                          <small class="text-muted">${array.count} artículos</small>
                      </div>
                  </div>
              </div>
          </div>
          `
          return aux;
  } 






function je (array){
    document.getElementById("container").innerHTML += `
    <div>
    </div>
    <div>
    ${showProduCart(array)}
    </div>
    `}
    
document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(CARRITO_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                console.log(resultObj)
                produToShow.push(resultObj.data.articles)
                console.log(produToShow)
                console.log(showProduCart(produToShow[0]))
                je(produToShow.articles)
          
        }
    });
});
  