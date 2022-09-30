let produArray = [];
let catArray = [];
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";


const clickeada = (p) => {
  localStorage.setItem("itemID", `${p}`);
};

//<div class="lista,grupo, lista de elementos,grupo,elemento,acción">
function showProduList(array) {
  
  array.forEach((produ) => {
    document.getElementById("container").innerHTML +=
      `<a href="product-info.html" style="text-decoration:none;">
    <div class="list-group-item list-group-item-action" onclick='clickeada(` +
      produ.id +
      `)'>
    <div class="row">
        <div class="col-3">
            <img src="` +
      produ.image +
      `" alt="product image" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <div class="mb-1">
                <h4>` +
      produ.name +
      " " +
      produ.currency +
      " " +
      produ.cost +
      `</h4> 
                <p> ` +
      produ.description +
      `</p> 
                </div>
                <small class="text-muted">` +
      produ.soldCount +
      ` artículos</small>
            </div>

        </div>
    </div>
</div>
</a>`;
  });
}
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      produArray = resultObj.data;

      showProduList(produArray.products);
    }
    if (resultObj.status === "ok") {
      catArray = resultObj.data;
      const catName = document.getElementById("catName");
      catName.innerHTML = catArray.catName;
    }
  });
});
function cat(array) {
  let opcion = "";
  for (let cat of array) {
    document.getElementById("catName").innerHTML +=
      `
   
                <p> ` +
      produ.catName +
      `</p> 
               
    `;
  }
  lista.innerHTML = opcion;
  console.log(array);
}
