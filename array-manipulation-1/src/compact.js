/* exported compact */
function compact(input) {
  // debugger;
  var newArr = [];
  for (var j = 0; j < input.length; j++) {
    if (input[j] === false) {
      continue;
    }

    if (input[j] === null) {
      continue;
    }

    if (input[j] === '') {
      continue;
    }

    if (input[j] === !!-0 || input[j] === 0) {
      continue;
    }

    if (input[j] === undefined) {
      continue;
    }

    if (isNaN(input[j]) && typeof input[j] !== 'string' && typeof input[j] !== 'object') { // will skip {} and 'fsad'
      continue;
    }

    newArr.push(input[j]);

    // if (input[j] !== false && input[j] !== '' && input[j] !== null && input[j] !== undefined && !isNaN(input[j]) && input[j] !== !!-0 && input[j] !== 0) {
    // }
  }
  return newArr;
}
