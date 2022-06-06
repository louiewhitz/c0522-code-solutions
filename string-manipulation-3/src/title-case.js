/* exported titleCase */
function titleCase(string) {

  var allWords = string.toLowerCase().split(' ');

  var notCap = ['a', 'an', 'and', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'so', 'the', 'to', 'up', 'and', 'yet', 'as', 'per'];

  var colon = false;

  for (var i = 0; i < allWords.length; i++) {
    if (allWords[i] === 'javascript') {
      allWords[i] = 'JavaScript';
    }
    if (allWords[i] === 'javascript:') {
      allWords[i] = 'JavaScript:';
    }
    if (allWords[i] === 'api') {
      allWords[i] = 'API';
    }
    if (notCap.indexOf(allWords[i]) === -1 || i === 0 || colon) {
      allWords[i] = allWords[i].charAt(0).toUpperCase() + allWords[i].slice(1);
      colon = false;
    }

    if (allWords[i].indexOf(':') !== -1) {
      colon = true;
    }
    if (allWords[i].indexOf('-') !== -1) {
      var IndexHyph = allWords[i].indexOf('-');
      allWords[i] = allWords[i].split('-')[0] + '-' + allWords[i][IndexHyph + 1].toUpperCase() + allWords[i].slice(IndexHyph + 2).toLowerCase();
    }
  }
  return allWords.join(' ');
}
