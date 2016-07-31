var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (cb) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(inventoryLoader.responseText)
        cb(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})();


function didLoadData (inventory) {
  var output = document.getElementById("outPutId");
  var inventoryOut = [];

  for (var i = 0; i < inventory.cars.length; i++) {
    car = inventory.cars[i];

    inventoryOut +=
    `<article id="card--${i}" class="col-md-4 carInfo" style="border: 1px solid ${car.color}">
      <h2>${car.year} ${car.make}</h2>
      <h3>${car.model}</h3>
      <ul>
        <li>Price: $${car.price}</li>
        <li>Color: ${car.color}</li>
        <li>Purchased: ${car.purchased}</li>
      </ul>
      <p id="carDescription--${i}" class="carDescription">${car.description}</p>
    </article>`;
  }
  output.innerHTML = inventoryOut;

}
CarLot.loadInventory(didLoadData);
