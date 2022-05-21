/* exported filterOutStrings */
function filterOutStrings(values) {
  var strings = '';
  var myArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== strings) {
      myArray.push(values);
    }
  }
  return myArray;
}
