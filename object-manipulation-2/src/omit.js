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
