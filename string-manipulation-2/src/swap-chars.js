/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = string.split('');
  var input1 = array[firstIndex];
  var input2 = array[secondIndex];
  array[firstIndex] = input2;
  array[secondIndex] = input1;
  return array.join('');
}
// 1. objective swap the characters that correspond to whatever index they are at in a sentence or word
// 2. I realize I cannot change a string on its own
// 3 new objective, single out each charcter and put it onto something that i can move things around with
// 4 I can put each individial charcetr into an array
// I need to store the two different indexes into something so in the future that storage spot can be manipulated
// so for the spot on the array for each charcter, make two variables that store the array first letter and array second letter
// make those two inputs equal the first and second index variables
// return the list back into a sentence
