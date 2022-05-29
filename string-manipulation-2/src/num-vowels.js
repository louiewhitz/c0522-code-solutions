/* exported numVowels */
function numVowels(string) {
  var count = 0;
  var vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  for (var i = 0; i < string.length; i++) {
    var letter = string[i].toLowerCase();
    if (vowels[letter] === true) {
      count++;
    }
  }
  return count;
}
// create an array with vowels
// scratch that, create an object with the keys as vowels and values as true
// vowels at letter is somehow undefined?
// vowels at letters is undefined which is actually a boolean false
// make vowels at letter equal to true, then count every time a vowel is one of the lettwers
// return the number of vowels
