/* exported capitalize */
function capitalize(word) {
  var firstLetter = word[0];
  firstLetter = firstLetter.toUpperCase();
  var sub = word.substring(1, word.length);
  sub = sub.toLowerCase();
  var completedWord = firstLetter + sub;
  return completedWord;
}
