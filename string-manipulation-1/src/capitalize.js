/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0];
  firstLetter = firstLetter.toUpperCase();
  var sub = word.substring(1, word.length);
  sub = sub.toLowerCase();
  var completedWord = firstLetter + sub;
  return completedWord;
}

// 1. find the first letter in a string
// Single out that word, and use the uppercase method to make it capitalized, assign the result to a new variable
// 3. in order to attach the rest of the word back onto the newly capitalized word, use the substring method
// assign the result of substring at index one plus with the remaining wordlength to a variable sub;
// make sure the rest of the word is lower case by calling the to lowercase method on the sub;
// create a new variable of completedWord and assign it to the result of firstLetter concatenated with sub
// return completed word
