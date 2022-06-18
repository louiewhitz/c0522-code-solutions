/* exported capitalizeWord */
function capitalizeWord(word) {
  var result = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (result.toLocaleLowerCase() === 'javascript') {
    result = result.substring(0, result.indexOf('s')) + result.charAt(4).toUpperCase() + result.slice(5).toLowerCase();
  }
  return result;
}

// I need to capitlize the first letter of the string
// I need to be able to capitalize any letter or lowercase any letter in a string
// to do this, I must single out the first letter, or whatever letter I need
// then I must make sure the rest of the word is lower case
// then I must put the word back together
// - did not work for JavaScript
// create a separate if statement for JavaScript
// what does chartAt mean
// I can single out the index I want to change with chartAt
// i can find the index of a letter with index of
// Since Javascript is an edge case, I can make a separate if statement
