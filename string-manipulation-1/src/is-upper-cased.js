/* exported isUpperCased */
function isUpperCased(word) {
  var upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}

// Here we are trying to see if the entire word is uppercase
// create a variable that stores the parameter and set it to uppercase
// create an if statement that asks the question whether the word is in fact uppercase
// if it is, return true
// if it isnt, return false
