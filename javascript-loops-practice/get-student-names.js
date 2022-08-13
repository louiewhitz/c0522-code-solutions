/* exported getStudentNames */
function getStudentNames(students) {
  var myArray = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    myArray.push(student.name);
  }
  return myArray;
}
