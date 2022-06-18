/* exported capitalizeWords */
function capitalizeWords(string) {
  var resultArray = [];
  var array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    var currentWord = array[i];
    var completedWord = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
    resultArray.push(completedWord);
  }
  return resultArray.join(' ');
}

// need every fist index of every word to be capitlized
// rest or string to be lowercased
// I should single out the characters again
// the split method gives me an array of vcharacters
// I need another array to put the values of the split array into
// then turn the new array into a string again
