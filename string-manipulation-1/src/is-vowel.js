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

// trajectory - we are trying to find all the vowels in the word or sentence
// Don't really know how else to do this but create a list that acconts for both upper and lowercase words
// create a loop that iterates through all those vowels
// create -- a very large if statement that checks if the character at the index is equal to one of those vowels
// if so, return it as true
// if not, do the opposite
