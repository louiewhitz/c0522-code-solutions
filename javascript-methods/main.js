var cookies = 60;
var cupcakes = 90;
var brownies = 100;
var maximumResult = Math.max((cookies, brownies, cupcakes));

console.log('maximumResult:', maximumResult);

var heroes = ['batman', 'spiderman', 'wonder woman', 'thor'];

var randomNumber = Math.floor(Math.random());
console.log('random number', randomNumber);
randomNumber = Math.floor(Math.random() * heroes.length);

console.log(randomNumber);
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

var library = [{
  title: 'I I can fly',
  author: 'James Fly'
},
{
  title: 'Sorcerers Stone',
  author: 'J.K. Rowling'
},
{
  title: 'the Birds',
  author: 'Fred Jeeps'
}];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push({ js });
library.unshift({ css });
library.splice(1, 1);
console.log(library);
var fullName = 'Louisa Whitaker';
var firstAndLastName = fullName.split(' ');
console.log('First and Last Name', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log(sayMyName);
