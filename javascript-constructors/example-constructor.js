function ExampleConstructor() {

}
console.log('the value of ExampleConstructor is:', ExampleConstructor.prototype);
console.log('the type of prototype', typeof ExampleConstructor.prototype);
var something = new ExampleConstructor();
ExampleConstructor.prototype.color = 'blue';
console.log('something.color', something.color);

console.log(something);

console.log('instance of:', something instanceof ExampleConstructor);
var somethingInstance = something instanceof ExampleConstructor;
console.log('somethingInstance:', somethingInstance);
