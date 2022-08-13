/* exported oddOrEven */
function oddOrEven(numbers) {
  var myArray = [];
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number % 2 === 0) {
      myArray.push('even');
    } else {
      myArray.push('odd');
    }
  }
  return myArray;
}
