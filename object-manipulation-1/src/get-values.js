/* exported getValues */
function getValues(object) {
  var arr1 = [];
  for (var key in object) {
    arr1.push(object[key]);
  }
  return arr1;
}
