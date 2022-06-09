/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var startIndex = array.length - count;
  return array.slice(startIndex);
}
// Return an array that returns that last part of the array according to the number needed
// this has another edge case, or guard for that matter we have to attend too
// create a storage place for where we start the removal of the beginning of the array and keep the rest
// return that array
