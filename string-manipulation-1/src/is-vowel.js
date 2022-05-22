/* exported isVowel */
function isVowel(character) {
  var vowels = ['a', 'A', 'e', 'E', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (var j = 0; j < vowels.length; j++) {
    if (character[j] === 'A' || character[j] === 'a' || character[j] === 'e' || character[j] === 'E' || character[j] === 'I' || character[j] === 'i' || character[j] === 'O' || character[j] === 'o' || character[j] === 'U' || character[j] === 'u') {
      return true;
    }
  }
  return false;
}
