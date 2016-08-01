var CarLot = (function (newC) {
  var CardClickedNow = [];
  var selectdCard = document.getElementsByClassName("card");
  var inputText = document.getElementById("inputText");



  newC.activateEvents = function() {

//..trying to put all the events listened in one function..if possible
    for (var j = 0; j < selectdCard.length; j++){
      selectdCard[j].addEventListener("click", function(element) {
        CardClickedNow = document.getElementById(element.currentTarget.id);
        var paragraph = element.currentTarget.getElementsByClassName("carDescription")[j];

         newC.textFocus = function () {
          inputText.focus();
        }
        CarLot.textFocus();


        CarLot.getCarDescription(CardClickedNow);
        CarLot.themeChanger(CardClickedNow);
      });
    }


    newC.getCarDescription = function (CardClickedNow) {
          var input = "";
          inputText.value = "";
      inputText.addEventListener("keyup", function() {
        var inputText = document.getElementById("inputText").innerHTML;
        // var editableText = document.getElementById("Description--").innerHTML;
        var val = val.replace("editableText", "inputText");
        document.getElementById("Description--").innerHTML = val;
        // input = inputText.value;
;
        // editableText.innerHTML = input;
      });
    }

      }
       newC.themeChanger = function (CardClickedNow) {
        event.currentTarget.classList.toggle("convertTheme");
       }

  return newC;
})(CarLot);
