/* exported pick */
function pick(source, keys) {
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    if (value !== undefined) {
      newObj[key] = value;
    }
  }
  return newObj;

  // var sourceKeys = Object.getOwnPropertyNames(source);
  // console.log('keys in object without value', sourceKeys);
  // var string = [keys];
  // console.log('keys in array as string', string);
  // for (var i = 0; i < keys.length; i++) {
  //   input = source[i];

  //   if (keys[i] === input) {
  //     newObj.push(object)

  //   }

  //   console.log(newObj);
// }
}
//   const newObject = {}
//   keys = Object.keys(paramObject)
//   console.log('keys: ', keys)
//   for ( let i = 0; i < keys.length; i++ ) {
//     console.log(keys[i])
//     debugger;
//     if (array.includes(keys[i])) {
//       const kv = paramObject.keys[i]
//       console.log('push corresponding corresponding key-value pair', kv)
//       newObject.push(kv)
//       console.log('pushed!')
//     }
//   }
//   console.log('success')
//   return newObject
// }

//   var newObj = {};
//   var sourceKeys = Object.getOwnPropertyNames(source);
//   console.log(sourceKeys);
// }

//   var newObject = {};
//   var array = Object.keys(keys);
//   for (var i = 0; i < keys.length; i++) {
//     if (source.inludes(keys[i])) {
//       newObject.push([keys[i]]);
//     }

//   }
//   return newObject;

// }

//   }
//   var key = Object.keys(keys);
//   for (let i = 0; i < keys.length; i++) {
//     if (source.includes(keys[i])) {
//       newObject.push(key[i]);
//     }
//   }
//   return newObject;
// }

// we must take the source (which is the input source)
// we must return the keys that match the object key
// So the listed keys are strings
// then we pisk the object key that matches the listed key and return that int a new object
// look for all keys in source. look for all keys in key
// return the matching keys with object value into new object
