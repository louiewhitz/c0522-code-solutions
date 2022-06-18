/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var startIndex = string.length - length;
  return string.slice(startIndex);
}

// complicated. I don't start at the end of the word, I have to start at where the input number tells me to start
// make a variable with start index
//  startr the slice of the string at indicated start index
// learning fuze dont work
// create a guard that returns the string if the start index is longer than the string itself
