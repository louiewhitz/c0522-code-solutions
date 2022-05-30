/* exported omit */

function omit(source, keys) {
  var newObj = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (keys.includes(key) === false) {
      var value = source[key];
      if (value !== undefined) {
        newObj[key] = value;
      }

    }
  }
  return newObj;

}
// agenda: this time we must omit the keys
// 1, create an empty object
// store the value of source keys in a variable
// loop through the source
