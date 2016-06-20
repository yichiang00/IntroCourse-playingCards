$(document).ready(function(){
  var suits = ["clubs","hearts","spades","diamonds"];
  var decks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","king"];
  suits.forEach(function(suit){
    decks.forEach(function(item){
      $("#deckDisplay").append("<li>"+" "+item+"  of   "+suit+"</li>");
      console.log(item);
      console.log(suit);

    });


  });

});
