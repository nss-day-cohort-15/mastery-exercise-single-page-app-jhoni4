var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText);
        callback(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})();
//jason is loaded and ready so lets populate the DOM
var CarLot = (function () {
function populatePage (inventory) {
  var output = document.getElementById("finalOut");
  var inventoryString = "";
// Looping though all array of cars
  for (var i = 0; i < inventory.cars.length; i++) {
    cars = inventory.cars[i];
    inventoryString +=
    `<div id="card--${i}" class="col-md-4 card" style="border: 1px solid ${cars.color}">
      <h2>${cars.year} ${cars.make}</h2>
      <h3>${cars.model}</h3>
      <ul>
        <li>Price: $${cars.price}</li>
        <li>Color: ${cars.color}</li>
        <li>Purchased: ${cars.purchased}</li>
      </ul>
      <p id="Description--${i}" class="Description">Description:${cars.description}</p>
    </div>`;
  }
  output.innerHTML = inventoryString;

  CarLot.activateEvents();

}

CarLot.loadInventory(populatePage);

})(CarLot || {});
