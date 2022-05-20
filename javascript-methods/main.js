var quiz = 60;
var final = 90;
var midterm = 100;
var maximumResult = Math.max((quiz, final, midterm));

console.log('maximumResult', maximumResult);

var heroes = ['batman', 'spiderman', 'wonder woman', 'thor'];
console.log(heroes);
console.log(heroes.length);

var randomNumber = Math.floor(Math.random(heroes.length));
console.log('random number', randomNumber);

var randomIndex = Math.floor(randomNumber);
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

console.log(library.pop());
var lastBook = {
  title: 'the Birds',
  author: 'Fred Jeeps'
};
console.log(lastBook);

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
library.splice(1, 0);

console.log(library);
