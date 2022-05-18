
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log(convertMinutesToSeconds(5));
function greet(name) {
  var greeting = 'Hey, ' + name + '.';
  console.log(greeting);
}

greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  return area;

}

console.log('the area is:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log(getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamerouge'
}));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element in the array is ', lastElementResult);
