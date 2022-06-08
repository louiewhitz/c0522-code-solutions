console.log('Lodash is loaded:', typeof _ !== 'undefined');
var player1 = {
  name: 'joe',
  hand: []
};

var player2 = {
  name: 'jess',
  hand: []
};

var player3 = {
  name: 'jordan',
  hand: []
};

var player4 = {
  name: 'james',
  hand: []
};

var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

var cardDeck = [];
var suit = ['Clubs', 'Diamond', 'Heart', 'Spade'];
for (var suitCount = 0; suitCount < 4; suitCount++) {
  for (var rankCount = 0; rankCount < 13; rankCount++) {
    cardDeck.push({ ranks: ranks[rankCount], suit: suit[suitCount] });

  }
}
cardDeck = _.shuffle(cardDeck);
for (var i = 0; i < 8; i++) {
  var card = cardDeck[i];
  if (i === 0 || i === 1) {
    player1.hand.push(card);
  }
  if (i === 2 || i === 3) {
    player2.hand.push(card);
  }
  if (i === 4 || i === 5) {
    player3.hand.push(card);
  }
  if (i === 6 || i === 7) {
    player4.hand.push(card);
  }
}

// eslint-disable-next-line quote-props
var points = { 'Ace': 11, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'Jack': 10, 'Queen': 10, 'King': 10 };
function calculateP(player) {
  var total = 0;
  var hand = player.hand;
  for (var i = 0; i < hand.length; i++) {
    var oneCard = hand[i];
    total += points[oneCard.ranks];
  }
  return total;
}

var pointsPlayer1 = calculateP(player1);

var pointsPlayer2 = calculateP(player2);

var pointsPlayer3 = calculateP(player3);

var pointsPlayer4 = calculateP(player4);

var winningPlayer = Math.max(pointsPlayer1, pointsPlayer2, pointsPlayer3, pointsPlayer4);
if (pointsPlayer1 === winningPlayer) {
  console.log(player1);
}

if (pointsPlayer2 === winningPlayer) {
  console.log(player2);
}

if (pointsPlayer3 === winningPlayer) {
  console.log(player3);
}

if (pointsPlayer4 === winningPlayer) {
  console.log(player4);
}

// A deck of cards has 52 cards
// the card deck is divided by 4 which gives you 12 different ranks
// the suits are placed on each individual number rank equally, which means each rank has four different suits
// first, create 4 players, and give them a name and a hand (future hand)
// then put all the ranks into an array
// then put all the suits into an array
// scratch that, puts rank and suit as property of the card, then later the value should be the point value
// in total, the amount of cards that will be dealt is 8. store the index of a singlar card in cardDeck with variable card
// now to make sure no player gets the same card, create an if statement, that checks if the first player gets dealt a card that is in index 0 or 1; if so, push those cards into that players hand. Do this for the remaining players
// now to get the winning player, get the maximum number of points of each player by using the max method and and assign the result of that expression to the winning player
// Now, to make sure we know who the winner is, call each player in your calcualtion function and check with an if statement to see what player earned the most points
// log that to the console.
