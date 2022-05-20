/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  // eslint-disable-next-line dot-notation
  var getDescription = person['name'] + ' is a ' + person['occupation'] + ' from ' + person['birthPlace'] + '.';
  return getDescription;
}
