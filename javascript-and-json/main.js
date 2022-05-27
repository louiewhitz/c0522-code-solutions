var array = [
  {
    isbn: '56792',
    title: 'The Witch',
    Author: 'J.R Humboldt'
  },
  {
    isbn: '83972',
    title: 'Diet life',
    Author: 'Lady Gaga'
  },
  {
    isbn: 'NN7539',
    title: 'Coming Home',
    Author: 'James Wood'
  }
];
console.log('type of', typeof array, array);
console.log('Stringify type of:', typeof JSON.stringify(array), JSON.stringify(array));
console.log('Name and Number ID', typeof JSON.stringify({ name: 'Jason', id: 456 }), JSON.stringify({ name: 'Jason', id: 456 }));
var newObj = '({"name":"Jason", "id":"456"})';
console.log('type of:', newObj, typeof newObj);

// console.log('object parsed:', JSON.parse(json));
// console.log(typeof object);
