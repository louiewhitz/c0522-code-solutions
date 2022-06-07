console.log('Lodash is loaded:', typeof _ !== 'undefined');
// var player1 = {
//   name: 'joe',
//   hand: []
// };

// var player2 = {
//   name: 'joe',
//   hand: []
// };

// var player3 = {
//   name: 'joe',
//   hand: []
// };

// var player4 = {
//   name: 'joe',
//   hand: []
// };

var ranks = ['Ace of ', '2 of ', '3 of ', '4 of ', '5 ', '6 ', '7 ', '8 ', '9 ', '10 ', 'Jack ', 'Queen ', 'King '];

// function findRankIndex(array) {
//   for (var rankCount = 0; rankCount < 13; rankCount++) {
//     var ranksIndex = ranks[i];
//   }

//   return ranksIndex;
// }

// findRankIndex(ranks);

// var randomCard = ranks[Math.floor(Math.random() * ranks.length)];
var cardDeck = [];
var suit = ['Clubs', 'Diamond', 'Heart', 'Spade'];
for (var suitCount = 0; suitCount < 4; suitCount++) {
  for (var rankCount = 0; rankCount < 13; rankCount++) {
    cardDeck.push(ranks[rankCount] + suit[suitCount]);
    console.log(cardDeck);
  }
}

// function indexSuit(suitArray) {
//   for (var i = 0; i < suit.length; i++) {
//     var suitIndex = suit[i];
//   }
//   return suitIndex;
// }

// var randomSuit = suit[Math.floor(Math.random() * suit.length)];

// A deck of cards has 52 cards
// the card deck is divided by 4 which gives you 12 different ranks
// the suits are placed on each individual number rank equally, which means each rank has four different suits
// first, create 4 players, and give them a name and a hand (future hand)
// then put all the ranks into an array
// then put all the suits into an array
