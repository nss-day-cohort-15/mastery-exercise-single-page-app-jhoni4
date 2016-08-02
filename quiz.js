var CarLot = (function (newC) {
  var CardClickedNow = [];
  var selectdCard = document.getElementsByClassName("card");
  var inputText = document.getElementById("inputText");



  newC.activateEvents = function() {

//..trying to put all the events listened in one function..if possible
    for (var j = 0; j < selectdCard.length; j++){
      selectdCard[j].addEventListener("click", function(element) {
        CardClickedNow = document.getElementById(element.currentTarget.id);

        var paragraph = element.currentTarget.getElementsByClassName("Description")[j];
// this will focus the cursor at input field when card clicked
         newC.textFocus = function () {
          inputText.focus();
        }
        CarLot.textFocus();

//   call to remove style fun
        newC.removeStyleOnCards(selectdCard);
//   cal set the text editable fun
        CarLot.getCarDescription(CardClickedNow);
 //  call to change style fun
        CarLot.themeChanger(CardClickedNow);
      });
    }

// i couldn't make the description edited separately
    newC.getCarDescription = function (CardClickedNow) {
          var input = "";
          inputText.value = "";
      inputText.addEventListener("keyup", function() {
        input = inputText.value;
       for (var j = 0; j < selectdCard.length; j++) {
        var editableText = document.getElementById("Description--"+ CardClickedNow.id.split("--")[1]);
           editableText.innerHTML = input;
        }

      });
    }

  }
      //this will release the last card when new one clicked
      newC.removeStyleOnCards = function (selectdCard) {
      for (var i = 0; i < selectdCard.length; i++) {
        selectdCard[i].classList.remove("convertTheme");
      }
     }
  //style will toggle when clicked
       newC.themeChanger = function (CardClickedNow) {
        event.currentTarget.classList.toggle("convertTheme");
       }

  return newC;
})(CarLot);
