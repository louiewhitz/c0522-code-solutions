/* exported filterOutNulls */
function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (value !== null) {
      output.push(value);
    }
  }
  return output;
}
