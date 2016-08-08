var CarLot = (function (newC) {
  var CardClickedNow = [];
  var inputText = document.getElementById("inputText");
  var selectCard = document.getElementsByClassName("card");



  newC.activateEvents = function() {
//..trying to put all the events listened in one function..if possible
    for (var j = 0; j < selectCard.length; j++){
      selectCard[j].addEventListener("click", function(element) {
        CardClickedNow = document.getElementById(element.currentTarget.id);
        // console.log(element.currentTarget);
        newC.removeStyleOnCards(selectCard);//removes new theme when jumped to the other card//
// this will focus the cursor at input field when card clicked
        newC.textFocus = function () {
        inputText.focus();
        }
        CarLot.textFocus();//order to apply focus

      newC.getCarDescription = function (CardClickedNow) {
        var input = "";
        inputText.value = "";
      }//these functions need to be called before the click event ends
        CarLot.getCarDescription(CardClickedNow);
        CarLot.themeChanger(CardClickedNow, "red");
       });
    } //click event function ends here

      inputText.addEventListener("keyup", function() {
        input = inputText.value;
        carCardIndex = CardClickedNow.id.split("--")[1];
        //i found no other option than splitting the id since i can't include index
        var editableText = document.getElementById("Description--"+ carCardIndex);
        editableText.innerHTML = input;
      });

    }//activate event  ends here//


  return newC;
})(CarLot || {});


//jason is loaded and ready so lets populate the DOM
var CarLot = (function (finalCar) {
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

  return finalCar;
})(CarLot || {});

