/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var key = sourceKeys[i];
    if (targetKeys.includes(key) === false) {
      var value = source[key];
      target[key] = value;
    }

  }
}

// we have two objects here. One is missing properties, one has the properties.
// find the keys of both, omit the keys from source that target already has, and adds the keys that target needs
// step 1. store the target keys in a variable
// step 2. store the spurce keys in a variable
// step 3. go through all the keys in the source, and store each specific in a variable;
// step 4. check to see if the target's keys includes one of the keys from the source, if it doesnt ->
// step 5. create another storage place for the value of the key in source
// step 6. update the target with whatever key by assining the value from the source
