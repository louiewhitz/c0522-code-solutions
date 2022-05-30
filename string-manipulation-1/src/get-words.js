/* exported getWords */
function getWords(string) {
  var input = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return input;
  }
}

// create a function called getWords with one parameter string
// use the split method on string with one argument of space in quotation;
// use an if statement that checks whether string is strictly equal to whitespace in quotation marks;
// if true, return the empty array;
// if false, return the input
