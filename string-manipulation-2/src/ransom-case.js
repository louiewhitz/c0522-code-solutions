/* exported ransomCase */
function ransomCase(string) {
  var capLetter = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      capLetter += string[i].toUpperCase();
    } else {
      capLetter += string[i].toLowerCase();
    }
  }
  return capLetter;
}

// Look at inputs. Line 33 has every odd letter is a capital
// loop through the array
// use mod for finding evens and odds
// return evens at lowercase and odds at uppercase
