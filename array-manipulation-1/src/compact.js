/* exported compact */
function compact(input) {
  var newArr = [];
  var truthy = [false, 0, '', null, undefined, NaN];
  for (var j = 0; j < truthy.length; j++) {
    if (input !== !!false || input !== '' || input[j] !== null || input[j] !== undefined || input[j] !== !!NaN) {
      newArr.push([j]);
    }
  }
  return newArr;
}
