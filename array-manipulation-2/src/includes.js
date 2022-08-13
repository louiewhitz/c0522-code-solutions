/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

// var bools = {
//   key: true,
//   key2: false
// };

//     if (input !== true) {
//       return false;
//     } else if (input === false)
//      return true;

// }

//   if (val !== input) {
//     return false;
//   } else if (val === input) {
//     return true;
//   }
// }

// 1. check to see if a certain value is in the list
// if it isnt, tell the world it isnt - false,
// if it is, tell the world its true
// i believe there is another edge case here with the boolean true fall
// and same with the empy array, it must equal false
// if the array is empty, it must not contain any data, however, if we want to see check if it includes any of the data we must search it, same with the other values
// if we don't find any of the values, it isnt there
// if we do then it is true
