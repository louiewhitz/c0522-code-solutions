/* exported tail */
function tail(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
