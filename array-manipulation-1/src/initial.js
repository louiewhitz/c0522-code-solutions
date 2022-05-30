/* exported initial */

function initial(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 2; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// We need to return a new array that contains everything but the last item
// we also have an edge case, if the input is an empty array we must return an empty array which is what it is
// loop through the array keeping in mind the length of the updated array (which instead of -1 is actually -2)
// put the new items into an array
// return that array
