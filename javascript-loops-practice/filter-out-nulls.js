/* exported filterOutNulls */
function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    if (values !== null) {
      output.push(values);
    }
  }
}
