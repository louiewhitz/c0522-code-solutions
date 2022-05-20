/* exported countdown */
function countdown(number) {
  var myArray = [];
  for (var i = number; i >= 1; i--) {
    myArray.push(i);
  }
  return myArray;
}
