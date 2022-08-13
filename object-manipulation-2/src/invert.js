/* exported invert */
function invert(source) {
  var obj = {};
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    obj[value] = key;
  }
  return obj;
}

// I know we need an empty object
// I know we will need the keys of the source object
// create variables that store both of those separately
// loop through the newly acquired length of keys from the source
// create a variable that finds the key at its index
// find the value of the source by its key and store it in a variable
// with the empty object, assign its value as its property and the value is the key
