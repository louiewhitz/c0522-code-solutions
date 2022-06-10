/* exported reverseWords */
function reverseWords(string) {
  var word = string.split(' ');
  var array = [];
  var final = [];

  for (var i = 0; i < word.length; i++) {
    array.push(word[i].split(''));
    array[i].reverse();
    final.push(array[i].join(''));
  }
  return final.join(' ');

}

// for (var i = 0; i < string.length; i++) {
//   var word = string[i];
//   reversedWord.map(word.split(' ').reverse().join(''));
// for (var i = 0; i < string.length; i++) {
//   var newWord = string[i];

//   var reversedWord = newWord.split('').reverse();

// }
