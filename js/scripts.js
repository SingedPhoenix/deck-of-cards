$(document).ready(function() {
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  var suits = ["hearts", "clubs", "diamonds", "spades"]

suits.forEach(function(suit) {
  cards.forEach(function(card) {
    $("ul").append("<li>" + card + " of " + suit + "</li>");
  });
  });
  });

  // cards.forEach(function(card) {
  //   hearts.push(" " + card + " of hearts");
  //   clubs.push(" " + card + " of clubs");
  //   diamonds.push(" " + card + " of diamonds");
  //   spades.push(" " + card + " of spades");
  //
