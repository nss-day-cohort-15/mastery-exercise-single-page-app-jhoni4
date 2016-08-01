var CarLot = (function (newC) {
  var CardClickedNow = [];
  var selectdCard = document.getElementsByClassName("card");



  newC.activateEvents = function() {

//..trying to put all the events listened in one function..if possible
    for (var j = 0; j < selectdCard.length; j++){
      selectdCard[j].addEventListener("click", function (CardClickedNow) {
      event.currentTarget.classList.toggle("convertTheme");
      })


    };
  }
  return newC;
})(CarLot);
