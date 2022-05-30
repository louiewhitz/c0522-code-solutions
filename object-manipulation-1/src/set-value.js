/* exported setValue */
function setValue(object, key, value) {
  object[key] = value;
}

// cool thing, you can update or set values to objects by have them be assigned to a value at the object key
// so to set the value of this object, we will assign a value (whatever the argument for value may be) to the key property of the object
