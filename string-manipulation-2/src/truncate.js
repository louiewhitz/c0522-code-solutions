/* exported truncate */
function truncate(length, string) {
  var num = length;
  if (num > string.length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }

}

// If the length of the string is less than or equal to the given number
// return the string without truncating it. Otherwise, truncate the string. Meaning keep the beginning of the string up until the //?// given number and discard the rest. Add “…” to the end of the truncated string and return it.
// the first argument is a number
// the second value is a string
//  i must make sure that my word is as long as the number
// if it is less than or equal to it, I should keep the word
// if it isn't, then i should add three dots to the string
