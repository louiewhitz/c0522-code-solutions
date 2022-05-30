/* exported toObject */
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var obj = {};
  obj[key] = value;
  return obj;
}

// in this case, the input is an array with two items
// to turn this into the first item being the key and the second item being the value
// we have to create two separate variable that embody this at their differentiating index numbers
// then, we must create an empty object to store the objects new keyvaluepair
// thus, we set the key and the value for the new object utilization our two variables
// then we return the object
