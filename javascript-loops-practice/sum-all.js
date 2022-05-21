/* exported sumAll */
function sumAll(numbers) {
  var sumOne = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumOne += numbers[i];
  }
  return sumOne;
}
