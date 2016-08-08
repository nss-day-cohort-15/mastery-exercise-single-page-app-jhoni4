var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
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
