var CarLot = (function (newC) {

      //this will release the last card when new one clicked
      newC.removeStyleOnCards = function (selectCard) {
        for (var i = 0; i < selectCard.length; i++) {
          selectCard[i].classList.remove("convertTheme");
        }
      }
  //style will toggle when clicked
      newC.themeChanger = function (CardClickedNow, someColor) {
        event.currentTarget.classList.toggle("convertTheme");
      }



  return newC;
})(CarLot)
