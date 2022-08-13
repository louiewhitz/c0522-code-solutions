// /* exported chunk */

// count the length of number (size) return that number into new subarray, and if that size can be counted more than once (aka [1], [2]) then return the amount, and finish with pushing any remainders into the new subarray
// eslint-disable-next-line no-unused-vars
function chunk(array, size) {
  var myArray = [];
  var ch = [];
  for (let i = 0; i < array.length; i++) {
    var input = array[i]; // input = 4
    var something = i + 1; // something = 4
    ch.push(input); // ch = [4]
    if (something % size === 0) {
      myArray.push(ch); // [[1,2,3]]
      ch = [];
    }
  }
  if (ch.length > 0) {
    myArray.push(ch);
  }
  return myArray;
}

// msybe count number equals size, so when you count to whatever length size is, you break?

// size is equal to number of elements in array diveded into a subarray by length , with the remainder following

//   var results = [];
//   var chunks = array.length / size;
//   while (array.length) {
//     results.push(chunks);
//   }
// }
// do whatever
// we need an array of arrays
// create a nested array with values in main array
// each sub array has a length equal to size

// in example false, true, false true -> 3 values are in one array, which signifies the length, in the other one
// 1 2 3 4 5 the width is one which is the same as size

//  it('returns [undefined, null, 0, false, NaN, "", undefined] in "chunks" of 3', function () {
