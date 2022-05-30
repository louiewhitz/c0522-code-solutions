/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

// so I believe we will have to create a new word that is in reverse from the one that we get
// 1. create a space where this word can live
// 2. loop throough the word's length (this doesnt work)
// loop through the actual word starting at how long the word is, the word will be less than or eqyual to zero, and work your way backwards by decrementing the loop
// the reverse variable will now takke the word in reverse
// return that reverse word THAT WAS HARD SHEESH
