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
