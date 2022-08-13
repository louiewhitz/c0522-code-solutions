/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    if (value !== undefined) {
      newObj[key] = value;
    }
  }
  return newObj;
}

// we must take the source (which is the input source)
// we must return the keys that match the object key
// So the listed keys are strings
// then we pisk the object key that matches the listed key and return that int a new object
// look for all keys in source. look for all keys in key
// return the matching keys with object value into new object
