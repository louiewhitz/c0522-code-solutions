/* exported reverse */
function reverse(array) {
  var arr1 = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr1.push(array[i]);
  }
  return arr1;
}

// we have an array that goes from left to right
// we must reverse this array and make it go right to left
// but in the direction of left to right // confusing
// create an empty array
// loop through the array length that begins at the last item in the array
// decrement the loop
// push the values of the array at last index indicated by loop into the array
// tada new array that is in reverse
