var CarLot = (function (newC) {
  var CardClickedNow = [];
  var inputText = document.getElementById("inputText");
  var selectdCard = document.getElementsByClassName("card");



  newC.activateEvents = function() {
//..trying to put all the events listened in one function..if possible
    for (var j = 0; j < selectdCard.length; j++){
      selectdCard[j].addEventListener("click", function(element) {
        CardClickedNow = document.getElementById(element.currentTarget.id);
        // console.log(element.currentTarget);
        newC.removeStyleOnCards(selectdCard);//removes new theme when jumped to the other card//
// this will focus the cursor at input field when card clicked
        newC.textFocus = function () {
        inputText.focus();
        }
        CarLot.textFocus();

      newC.getCarDescription = function (CardClickedNow) {
        var input = "";
        inputText.value = "";
      }//these functions need to be called before the click event ends
        CarLot.getCarDescription(CardClickedNow);
        CarLot.themeChanger(CardClickedNow);
       });
    } //click event function ends here

      inputText.addEventListener("keyup", function() {
        input = inputText.value;
        //i found no other option other than spiting the id since i can't include index
        var editableText = document.getElementById("Description--"+ CardClickedNow.id.split("--")[1]);
        editableText.innerHTML = input;
      });

    }//activate event  ends here//
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
})(CarLot || {});
