/* exported omit */

function omit(source, keys) {
  var newObj = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (keys.includes(key) === false) {
      var value = source[key];
      if (value !== undefined) {
        newObj[key] = value;
      }

    }
  }
  return newObj;

}
// agenda: this time we must omit the keys
// 1, create an empty object
// store the value of source keys in a variable
// loop through the source keys now that you have it in a veriable
// create a variable for a singular key from the sourcekeys list
// if the keys list does not include that specific key
// create a new variable that is called value, and set it equal to the source at key;
// if that value does not equal undefined
// push into the new object we created earlier with the index at key being assigned to the variable value
