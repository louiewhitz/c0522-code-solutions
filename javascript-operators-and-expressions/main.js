var width = 5;
var height = 7;
var area = width * height;
console.log('value of area:', area);
console.log('The type of area:', typeof area);
var bill = 43;
var payment = 52;
var change = payment - bill;
console.log('change value:', change);
console.log('type of change:', typeof change);
var quizzes = 92;
var midterms = 85;
var final = 99;
var grade = (quizzes + midterms + final) / 3;
console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);
var firstName = 'Louisa ';
var lastName = 'Whitaker';
var fullName = firstName + lastName;
console.log('value of name:', fullName); /* firstName + ' ' + lastName */
console.log(`My first name is ${firstName}` + ` and my last name is ${lastName} so my full name must be ${fullName}
which is a type of`, typeof fullName);
var pH = 20;
var isAcidic = pH < 7;
console.log('value: ', isAcidic);
console.log('type:', typeof isAcidic);
var headCount = 25;
var isSparta = headCount === 300;
console.log('Value: this is:', isSparta + ' we are not in Sparta');
console.log('type:', typeof isSparta);
var motto = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto', typeof motto);
