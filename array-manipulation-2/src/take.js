/* exported take */
function take(array, count) {
  if (count > array.length) {
    return array;
  } else {
    var newArray = array.slice(0, count);

  }
  return newArray;
}

// 1. I have an array with multiple values (string, boolean number etc)
// 2. I see that I have an adge case where the array is empty, and the number is 7 which is larger than the input
// 3, return an empty array in that case
// 4. the input is equal to the pbject.freeze?
// 5. I think I can create a new array with by separating the array at certain index
// 6. lets try
