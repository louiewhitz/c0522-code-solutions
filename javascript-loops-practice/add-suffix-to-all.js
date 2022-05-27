/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var output = [];
  var finalWord = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    finalWord = word + suffix;
    output.push(finalWord);
  }
  return output;
}
