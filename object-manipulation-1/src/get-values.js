/* exported getValues */
function getValues(object) {
  var arr1 = [];
  for (var key in object) {
    arr1.push(object[key]);
  }
  return arr1;
}

// in order to get the value of the key in the object
// first, create a storage place where the value of the key of the object will end up (empty array)
// do a for in loop where you find the key in the object
// psuh the object with the key in brackets to showcase what the value is into the new array
// return that array
