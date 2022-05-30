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

// Oh boy, so in order to find the values at the tail end of the array, we must first loop through the whole array
// actually, we must create a variable before the loop that is an empty array so we can put the new items somewhere
// then, since we know that arrays start at zero, we should return all items that are not at index zero into the new array
