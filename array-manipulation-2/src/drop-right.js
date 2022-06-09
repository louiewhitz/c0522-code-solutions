/* exported dropRight */

function dropRight(array, count) {
  if (count > array.length) {
    return array;
  }
  var index = array.length - count;
  return array.slice(0, index);
}

// 1. we must create a new array containing the first part of the array according to the number that we should delete
// we have another edge case here, if the amount we want to drop is bigger than the the list itself, just return that list in its very condition
// I must find the length of the array
// then I must make the count start from the end
// then return the beginning of the array after the deletion of the count at the end of the array
