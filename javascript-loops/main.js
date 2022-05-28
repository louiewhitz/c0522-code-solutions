/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumbers = 1;
  while (currentNumbers <= 11) {
    numbers.push(currentNumbers);
    currentNumbers++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
getNumbersToTwenty();
console.log(getNumbersToTwenty());

var repeated = '';
var count = 1;

function repeatWord(word, times) {
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('apples', 20));

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('apples');
logEachCharacter('Louisa Whitaker');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push((numbers[i]) * 2);
  }
  return doubled;
}
console.log(doubleAll([2, 5, 7, 8]));
var keys = [];
function getKeys(object) {
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

console.log(getKeys({
  title: 'hello',
  author: 'James R'
},
{
  title: 'goodbye',
  author: 'Dennis m.'
}));

getKeys();

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  } return values;
}
console.log(getValues({
  title: 'goodbye',
  author: 'Dennis m.'
}));
