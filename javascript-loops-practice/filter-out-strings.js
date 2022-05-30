/* exported filterOutStrings */
function filterOutStrings(values) {
  var myArray = [];
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (typeof value !== 'string') {
      myArray.push(values[i]);

    }
  }
  return myArray;
}
