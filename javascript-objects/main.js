var student = {
  firstName: 'Louisa',
  lastName: 'Whitaker',
  age: 30
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
console.log(student);
student.previousOccupation = 'manager';
console.log(student);
console.log('lives in Irvine Value:', student.livesInIrvine);
console.log('Previous Occupation value:', student.previousOccupation);

var vehicle = {
  make: 'Porsche',
  model: 'Cayenne',
  year: 2006
};
vehicle['color'] = 'turquiose';
console.log('Vehicle color value:', vehicle['color']);
vehicle['isConvertable'] = false;
console.log('Vehicle isConvertable', vehicle['isConvertable']);
console.log(vehicle);

var pet = {
  name: 'Huckleberry',
  type: 'horse'
};

console.log(pet.name);
delete pet.name;
console.log(pet.name);
delete pet.type;
console.log(pet);
