/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstNoSpace = firstString.split('').sort().join('').replaceAll(' ', '');
  var secondNoSpace = secondString.split('').sort().join('').replaceAll(' ', '');
  if (firstNoSpace === secondNoSpace) {
    return true;
  }
  return false;

}

// must find if any characters in both string match;

//   var firstStr = firstString.length;
//   var secondStr = secondString.length;
//   for (var i = 0; i < firstString.length; i++) {
//     var first = firstStr[i];
//     for (var j = 0; j < secondString.length; i++) {
//       var second = secondStr[j];
//       if (first === secondString[second[j]]) {
//         return false;
//       }

//     }
//   }
// }
