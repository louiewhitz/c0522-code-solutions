/* exported titleCase */
function titleCase(string) {

  var allWords = string.toLowerCase().split(' ');
  for (var i = 0; i < allWords.length; i++) {
    allWords[i] = allWords[i][0].toUpperCase() + allWords[i].slice(1);
    // var upperC = allWords[i];
    if (!['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'so', 'the', 'to', 'up', 'and', 'yet'].includes(allWords[i])) {
      // console.log(allWords[i]);
      // var lowerC = allWords[i].toLowerCase();
      // console.log(lowerC);

    }

  }
  return allWords[i].toLowerCase();

  // console.log(allWords[i]);

}

//   return string.replace(/[a-z]/i, function (letter) {
//     return letter.toUpperCase();
//   }).trim();
//   console.log(letter);
// }

// var allWords = string.toLowerCase().split(' ');
// for (var i = 0; i < allWords.length; i++) {
//   allWords[i] = allWords[i][0].toUpperCase() + allWords[i].slice(1);
//   console.log(allWords[i]);

// }

// }
// var myArr = [];
// for (var i = 0; i < string.length; i++) {
//   var letters = string[i];
//   for (var j = 0; j < allWords.length; j++) {
//     if (letters[i] === allWords[i]) {
//       // var newWord = letters.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//       // console.log(newWord);
//     }

//   }
//   // return newWord
// }

// console.log(newWord);

// allWords.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//     console.log(letters);
// return newWord.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// return newWord;

// console.log(allWords);
// console.log(myArr);

// var newWord = allWords
// console.log(newWord);
// return allWords;

// var array = [];
// // array.push(allWords);
// // return array;

// for (var i = 0; i < allWords.length; i++) {
//   var newWord = allWords[i].charAt(0).toUpperCase() + allWords.slice(1).toLowerCase();
//   array.push(newWord);
//   console.log(array);

// }

// for (var i = 0; i < string.length; i++) {
//   if (word.length > 3) {
//     word.toLowerCase();
//   }
// }
