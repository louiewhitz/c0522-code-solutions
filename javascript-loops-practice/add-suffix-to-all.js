/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  var myArray = [];
  var count = '';
  while (count < word.length) {
    count += suffix;
    myArray.push(count += suffix);
    count++;
  }
  return count;
}
