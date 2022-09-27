let produArray = [];

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODU_URL).then(function (resultObj) {
    
    if (resultObj.status === "ok") {
      produArray = resultObj.data;
      const produToShow = produArray.products.find(
        (item) => item.id == localStorage.getItem("itemID")
      );
      showProdu(produToShow);
      console.log(produToShow);
    }
  });
});

function showProdu(produ) {
  document.getElementById("container").innerHTML +=
    `
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
`;
}
