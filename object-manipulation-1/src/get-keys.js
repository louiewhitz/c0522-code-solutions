/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var key in object) {
    arr.push(key);
  }
  return arr;
}

// to get the keys of an object, we can use a for in loop where it returns the key of the object
// return those properties into a new array
// create the empty array before the loop
// then return the new array
