/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (targetKeys.includes(key) === false) {
      var value = source[key];
      target[key] = value;
    }

  }
}
