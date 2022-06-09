/* exported drop */
function drop(array, count) {
  if (count > array.length) {
    return array;
  }
  return array.slice(count);
}

// 1. return the last items accoring to the number we are counting
// 2. create a new array with only the last parts after youve counted how many you need to remove from the initial array
