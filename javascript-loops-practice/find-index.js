/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var checkVal = array[i];
    if (checkVal === value) {
      return i;
    }
  }
  return -1;
}
