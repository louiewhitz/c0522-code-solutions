/* exported reverse */
function reverse(array) {
  var arr1 = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr1.push(array[i]);
  }
  return arr1;
}
